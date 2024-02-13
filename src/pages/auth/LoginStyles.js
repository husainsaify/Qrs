// login page style

import { StyleSheet } from "react-native";
import {
  COLORS,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: verticalScale(10),
    backgroundColor: COLORS.BACKGROUND
  },
  firstContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: verticalScale(20),
    marginTop: verticalScale(90),
  },
  image: {
    width: horizontalScale(55),
    height: verticalScale(40),
  },
  headingText: {
    letterSpacing: 3,
    marginLeft: verticalScale(8),
    fontSize: moderateScale(28),
    color: COLORS.HEADINGTEXT,
  },

  subHeadingText: {
    color: COLORS.SUBHEADINGTEXT,
    fontWeight: "300",
    fontSize: moderateScale(34),
    textAlign: "center",
    width: "100%",
    marginBottom: verticalScale(25),
    fontWeight: "600",
    marginTop:-90
  },
  text: {
    color: COLORS.TEXT,
    textAlign: "center",
    fontSize: moderateScale(16),
    marginBottom: verticalScale(70),
    fontWeight: "500",
  },
  errTxt:{
    color:"red"
  },
  formContainer: {
    width: "100%",
    marginBottom: verticalScale(25),

    paddingBottom: verticalScale(10),
  },

  inputContainer: {
    width: "100%",
    borderColor: COLORS.BORDERCOLOR,
    height: verticalScale(50),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(15),
    paddingLeft: horizontalScale(25),
    fontSize: moderateScale(19),
    marginTop: horizontalScale(15),
    color:COLORS.BLACK

  },
  inpFieldCont:{
    width: "80%",
    alignSelf: "center",
  },
  forgot: {
    width: "87%",
    marginTop: verticalScale(18),
  },
  forgotText: {
    textAlign: "right",
    fontSize: moderateScale(18),
    fontWeight: "400",
    color:COLORS.GREY

  },
  signupBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signup: {
    fontSize: moderateScale(18),
    color:COLORS.GREY
  },
  hr: {
    borderBottomColor: COLORS.BTNCOLOR,
    marginTop: verticalScale(230),
    borderBottomWidth: 6,
    width: "36%",
    borderRadius: moderateScale(15),
    alignSelf:"center"
  },
  passwordIcon: {
    position: "absolute",
    top: "50%",
    transform: [{translateY: horizontalScale(-10)}],
    right: horizontalScale(30),
  
  },
});

export default Styles;
