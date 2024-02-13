import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

  export const loginApi = async (grant_type,client_id,client_secret ,username, password) => {
    return new Promise(async (resolve, reject) => {
        console.log(grant_type,client_id,client_secret ,username, password)
      try {
        let response = await axios({
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          url: `https://login.salesforce.com/services/oauth2/token`,
          data: {
            grant_type:grant_type,
            client_id:client_id,
            client_secret:client_secret,
            username: username,
            password: password,

          }
        })
        resolve(response.data)
      } catch (error) {
        console.log("Get Auth Api Error", error.error);
        reject(error.error);
      }
    })
  }
  