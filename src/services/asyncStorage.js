import AsyncStorage from "@react-native-async-storage/async-storage";

// Get Async Storage Data //
export const getAsyncStorageData = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key)
        const parseData = JSON.parse(data)
        return parseData
    } catch (err) {
        console.log(err);
        return err
    }
}
  
export const setDataToStorage = async (key, value) => {
    try {
      const data = JSON.stringify(value);
      await AsyncStorage.setItem(key, data);
      return true;
    } catch (error) {
      return null;
    }
  };
  
  export const removeDataFromStorage = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      return null;
    }
  };
  
  export const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      return null;
    }
  };