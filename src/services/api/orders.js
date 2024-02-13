import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "./baseUrl";

export const getAllOrders = async (userToken, page, limit) => {
  return new Promise(async (resolve, reject) => {
    const url = `${BASE_URL}/Order`;
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
      console.log("Get Orders Api Error", error);
      reject(error.response.data);
    }
  });
};
export const getAllOrdersList = async (userToken, page, limit, Id) => {
  return new Promise(async (resolve, reject) => {
    const url = `${BASE_URL}/Order/${Id}?page=${page}&limit=${limit}`;
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
      console.log("Get OrderList Api Error", error);
      reject(error.response.data);
    }
  });
};
