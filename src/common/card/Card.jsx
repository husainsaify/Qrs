import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { verticalScale } from "../../constants";

const Card = ({ title, onPress, description}) => {
  
  return (
    // <FlatList
    //   data={data}
    //   keyExtractor={(item) => item.id.toString()}
    //   renderItem={renderItem}
    //   scrollEnabled={scrollEnabled}
    //   onEndReached={onEndReached} // Triggered when scrolling to the end of the list
    //   onEndReachedThreshold={onEndReachedThreshold} // Adjust as needed
    // scrollsToTop={true}
    // style={{marginBottom:verticalScale(25)}}
    // />
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
    <View style={styles.cardContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {/* Add more data fields as needed */}
    </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  cardContent: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
});

export default Card;
