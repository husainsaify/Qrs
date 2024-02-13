import { View, Text, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { NavBar } from "../../../../common";
import { verticalScale } from "../../../../constants";
import styles from "./details";
import { getAllProductList } from "../../../../services/api/product";
import {
  requestSent,
  responseRecived,
} from "../../../../services/redux/slice/utilsSlice";
import { useDispatch, useSelector } from "react-redux";
const Details = ({ route }) => {
  const { data } = route.params;
  const  Id = data?.id;
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const fetchProductByID = async () => {
    try {
      dispatch(requestSent());
      const response = await getAllProductList(
        user?.data?.access_token,
        page,
        limit,
        Id
      );
      setProductList(response);
      dispatch(responseRecived());
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error?.error);
      dispatch(responseRecived());
    }
  };
  useEffect(() => {
    fetchProductByID();
  }, []);

  console.log(JSON.stringify(productList), "contact");
  return (
    <View style={{ flex: 1 }}>
      <NavBar
        heading={data?.pageHeading}
        marginTop={verticalScale(50)}
        source={data.icon}
      />
      <View style={styles.container}>
        {/* Image */}

        {/* Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{`Name: ${productList?.Name}`}</Text>
          <View style={styles.containerOne}>
            <View style={styles.leftSection}>
              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>Address:</Text>
                <Text style={styles.category}>{productList?.OtherStreet}</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>City:</Text>
                <Text style={styles.description}>
                  {productList?.OtherCity}
                </Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>Email:</Text>
                <Text style={styles.rating}>{productList?.Email}</Text>
              </View>
            </View>

            {/* Right Section */}
            <View style={styles.rightSection}>
              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>State:</Text>
                <Text style={styles.price}>{productList.OtherState}</Text>
              </View>

              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>Country:</Text>
                <Text style={styles.rating}>{productList?.OtherCountry}</Text>
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.boldText}>Phone:</Text>
                <Text style={styles.rating}>{productList?.Phone}</Text>
              </View>
          
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;
