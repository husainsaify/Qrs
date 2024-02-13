import { StyleSheet } from "react-native";
import { COLORS, horizontalScale, moderateScale, verticalScale } from "../../../constants";

const styles = StyleSheet.create({
    pagination: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: verticalScale(25),
        flex:1,
      
      },
      paginationButton: {
        marginHorizontal: horizontalScale(10),
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(5),
        backgroundColor:COLORS.BTNCOLOR,
        borderRadius: moderateScale(5),
      },
      paginationText: {
        color: "black",
        fontSize: moderateScale(20),
      },
      card: {
        width:"95%",
        backgroundColor: '#fff',
        padding: moderateScale(15),
        margin: moderateScale(10),
        borderRadius: moderateScale(10),
        elevation: moderateScale(3),
      },
      name: {
        fontSize: moderateScale(24),
        fontWeight: 'bold',
        marginBottom: verticalScale(5),
        textAlign:"center",
    color:COLORS.BLACK

      },
      info: {
        fontSize: moderateScale(16),
        marginBottom: verticalScale(3),
    color:COLORS.BLACK

      },
})
export default styles