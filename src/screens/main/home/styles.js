import { StyleSheet } from 'react-native';
import { colors, isIPHONEX, isPAD, wp, hp, fontWeight } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.PRIMARY.default
    },
    header: {
        fontSize: fontWeight(30),
        alignSelf: 'center',
        color: colors.ORANGE.default,
        fontWeight: 700
    },
    imageViewCont: {
        margin: wp(2.5),
        borderRadius: 15,
        overflow: 'hidden'
    },
    imageStyle: {
        width: wp(44),
        height: hp(25),
        resizeMode: 'stretch',
        borderRadius: 15
    },
    autherCont: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: colors.SECONDARY.opacity_50
    },
    autherText: {
        color: colors.PRIMARY.default,
        fontSize: fontWeight(14)
    },
    footerCont: {
        marginBottom: hp(5),
        marginTop: hp(1),
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadTxt: {
        color: colors.ORANGE.default,
        fontSize: fontWeight(16),
        textDecorationLine: 'underline',
        padding: 5,
    }
});

export default styles;
