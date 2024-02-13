import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./orders";
import { assets } from "../../../assets";
import { verticalScale } from "../../../constants";
import { NavBar } from "../../../common";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getAllOrders, getAllOrdersList } from "../../../services/api/orders";
import {
  requestSent,
  responseRecived,
} from "../../../services/redux/slice/utilsSlice";

const Orders = () => {
  const [order, setOrder] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.auth);

  const fetchOrder = async () => {
    try {
      dispatch(requestSent());
      const response = await getAllOrders(
        user?.data?.access_token,
        page,
        limit
      );
      setOrder(response);
      dispatch(responseRecived());
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error?.error);
      dispatch(responseRecived());
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [page, limit]);
  return (
    <View>
      <NavBar
        heading={"Orders"}
        source={assets.add}
        onPress={() => {
          navigation.navigate("CreateOrders");
        }}
        marginTop={verticalScale(50)}
      />
      <ScrollView>
        <FlatList
          data={order}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("OrdersDetails", {
                    data: {
                      id: item?.Id,
                      pageHeading: "Orders-Details",
                      icon: assets.orders,
                    },
                  });
                }}
                style={styles.card}
              >
                <Text style={styles.name}>{item?.OrderNumber}</Text>
                {/* <Text style={styles.info}>Phone: {contactsList?.Phone}</Text>
<Text style={styles.info}>Email: {contactsList.Email}</Text>
<Text style={styles.info}>Country: {contactsList.OtherCountry}</Text>
<Text style={styles.info}>City: {contactsList.OtherCity}</Text> */}
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Orders;
