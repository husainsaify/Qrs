import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../pages";
import BottomTabs from "./BottomTabs";
import { NavigationContainer } from "@react-navigation/native";

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (

      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    
  );
};

export default AuthStack;
