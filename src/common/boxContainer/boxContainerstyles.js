import { StyleSheet } from "react-native";
import {
  COLORS,
  verticalScale,
  horizontalScale,
  moderateScale,
  SHADOWS,
} from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display:"flex",
    flexDirection: "row",
    backgroundColor: COLORS.BACKGROUND,
    height: verticalScale(90),
    marginTop: verticalScale(20),
    alignItems: "center",
    paddingHorizontal: horizontalScale(22),
    
    ...SHADOWS.light
  },

  image: {
    resizeMode: "contain",
    width: horizontalScale(70),
    height: verticalScale(50),
    marginVertical: verticalScale(10),
    alignSelf:"center"
  },
  textContainer: {
    flex: 1,
    marginLeft: horizontalScale(25),
  },
  heading: {
    fontSize: moderateScale(22),
    color: COLORS.HEADING,
    fontWeight: "bold",
  },
  subHeading: {
    color: COLORS.TEXT,
    fontSize: moderateScale(18),
  },
  thirdHeading: {
    color: COLORS.TEXT,
    fontSize: moderateScale(16),
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  icon: {
    marginTop: verticalScale(50),
  },
  price: {
    color: '#36454F',
    fontSize: moderateScale(18),
    marginRight: horizontalScale(25),
    fontWeight: "600",
    marginBottom: verticalScale(20),
  },
});

export default styles;
