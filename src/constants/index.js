import ADIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import IIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import colors from './colors';
import {
  height, hp, isIPHONE, isIPHONEX, isPAD, width, wp, wpt, hpt
} from './dimensions';
import { fontWeight } from './fonts';



const ICON_CONSTANTS = {
  IonIcons: IIcon,
  AntDesign: ADIcon,
  MCIcon: MCIcon,
  EvilIcon: EvilIcon,
  FAIcon: FAIcon,
  SLIcon: SLIcon,
  Entypo: Entypo,
  Fontisto: Fontisto,
  MIcon: MIcon,
  FontAwesome: FontAwesome,
  Feather: Feather,
  Foundation: Foundation,
};
const App_Constants = {
  BASE_URL: ''
};

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: false,
  drawerPosition: 'right',
});


export * from './strings';
export {
  height,
  width,
  colors,
  isIPHONE,
  isIPHONEX,
  isPAD,
  wp,
  hp,
  wpt,
  hpt,
  ICON_CONSTANTS,
  App_Constants,
  fontWeight,
  navigationOptions
};
