import { Platform, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  AccountDetails,
  Accounts,
  ContactDetails,
  Contacts,
  Invoice,
  InvoiceDetails,
  OrderDetails,
  Orders,
  Product,
  ProductDetails,
} from "../pages";
import {
  COLORS,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ExpenseClaimIcon, PersonIcon } from "../assets/icons/icons";
import { NavigationContainer } from "@react-navigation/native";
import { assets } from "../assets";
import { createStackNavigator } from "@react-navigation/stack";
import CreateOrder from "../pages/home/orders/CreateOrder";

const BottomTabs = () => {
  const DetailsStack = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="Contacts">
        <Stack.Screen
          name="ContactsDetails"
          options={{ headerShown: false }}
          component={ContactDetails}
        />
        <Stack.Screen
          name="Contacts"
          options={{ headerShown: false }}
          component={Contacts}
        />
      </Stack.Navigator>
    );
  };
  const OrdersStack = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="Orders">
        <Stack.Screen
          name="Order"
          options={{ headerShown: false }}
          component={Orders}
        />
        <Stack.Screen
          name="CreateOrders"
          options={{ headerShown: false }}
          component={CreateOrder}
        />
        <Stack.Screen
          name="OrdersDetails"
          options={{ headerShown: false }}
          component={OrderDetails}
        />
      </Stack.Navigator>
    );
  };
  const AccountStack = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="Account">
        <Stack.Screen
          name="Account"
          options={{ headerShown: false }}
          component={Accounts}
        />
          <Stack.Screen
          name="AccountsDetails"
          options={{ headerShown: false }}
          component={AccountDetails}
        />
      </Stack.Navigator>
    );
  };
  const ProductStack = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen
          name="Product"
          options={{ headerShown: false }}
          component={Product}
        />
          <Stack.Screen
          name="ProductDetails"
          options={{ headerShown: false }}
          component={ProductDetails}
        />
      </Stack.Navigator>
    );
  };
  const InvoiceStack = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="Invoice">
        <Stack.Screen
          name="Invoice"
          options={{ headerShown: false }}
          component={Invoice}
        />
          <Stack.Screen
          name="InvoiceDetails"
          options={{ headerShown: false }}
          component={InvoiceDetails}
        />
      </Stack.Navigator>
    );
  };
  const BottomTabs = createBottomTabNavigator();
  // Define the default height for the tabBarStyle
  const defaultTabBarHeight = verticalScale(100);

  // Define the height for different platforms
  const platformTabBarHeight = Platform.select({
    ios: "12%", // Customize the height for iOS
    android: verticalScale(80), // Customize the height for Android
    default: defaultTabBarHeight, // Use the default height for other platforms
  });

  return (
    <BottomTabs.Navigator
      initialRouteName="Contacts"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.BACKGROUND,
          height: platformTabBarHeight,
        },
      })}
    >
      <BottomTabs.Screen
        options={{
          tabBarLabel: "Contacts",
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            color: "gray",
            marginBottom: verticalScale(10),
            fontSize: moderateScale(14),
            marginLeft: horizontalScale(5),
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={assets.contact}
                style={{
                  height: moderateScale(30),
                  width: moderateScale(30),
                  opacity: focused ? 1 : 0.5,
                }}
              />
            );
          },
        }}
        name="Contact"
        component={DetailsStack}
      />
      <BottomTabs.Screen
        options={{
          tabBarLabel: "Accounts",
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            color: "gray",
            marginBottom: verticalScale(10),
            fontSize: moderateScale(14),
            marginLeft: horizontalScale(5),
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={assets.accounts}
                style={{
                  height: moderateScale(30),
                  width: moderateScale(30),
                  opacity: focused ? 1 : 0.5,
                }}
              />
            );
          },
        }}
        name="Accounts"
        component={AccountStack}
      />
      <BottomTabs.Screen
        options={{
          tabBarLabel: "Orders",
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            color: "gray",
            marginBottom: verticalScale(10),
            fontSize: moderateScale(14),
            marginLeft: horizontalScale(5),
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={assets.orders}
                style={{
                  height: moderateScale(30),
                  width: moderateScale(30),
                  opacity: focused ? 1 : 0.5,
                }}
              />
            );
          },
        }}
        name="Orders"
        component={OrdersStack}
      />
      <BottomTabs.Screen
        options={{
          tabBarLabel: "products",
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            color: "gray",
            marginBottom: verticalScale(10),
            fontSize: moderateScale(14),
            marginLeft: horizontalScale(5),
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={assets.products}
                style={{
                  height: moderateScale(30),
                  width: moderateScale(30),
                  opacity: focused ? 1 : 0.5,
                }}
              />
            );
          },
        }}
        name="products"
        component={ProductStack}
      />
      <BottomTabs.Screen
        options={{
          tabBarLabel: "invoice",
          tabBarLabelPosition: "below-icon",
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            color: "gray",
            marginBottom: verticalScale(10),
            fontSize: moderateScale(14),
            marginLeft: horizontalScale(5),
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={assets.invoice}
                style={{
                  height: moderateScale(30),
                  width: moderateScale(30),
                  opacity: focused ? 1 : 0.5,
                }}
              />
            );
          },
        }}
        name="invoice"
        component={InvoiceStack}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
