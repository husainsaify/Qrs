import { Platform, StyleSheet } from "react-native";
import {
  COLORS,
  verticalScale,
  horizontalScale,
  moderateScale,
  SHADOWS,
} from "../../constants";

const styles = StyleSheet.create({
  NavContainer: {
    width: "95%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: Platform.select({
      ios: verticalScale(40),
      android: verticalScale(25),
      default: verticalScale(25),
    }),
    paddingBottom: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    color: "red",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: moderateScale(10),
  },
  navText: {
    textAlign: "center",
    fontSize: moderateScale(22),
    color: "black",
    fontWeight: "800",
    
  },

  profile: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(50),
    resizeMode: "cover",
    borderColor: COLORS.BORDERCOLOR,
    borderWidth: moderateScale(1),
    overflow: "hidden",
    // ...SHADOWS.sprade
  },

  profileImage: {
    width: moderateScale(50),
    height: moderateScale(50),
  },

  add: {
    width: moderateScale(35),
    height: moderateScale(35),
    resizeMode: "contain",
    display: "none",
  },
  badge: {
    position: "absolute",
    top: verticalScale(-15),
    right: horizontalScale(-20),
    backgroundColor: COLORS.BTNCOLOR,
    borderRadius: moderateScale(100),
    width: moderateScale(25),
    height: moderateScale(25),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: moderateScale(13),
    fontWeight: "bold",
  },
  notificationContainer:{
  
  }
});
export default styles;
