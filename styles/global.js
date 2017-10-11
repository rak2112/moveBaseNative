import React, {StyleSheet} from 'react-native';

const orangeDesktop = '#ff5c00';
const orangeLight = '#F17F42';
const darkGray = '#ccc';
const lightGray = '#eaeaea';
const blackDesktop = '#292b2c';
const blackLight = '#191919';
const greenDesktop = '#00d573';
const globalStyles = StyleSheet.create({
  backgroundGray: {
    backgroundColor: darkGray
  },
  backGroundBlack: {
    backgroundColor: blackLight
  },
  orangeText: {
    color: orangeDesktop
  },
  darkGrayText: {
    color: darkGray
  },
  blackLightTxt: {
    color: blackLight
  },
  greenText: {
    color: greenDesktop
  },
  orangeLight: {
    color: orangeLight
  },
  blackDesktopText: {
    color: blackDesktop
  },
  fontSize13: {
    fontSize:13
  },
  fontSize14: {
    fontSize:14
  },
  heading15: {
    fontSize: 15
  },
  heading17: {
    fontSize: 17
  },
  detailHeader: {
    color: '#ff5c00',
    fontSize: 17
  }
});

export default globalStyles;
