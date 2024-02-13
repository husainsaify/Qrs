import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

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
    color:COLORS.BLACK

  },
  description: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "normal",
    marginLeft: 40,
    color:COLORS.BLACK

  },
  price: {
    fontSize: 14,
    marginLeft: 28,
    marginBottom: 5,
    fontWeight: "normal",
    color:COLORS.BLACK

  },
  rating: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "normal",
    marginLeft: 10,
    color:COLORS.BLACK

  },
  category: {
    fontSize: 14,
    fontWeight: "normal",
    marginLeft:12,
    color:COLORS.BLACK

  },
  boldText: {
    fontWeight: "bold",
    color:COLORS.BLACK

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
