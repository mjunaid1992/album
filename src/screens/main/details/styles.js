import { Platform, StyleSheet } from 'react-native';
import { colors, isIPHONEX, isPAD, wp, hp, fontWeight } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.PRIMARY.dark,
    },

    mainImgCont: {
        height: hp(50),
        borderRadius: wp(5),
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: colors.ORANGE.default,
        backgroundColor: colors.ORANGE.default,
    },

    contentCont: {
        paddingHorizontal: wp(7),
    },

    profImg: {
        height: hp(7),
        width: hp(7),
        resizeMode: 'center',
        borderRadius: hp(7),
        borderWidth: 3,
        borderColor: colors.ORANGE.default
    },

    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(1)
    },

    autherInfoCont: {
        marginVertical: hp(2),
        flexDirection: 'row',
        alignItems: 'center',
    },

    text_1: {
        fontSize: fontWeight(18),
        marginStart: wp(5),
        fontWeight: 500,
    },

    text_2: {
        fontSize: 13,
        textAlign: 'center',
        width: wp(70),
        alignSelf: 'center',
        fontWeight: 500,
        color: colors.PRIMARY.default,
        marginVertical: hp(1)
    },

    text_3: {
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'justify'
    },

    text_4: {
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'justify',
        textDecorationLine: 'underline',
        color: colors.ORANGE.default
    },

    text_5: {
        fontSize: 18,
        color: colors.ORANGE.default,
        marginTop: hp(1)
    },

    likeIcon: {
        fontSize: 30,
        color: colors.ORANGE.default,
    },

    likeCont: {
        alignItems: 'center',
    },

    socialLogo: {
        fontSize: 30,
        color: colors.ORANGE.default,
        marginRight: wp(2)
    }


});

export default styles;
