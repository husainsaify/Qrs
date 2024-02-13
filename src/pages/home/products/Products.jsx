import { View, Text, Alert, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import NavBar from "../../../common/NavBar/NavBar";
import { assets } from "../../../assets";
import { verticalScale } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  getAllProduct,
  getAllProductList,
} from "../../../services/api/product";
import {
  requestSent,
  responseRecived,
} from "../../../services/redux/slice/utilsSlice";
import { FlatList } from "react-native-gesture-handler";
import styles from "./products";
const Products = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.auth);

  const fetchProduct = async () => {
    try {
      dispatch(requestSent());
      const response = await getAllProduct(
        user?.data?.access_token,
        page,
        limit
      );
      setProduct(response);
      dispatch(responseRecived());
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error?.error);
      dispatch(responseRecived());
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [page, limit]);
  return (
    <View>
      <NavBar
        heading={"Products"}
        source={assets.products}
        marginTop={verticalScale(50)}
      />
      <ScrollView>
        <FlatList
          data={product}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProductDetails", {
                    data: {
                      id: item?.Id,
                      pageHeading: "Product",
                      icon: assets.products,
                    },
                  });
                }}
                style={styles.card}
              >
                <Text style={styles.name}>{item?.Name}</Text>
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

export default Products;
