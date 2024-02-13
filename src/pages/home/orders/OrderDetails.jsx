import { View, Text, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { NavBar } from "../../../common";
import { verticalScale } from "../../../constants";
import styles from "./details";
import { getAllOrdersList } from "../../../services/api/orders";
import { useDispatch, useSelector } from "react-redux";
import {
  requestSent,
  responseRecived,
} from "../../../services/redux/slice/utilsSlice";
const Details = ({ route }) => {
  const { data } = route.params;
  const Id = data?.id;
  const [orderList, setOrderList] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const fetchOrderByID = async () => {
    try {
      dispatch(requestSent());
      const response = await getAllOrdersList(
        user?.data?.access_token,
        page,
        limit,
        Id
      );
      setOrderList(response);
      dispatch(responseRecived());
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error?.error);
      dispatch(responseRecived());
    }
  };
  useEffect(() => {
    fetchOrderByID();
  }, [page, limit]);
 
  return (
    <View style={{ flex: 1 }}>
      <NavBar
        heading={data?.pageHeading}
        marginTop={verticalScale(50)}
        source={data.icon}
      />
      <View style={styles.container}>
        {/* Image */}
        <Image source={{ uri: data?.item?.image }} style={styles.image} />

        {/* Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{data?.item?.title}</Text>
          <Text style={styles.category}>Category: {data?.item?.category}</Text>
          <Text style={styles.description}>{data?.item?.description}</Text>

          {/* Row for Price and Ratings */}
          <View style={styles.rowContainer}>
            <Text style={styles.price}>Price: ${data?.item?.price}</Text>
            <Text style={styles.rating}>
              Rating: {data?.item?.rating?.rate}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;
