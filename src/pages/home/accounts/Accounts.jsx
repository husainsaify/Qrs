import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./accounts";
import { assets } from "../../../assets";
import { verticalScale } from "../../../constants";
import { NavBar } from "../../../common";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  getAllAccountList,
  getAllAccounts,
} from "../../../services/api/accounts";
import {
  requestSent,
  responseRecived,
} from "../../../services/redux/slice/utilsSlice";

const Accounts = () => {
  const [account, setAccount] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.auth);

  const fetchAccount = async () => {
    try {
      dispatch(requestSent());
      const response = await getAllAccounts(
        user?.data?.access_token,
        page,
        limit
      );
      setAccount(response);
      dispatch(responseRecived());
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error?.error);
      dispatch(responseRecived());
    }
  };

  useEffect(() => {
    fetchAccount();
  }, [page, limit]);
  return (
    <View>
      <NavBar
        heading={"Accounts"}
        source={assets.accounts}
        marginTop={verticalScale(50)}
      />
      <ScrollView>
        <FlatList
          data={account}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("AccountsDetails", {
                    data: {
                      id: item?.Id,
                      pageHeading: "Accounts",
                      icon: assets.accounts,
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

export default Accounts;
