import { StyleSheet } from "react-native"
import DIMS from "../../common/dims"
import FONTS from "../../common/fonts"
import COLORS from "../../common/colors"


const styles = StyleSheet.create({
  container: {
    height: DIMS.screenWidth / 7.8125,
    width: DIMS.screenWidth * 0.7493,
    backgroundColor: COLORS.TRAVELYALLA_BLUE,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    alignSelf: 'center'
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    color: COLORS.FULL_WHITE,
    fontFamily: FONTS.Kefa
  },
})

export default styles;

