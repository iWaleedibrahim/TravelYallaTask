import { StyleSheet } from "react-native"
import DIMS from "../../common/dims"
import FONTS from "../../common/fonts"
import COLORS from "../../common/colors"


const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: DIMS.screenWidth - 32,
    borderRadius: 15,
    marginTop: 15,
    marginHorizontal: 16,
  },
  image: {
    width: DIMS.screenWidth / 2 - 64,
    height: DIMS.screenWidth / 2,
    backgroundColor: 'teal',
    borderRadius: 15,
    marginRight: 16,
    marginLeft: 8,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: FONTS.Palatino,
    fontSize: 18,
    marginTop: 3,
    marginBottom: 12,
  },
  description: {
    color: COLORS.TEXTGRAY,
    maxWidth: 200,
    marginBottom: 41,
    fontSize: 9,
    textAlign: 'justify'
  },
  button: {
    marginHorizontal: 8
  },
  buttonText: {
    fontSize: 13
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: 'space-between'
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  raw: {
    flexDirection: 'row'
  }
})

export default styles;
