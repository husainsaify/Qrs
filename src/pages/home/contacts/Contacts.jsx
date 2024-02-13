import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useDebugValue, useEffect, useState } from "react";
import styles from "./contacts";
import { assets } from "../../../assets";
import { COLORS, verticalScale } from "../../../constants";
import { Card, NavBar } from "../../../common";
import {
  requestSent,
  responseRecived,
} from "../../../services/redux/slice/utilsSlice";
import {
  getAllContacts,
  getAllContactsList,
} from "../../../services/api/contact";
import { useDispatch, useSelector } from "react-redux";
import {
  getAsyncStorageData,
  setDataToStorage,
} from "../../../services/asyncStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";
const Contacts = () => {
  const [contactsList, setContactsList] = useState([]);
  const [contact, setContact] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.auth);
  // const fetchContacts = async () => {
  //   try {
  //     dispatch(requestSent());
  //     const response = await getAllContacts(
  //       user?.data?.access_token,
  //       page,
  //       limit
  //     );
  //     setContact(response);
  //     dispatch(responseRecived());
  //   } catch (error) {
  //     console.log(error);
  //     Alert.alert("Error", error?.error);
  //     dispatch(responseRecived());
  //   }
  // };
  const fetchContacts = async () => {
    try {
      const isConnected = await NetInfo.fetch().then(
        (state) => state.isConnected
      );
      if (isConnected) {
        dispatch(requestSent());
        const response = await getAllContacts(
          user?.data?.access_token,
          page,
          limit
        );
        setContact(response);
        dispatch(responseRecived());

        setDataToStorage("contactData", response);
      } else {
        const storedData = getAsyncStorageData("contactData");
        console.log(storedData, "storedData");
        if (storedData) {
          setContact(storedData);
        }
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
      Alert.alert("Error", error?.message || "Failed to fetch contacts.");
      dispatch(responseRecived());
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [page, limit]);

  return (
    <View style={{ flex: 1 }}>
      <NavBar
        heading={"Contacts"}
        source={assets.contact}
        marginTop={verticalScale(50)}
      />

      <FlatList
        data={contact}
        scrollEnabled
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ContactsDetails", {
                  data: {
                    id: item?.Id,
                    pageHeading: "Contacts",
                    icon: assets.contact,
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

      {contactsList.length >= limit && (
        <View style={styles.pagination}>
          <TouchableOpacity
            style={[styles.paginationButton, { marginRight: 10 }]}
            disabled={page === 1}
            onPress={() => {
              setLimit((prevPage) => Math.max(1, prevPage - 5));
              setPage((prev) => prev - 1);
            }}
          >
            <Icon
              name="chevron-left"
              size={32}
              style={[
                styles.paginationText,
                { color: page === 1 ? "white" : COLORS.BACKGROUND },
              ]}
            />
          </TouchableOpacity>

          <Text style={styles.paginationText}>{page}</Text>

          <TouchableOpacity
            style={[styles.paginationButton, { marginLeft: 10 }]}
            disabled={contactsList.length < limit}
            onPress={() => {
              setLimit((prevPage) => prevPage + 5);
              setPage(page + 1);
            }}
          >
            <Icon
              name="chevron-right"
              size={38}
              style={[
                styles.paginationText,
                {
                  color:
                    contactsList.length < limit ? "white" : COLORS.BACKGROUND,
                },
              ]}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Contacts;
