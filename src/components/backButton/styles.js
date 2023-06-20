import { StyleSheet } from 'react-native';
import { colors, wp, hp, isIPHONEX, isPAD, wpt } from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(2),
    backgroundColor: colors.PRIMARY.default,
    borderRadius: 10,
    height: hp(3.5),
    width: hp(3.5),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default styles;
