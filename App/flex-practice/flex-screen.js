import React from 'react';
import { View, SafeAreaView, StatusBar, Text } from 'react-native';
import FlexScreenStyle from './flex-screen-style';

const FlexScreen = () => {
  return (
    <SafeAreaView style={FlexScreenStyle.safeAreaView}>
      <StatusBar barStyle="dark-content" />

      <View style={FlexScreenStyle.topView}>
        <View style={FlexScreenStyle.leftTopView}>
          <View style={FlexScreenStyle.cardView}></View>
        </View>
        <View style={FlexScreenStyle.rightTopView}>
          <View style={FlexScreenStyle.firstRightTopView}>
            <View style={FlexScreenStyle.cardView}></View>
          </View>
          <View style={FlexScreenStyle.secondRightTopView}>
            <View style={FlexScreenStyle.cardView}></View>
          </View>
        </View>
      </View>
      <View style={FlexScreenStyle.bottomView}>
        <View style={FlexScreenStyle.upperBottomView}>
          <View style={FlexScreenStyle.firstUpperBottomView}>
            <View style={FlexScreenStyle.cardView}></View>
          </View>
          <View style={FlexScreenStyle.secondUpperBottomView}><View style={FlexScreenStyle.cardView}></View></View>
        </View>
        <View style={FlexScreenStyle.lowerBottomView}>
          <View style={FlexScreenStyle.firstLowerBottomView}>
            <View style={FlexScreenStyle.cardView}></View>
          </View>
          <View style={FlexScreenStyle.secondLowerBottomView}>
            <View style={FlexScreenStyle.cardView}></View>
          </View>
        </View>
      </View>


    </SafeAreaView>
  );
}

export default FlexScreen;