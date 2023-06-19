import { Dimensions, PixelRatio, Platform } from 'react-native';

// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width;
// Retrieve initial screen's height
let screenHeight = Dimensions.get('window').height;

const MOB_TAB_WIDTH_RATIO = 0.7;
const MOB_TAB_HEIGHT_RATIO = 0.84;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const aspectRatio = height / width;
const isPAD = !(aspectRatio > 1.6);
const isIPHONEX = !!(
  Platform.OS === 'ios' &&
  (height > 800 || width > 800)
);

const isIPHONE = !!(Platform.OS === 'ios');


const widthPercentageToDP = (widthPercent) => {
  // Parse string percentage input and convert it to number.
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const wpForTab = (widthPercent, ratio = null) => {
  let width = isPAD ? Math.floor(widthPercent * (ratio ? ratio : MOB_TAB_WIDTH_RATIO)) : widthPercent;
  return widthPercentageToDP(width);
};
const hpForTab = (heightPercent, ratio = null) => {
  let height = isPAD ? Math.floor(heightPercent * (ratio ? ratio : MOB_TAB_HEIGHT_RATIO)) : heightPercent;
  return heightPercentageToDP(height);
};

const heightPercentageToDP = (heightPercent) => {
  // Parse string percentage input and convert it to number.
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  wpForTab as wpt,
  hpForTab as hpt,
  height,
  width,
  isIPHONEX,
  isIPHONE,
  isPAD
};
