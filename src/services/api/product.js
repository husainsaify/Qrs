import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "./baseUrl";

export const getAllProduct = async (userToken, page, limit) => {
  return new Promise(async (resolve, reject) => {
    const url = `${BASE_URL}/Product2`;
    try {
      let response = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        url: url,
      });
      resolve(response?.data?.recentItems);
    } catch (error) {
      console.log("Get Accounts Api Error", error);
      reject(error.response.data);
    }
  });
};
export const getAllProductList = async (userToken, page, limit, Id) => {
  return new Promise(async (resolve, reject) => {
    const url = `${BASE_URL}/Product2/${Id}?page=${page}&limit=${limit}`;
    try {
      let response = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
        url: url,
      });
      resolve(response?.data);
    } catch (error) {
      console.log("Get AccountList Api Error", error);
      reject(error.response.data);
    }
  });
};
