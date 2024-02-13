import { StyleSheet } from "react-native";
import { COLORS, moderateScale, verticalScale } from "../../../constants";

const styles = StyleSheet.create({
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