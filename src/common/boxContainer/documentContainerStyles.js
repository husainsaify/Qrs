import { StyleSheet} from "react-native";
import {
  COLORS,
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: COLORS.BACKGROUND,
    height: verticalScale(70),
    marginTop: verticalScale(2),
    alignItems: "center",
    paddingHorizontal: horizontalScale(20),
  },

  image: {
    resizeMode: "contain",
    width: moderateScale(48),
    height: moderateScale(48),
    marginVertical: verticalScale(20),
    backgroundColor: COLORS.BACKGROUND,
  },
  textContainer: {
    flex: 1,
    marginLeft: horizontalScale(25),
  },
  heading: {
    fontSize: moderateScale(22),
    color: COLORS.TEXT,
    marginBottom: verticalScale(5),
  },
  subHeading: {
    color: COLORS.HEADING,
    fontSize: moderateScale(16),
    maxWidth: "90%"
  },
  btnContainer: {
    borderColor: "#EB742E",
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    marginRight: horizontalScale(8),
    minWidth: horizontalScale(130)
  },
  btnText: {
    color: "#EB742E",
    fontSize:moderateScale(14),
    textAlign:"center"
  },
});

export default styles;
