import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useState } from "react";
import BoxContainer from "../../common/boxContainer/BoxContainer";
import styles from "./LoginStyles";
import {
  COLORS,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants";
import { assets } from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../common/button/Button";

import { loginApi } from "../../services/api/Auth";
import {
  requestSent,
  responseRecived,
} from "../../services/redux/slice/utilsSlice";
import { logInUser } from "../../services/redux/slice/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = ({route}) => {
  const navigation = useNavigation();
  const [username, setusername] = useState();
  const [password, setPassword] = useState();
  const [client_id, setclient_id] = useState();
  const [client_secret, setclient_secret] = useState();
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [grant_type, setgrant_type] = useState("password");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const handleEmailFocus = () => {
    setEmailIsFocused(true);
  };

  const handleEmailBlur = () => {
    setEmailIsFocused(false);
    const isEmailValid = validateEmail(username);
  };

  const handlePasswordFocus = () => {
    setPasswordIsFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordIsFocused(false);
  };

  const emailInputContainerStyle = {
    ...styles.inputContainer,
    backgroundColor: emailIsFocused ? "rgba(215, 215, 215,0.3)" : "white",
  };

  const errorStyle = {
    borderColor: "red",
  };

  const passwordInputContainerStyle = {
    ...styles.inputContainer,
    backgroundColor: passwordIsFocused ? "rgba(215, 215, 215,0.3)" : "white",
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const passwordIconName = isPasswordVisible ? "eye" : "eye-off";

  //Login Api
  const handleLogin = async () => {
    try {
      if (!username || !password || !client_id || !client_secret) {
        Alert.alert("Invalid Credentials\nPlease Fill All The Fields");

        return;
      }
      dispatch(requestSent());

      const res = await loginApi(
        grant_type,
        client_id,
        client_secret,
        username,
        password
      );
      console.log(res.access_token, "authres");
      dispatch(
        logInUser({
          data: res,
          page: route.name,
        })
      );

   await AsyncStorage.setItem("user", JSON.stringify({
    userToken: res.access_token,

  }));
   
      dispatch(responseRecived());
    } catch (err) {
      setError(err);
      Alert.alert(error?.error);
      console.log(error);
      dispatch(responseRecived());
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          backgroundColor: COLORS.BACKGROUND,
        }}
      >
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.container}>
            <View style={styles.firstContainer}>
              <Image source={assets.Logo} width={0} height={0} style={{alignSelf:"center",marginTop:verticalScale(-90)}} resizeMode="center"/>
          
      
            </View>
            <Text style={styles.subHeadingText}>Welcome</Text>
            <Text style={styles.text}>Sign in to your account.</Text>
            <View style={styles.formContainer}>
              <View style={styles.inpFieldCont}>
                <TextInput
                  placeholder="username"
                  autoCapitalize="none"
                  textContentType="name"
                  placeholderTextColor={"black"}
                  style={[
                    emailInputContainerStyle,
                    // error?.error_key == 'email' ? errorStyle : '',
                  ]}
                  onFocus={handleEmailFocus}
                  onBlur={handleEmailBlur}
                  value={username}
                  onChangeText={(text) => setusername(text)}
                />
                {/* {error?.error_key == 'email' ? (
                  <Text style={styles.errTxt}>
                    {error?.error_message.charAt(0).toUpperCase() +
                      error?.error_message.slice(1)}
                    *
                  </Text>
                ) : (
                  ''
                )} */}
              </View>
              <View style={styles.inpFieldCont}>
                <View
                  style={{
                    position: "relative",
                  }}
                >
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="black"
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    style={[
                      passwordInputContainerStyle,
                      //   error?.error_key == 'password' ? errorStyle : '',
                    ]}
                    secureTextEntry={!isPasswordVisible}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                  />
                  <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                    <Ionicons
                      name={passwordIconName}
                      size={moderateScale(24)}
                      color="black"
                      style={styles.passwordIcon}
                    />
                  </TouchableWithoutFeedback>
                </View>
                {/* {error?.error_key == 'password' ? (
                  <Text style={styles.errTxt}>
                    {error?.error_message.charAt(0).toUpperCase() +
                      error?.error_message.slice(1)}
                    *
                  </Text>
                ) : (
                  ''
                )} */}
              </View>
              <View style={styles.inpFieldCont}>
                <View
                  style={{
                    position: "relative",
                  }}
                >
                  <TextInput
                    placeholder="User Key"
                    placeholderTextColor="black"
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    style={[
                      passwordInputContainerStyle,
                      //   error?.error_key == 'password' ? errorStyle : '',
                    ]}
                    value={client_id}
                    onChangeText={(text) => setclient_id(text)}
                  />
                </View>
                {/* {error?.error_key == 'password' ? (
                  <Text style={styles.errTxt}>
                    {error?.error_message.charAt(0).toUpperCase() +
                      error?.error_message.slice(1)}
                    *
                  </Text>
                ) : (
                  ''
                )} */}
              </View>
              <View style={styles.inpFieldCont}>
                <View
                  style={{
                    position: "relative",
                  }}
                >
                  <TextInput
                    placeholder="User Secret"
                    placeholderTextColor="black"
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                    style={[
                      passwordInputContainerStyle,
                      //   error?.error_key == 'password' ? errorStyle : '',
                    ]}
                    value={client_secret}
                    onChangeText={(text) => setclient_secret(text)}
                  />
                </View>
                {/* {error?.error_key == 'password' ? (
                  <Text style={styles.errTxt}>
                    {error?.error_message.charAt(0).toUpperCase() +
                      error?.error_message.slice(1)}
                    *
                  </Text>
                ) : (
                  ''
                )} */}
              </View>
              <Button buttonText={"Sign in "} onPress={handleLogin} />
            </View>
          </View>
          <View style={styles.hr} />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
