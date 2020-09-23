import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Login from '../facebook-login/facebook-login';

const CustomHeader = (props) => {
  const { title } = props;
  return (
    <View style={Styles.headerView}>
      <View style={Styles.innerView}>
        <View style={Styles.firstView}>
        </View>
        <View style={Styles.secondView}>
          <Text
            numberOfLines={1} style={Styles.headerText} numberOfLines={1}>{title}</Text>
        </View>
        <View style={Styles.thirdView}>
          <Login />
        </View>
      </View>

    </View >
  );
}

const Styles = StyleSheet.create({
  //Header Styles
  headerView: {
    height: 55,
    backgroundColor: '#0000ff',
  },
  firstView: {
    flex: 3,
  },
  secondView: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  thirdView: {
    flex: 3,
    height: 30,
    paddingRight: 4
  },
  innerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    height: 40,
    width: 'auto',
    tintColor: '#fff',
    marginLeft: 12,
    // alignContent: "center",
  },

  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CustomHeader;