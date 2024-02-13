import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "./baseUrl";


  export const getAllContacts = async (userToken, page, limit)=>{
    console.log(userToken,"user")
    return new Promise(async (resolve, reject)=>{
      const url = `${BASE_URL}/Contact`;
        try{
            let response = await axios({
                method: "GET",
                headers: {
                  Authorization: `Bearer ${userToken}`,
                  "Content-Type": "application/json",
                },
                url: url
              })
            resolve(response?.data?.recentItems)
        }catch (error) {
            console.log("Get contacts Api Error", error);
            reject(error.response.data)
        }
    })
  }
  export const getAllContactsList = async (userToken, page, limit,iD)=>{
   
    return new Promise(async (resolve, reject)=>{
      const url = `${BASE_URL}/Contact/${iD}?page=${page}&limit=${limit}`;
        try{
            let response = await axios({
                method: "GET",
                headers: {
                  Authorization: `Bearer ${userToken}`,
                  "Content-Type": "application/json",
                },
                url: url
              })
            resolve(response?.data)
        }catch (error) {
            console.log("Get contactsLIST Api Error", error);
            reject(error.response.data)
        }
    })
  }
  