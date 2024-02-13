import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "./baseUrl";

export const getAllInvoice = async (userToken, page, limit) => {
  return new Promise(async (resolve, reject) => {
    const url = `${BASE_URL}/Invoice`;
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
      console.log("Get Invoices Api Error", error);
      reject(error.response.data);
    }
  });
};
export const getAllInvoiceList = async (userToken, page, limit, Id) => {
  return new Promise(async (resolve, reject) => {
    const url = `${BASE_URL}/Invoice/${Id}?page=${page}&limit=${limit}`;
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
      console.log("Get InvoicesList Api Error", error);
      reject(error.response.data);
    }
  });
};
