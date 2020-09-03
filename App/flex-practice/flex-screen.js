import React from 'react';
import { View, SafeAreaView, StatusBar, Text, Image, ImageBackground, ScrollView } from 'react-native';
import FlexScreenStyle from './flex-screen-style';

const MainView = () => {
  return (
    <View>
      <View style={FlexScreenStyle.topView}>
        <View style={FlexScreenStyle.leftTopView}>
          <View style={FlexScreenStyle.cardView}>
            <ImageBackground
              source={require('../../images/EarthFromSpace.png')}
              style={FlexScreenStyle.imageFit}
            />
          </View>
        </View>
        <View style={FlexScreenStyle.rightTopView}>
          <View style={FlexScreenStyle.firstRightTopView}>
            <View style={FlexScreenStyle.cardView}>
              <ImageBackground
                source={require('../../images/OuterSpace1.jpeg')}
                style={FlexScreenStyle.imageFit}
              />
            </View>
          </View>
          <View style={FlexScreenStyle.secondRightTopView}>
            <View style={FlexScreenStyle.cardView}>
              <ImageBackground
                source={require('../../images/OuterSpace2.jpg')}
                style={FlexScreenStyle.imageFit}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={FlexScreenStyle.bottomView}>
        <View style={FlexScreenStyle.upperBottomView}>
          <View style={FlexScreenStyle.firstUpperBottomView}>
            <View style={FlexScreenStyle.cardView}>
              <ImageBackground
                source={require('../../images/space1.jpg')}
                style={FlexScreenStyle.imageFit}
              />
            </View>
          </View>
          <View style={FlexScreenStyle.secondUpperBottomView}>
            <View style={FlexScreenStyle.cardView}>
              <ImageBackground
                source={require('../../images/space2.jpg')}
                style={FlexScreenStyle.imageFit}
              />
            </View>
          </View>
        </View>
        <View style={FlexScreenStyle.lowerBottomView}>
          <View style={FlexScreenStyle.firstLowerBottomView}>
            <View style={FlexScreenStyle.cardView}>
              <ImageBackground
                source={require('../../images/space3.jpg')}
                style={FlexScreenStyle.imageFit}
              />
            </View>
          </View>
          <View style={FlexScreenStyle.secondLowerBottomView}>
            <View style={FlexScreenStyle.cardView}>
              <ImageBackground
                source={require('../../images/space4.jpg')}
                style={FlexScreenStyle.imageFit}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const FlexScreen = () => {
  return (
    <SafeAreaView style={FlexScreenStyle.safeAreaView}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>

        {MainView()}
        {MainView()}
      </ScrollView>


    </SafeAreaView >
  );
}

export default FlexScreen;