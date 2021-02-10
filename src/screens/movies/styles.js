


import { StyleSheet } from "react-native"
import FONTS from "../../common/fonts"

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 24
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalChildContainer: {
        paddingHorizontal: 8,
        paddingVertical: 24
    },
    modalText: {
        fontFamily: FONTS.Baskerville,
        fontSize: 18,
    },

});


export default styles;


