import React from 'react';
import { View, SafeAreaView, StatusBar, Text, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import FlexScreenStyle from './flex-screen-style';


// Return image with Styles
const ImageView = (spaceImagePath) => {
  return (
    <View style={FlexScreenStyle.cardView}>
      <ImageBackground
        source={spaceImagePath}
        style={FlexScreenStyle.imageFit}
      />
    </View>
  );
}

// Gives Space Images View
const SpaceImagesView = () => {
  return (
    <View>
      {/* Upper View */}
      <View style={FlexScreenStyle.topView}>

        {/* Upper Left View */}
        <View style={FlexScreenStyle.leftTopView}>
          {ImageView(require('../../images/EarthFromSpace.png'))}
        </View>
        {/* Upper Right View */}
        <View style={FlexScreenStyle.rightTopView}>
          <View style={FlexScreenStyle.firstRightTopView}>
            {ImageView(require('../../images/OuterSpace1.jpeg'))}
          </View>
          <View style={FlexScreenStyle.secondRightTopView}>
            {ImageView(require('../../images/OuterSpace2.jpg'))}
          </View>
        </View>
      </View>

      {/* Lower View */}
      <View style={FlexScreenStyle.bottomView}>
        <View style={FlexScreenStyle.upperBottomView}>
          <View style={FlexScreenStyle.firstUpperBottomView}>
            {ImageView(require('../../images/space1.jpg'))}
          </View>
          <View style={FlexScreenStyle.secondUpperBottomView}>
            {ImageView(require('../../images/space2.jpg'))}
          </View>
        </View>
        <View style={FlexScreenStyle.lowerBottomView}>
          <View style={FlexScreenStyle.firstLowerBottomView}>
            {ImageView(require('../../images/space3.jpg'))}
          </View>
          <View style={FlexScreenStyle.secondLowerBottomView}>
            {ImageView(require('../../images/space4.jpg'))}
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
      <ScrollView
        style={{ margin: 10 }}
      >
        {SpaceImagesView()}
        {SpaceImagesView()}
      </ScrollView>
    </SafeAreaView >
  );
}

export default FlexScreen;