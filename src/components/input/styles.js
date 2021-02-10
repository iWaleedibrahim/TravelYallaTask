import { StyleSheet, I18nManager } from "react-native"
import DIMS from "../../common/dims"
import FONTS from "../../common/fonts"
import COLORS from "../../common/colors"


const textInputHeight = DIMS.screenHeight / 20
const textInputWidth = DIMS.screenWidth * 0.7893


const styles = StyleSheet.create({
  container: {
    height: textInputHeight,
    width: textInputWidth,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
    paddingHorizontal: 15,
    paddingVertical: 0,
    marginBottom: 10,
    alignSelf:'center',
  },
  icon: {
    marginRight: 15,
    width: DIMS.screenWidth / 18,
    height: DIMS.screenWidth / 18,
  },
  textInput: {
    flex: 1,
    height: 45,
    fontWeight: "normal",
    opacity: 0.75,
    paddingVertical: 0,
    fontSize: 14,
    color: COLORS.blue,
    fontFamily:FONTS.Verdana
  },
});


export default styles;
