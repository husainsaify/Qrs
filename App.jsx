import { LogBox, StyleSheet, Text, View } from "react-native";
import AuthStack from "./src/navigation/AuthStack";
import {} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import MainStack from "./src/navigation/MainStack";
import BottomTabs from "./src/navigation/BottomTabs";
import { store } from "./src/services/redux/store";
import 'react-native-gesture-handler';

export default function App() {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead'])
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <MainStack />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
