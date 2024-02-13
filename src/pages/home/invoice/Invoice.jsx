import { View, Text, Alert, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { assets } from "../../../assets";
import { verticalScale } from "../../../constants";
import { Button, NavBar } from "../../../common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../../../services/redux/slice/authSlice";
import { useNavigation } from "@react-navigation/native";
import {
  requestSent,
  responseRecived,
} from "../../../services/redux/slice/utilsSlice";
import styles from "./invoice";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import {
  getAllInvoice,
  getAllInvoiceList,
} from "../../../services/api/invoice";
const Invoice = () => {
  const [invoice, setInvoice] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.auth);

  const fetchInvoice = async () => {
    try {
      dispatch(requestSent());
      const response = await getAllInvoice(
        user?.data?.access_token,
        page,
        limit
      );
      setInvoice(response);
      dispatch(responseRecived());
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error?.error);
      dispatch(responseRecived());
    }
  };

  useEffect(() => {
    fetchInvoice();
  }, [page, limit]);

  return (
    <View>
      <NavBar
        heading={"Invoice"}
        source={assets.invoice}
        marginTop={verticalScale(50)}
      />
      <ScrollView>
        <FlatList
          data={invoice}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("InvoiceDetails", {
                    data: {
                      id: item?.Id,
                      pageHeading: "Invoice",
                      icon: assets.invoice,
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

export default Invoice;
