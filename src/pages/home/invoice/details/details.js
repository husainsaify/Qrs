import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "normal",
    marginLeft: 40,
  },
  price: {
    fontSize: 14,
    marginLeft: 28,
    marginBottom: 5,
    fontWeight: "normal",
  },
  rating: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "normal",
    marginLeft: 10,
  },
  category: {
    fontSize: 14,
    fontWeight: "normal",
    marginLeft:12,
  },
  boldText: {
    fontWeight: "bold",
  },
  leftSection: {
    paddingRight: 10, // Adjust as needed
  },
  rightSection: {
    paddingLeft: 10, // Adjust as needed
  },
  containerOne: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  rowContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});

export default styles;
