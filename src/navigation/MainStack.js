import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import AuthStack from "./AuthStack";
import BottomTabs from "./BottomTabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { logInUser } from "../services/redux/slice/authSlice";
import { getAsyncStorageData } from "../services/asyncStorage";
import { useDispatch, useSelector } from "react-redux";


const MainStack = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const {user} = useSelector(state => state.auth);
  const navigation = useNavigation();
  const[userToken,setUserToken] = useState(null)
  const [onPageLoading, setOnPageLoading] = useState(false);
  const dispatch = useDispatch()
 
  const getAsyncStorageDataCall = async () => {
    try {
      setOnPageLoading(true);
      const asyncData = await getAsyncStorageData('user');
      setUserToken(asyncData.userToken);
     
      setOnPageLoading(false);
    } catch (err) {
      setOnPageLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    getAsyncStorageDataCall();
  }, []);
  return (
    <View style={{ flex: 1}}>
       {user === null ? (
        <AuthStack />
      ) : <BottomTabs/>
       }

    </View>
  );
};

export default MainStack;
