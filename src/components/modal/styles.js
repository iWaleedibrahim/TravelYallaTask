
import { Dimensions, StyleSheet } from "react-native"


const { width, height } = Dimensions.get('window')


const styles = StyleSheet.create({
    modalParentContainer: {
        zIndex: 10000,
        position: 'absolute',
        width,
        height,
        left: 0,
        top: 0,
        backgroundColor: 'rgba(124,124,124,.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalWrapper: {
        borderRadius: 5,
        width: '80%',
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
});

export default styles;


