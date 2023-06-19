import { StyleSheet } from 'react-native';
import { colors, wp, hp, isIPHONEX, isPAD, fontWeight, wpt } from '../../constants';

const styles = StyleSheet.create({
  container: {
    //width: isPAD ? wp(65) : wp(95),
    width: wpt(95),
    borderRadius: wp(10),
    height: isPAD ? hp(5.25) : isIPHONEX ? hp(6) : hp(6.25),
    backgroundColor: colors.PINK.default,
    alignSelf: 'center',
    marginVertical: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: colors.PRIMARY.default,
    fontSize: fontWeight(14),
  },
});

export default styles;
