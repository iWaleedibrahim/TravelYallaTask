import { StyleSheet } from "react-native"
import DIMS from "../../common/dims"
import FONTS from "../../common/fonts"
import COLORS from "../../common/colors"


const styles = StyleSheet.create({
  itemContainer: { 
    width: DIMS.screenWidth / 2  - 32,
    borderRadius: 15,
    marginTop: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: DIMS.screenWidth / 2 - 64,
    height: DIMS.screenWidth / 2,
    borderRadius: 15,
    marginHorizontal: 16,
    marginVertical: 8,
    resizeMode:'cover',
  },
  title: {
    fontWeight: 'bold',
    fontFamily: FONTS.Menlo,
    marginLeft: 16,
    fontSize: 13, 
    marginBottom: 2,
  },
  description: {
    color: COLORS.TEAL,
    marginLeft: 16,
    fontSize: 11, 
    marginBottom: 12,
  }
})

export default styles;
