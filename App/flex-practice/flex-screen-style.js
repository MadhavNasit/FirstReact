import { StyleSheet } from 'react-native';

const FlexScreenStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  // Top Half of Screen
  topView: {
    flex: 1,
    paddingHorizontal: 5,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  // Left side of Top Half
  leftTopView: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  // Right side of Top Half
  rightTopView: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'purple',
  },
  firstRightTopView: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  secondRightTopView: {
    flex: 1,
    // backgroundColor: '#fd3456',
  },
  // Bottom Half of Screen
  bottomView: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 5,
    // backgroundColor: 'green',
  },
  upperBottomView: {
    flex: 1,
    flexDirection: 'row'
  },
  firstUpperBottomView: {
    flex: 1,
    // backgroundColor: '#da3456',
  },
  secondUpperBottomView: {
    flex: 1,
    // backgroundColor: '#da3500',
  },
  lowerBottomView: {
    flex: 1,
    flexDirection: 'row',
  },
  firstLowerBottomView: {
    flex: 1,
    // backgroundColor: '#bc3456',
  },
  secondLowerBottomView: {
    flex: 1,
    // backgroundColor: '#bc3500',
  },
  cardView: {
    flex: 1,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
  }
});

export default FlexScreenStyle;