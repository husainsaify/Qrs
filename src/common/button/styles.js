import { StyleSheet } from "react-native";
import {
  COLORS,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: COLORS.BTNCOLOR,
    height: verticalScale(60),
    alignSelf: "center",
    borderRadius: 15,
    marginTop: verticalScale(55),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: verticalScale(15),
    paddingHorizontal: horizontalScale(10),
  },

  btnText: {
    color: COLORS.BACKGROUND,
    fontSize: moderateScale(23),
    fontWeight: "400",
  },
});

export default styles;
