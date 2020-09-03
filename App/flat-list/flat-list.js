import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image, ImageBackground, ScrollView } from 'react-native';
import FlatListStyle from './flat-list-style';

const FLATLIST_DATA = [
  { title: 'Space Image1', image: require('../../images/space1.jpg') },
  { title: 'Space Image2', image: require('../../images/space2.jpg') },
  { title: 'Space Image3', image: require('../../images/space3.jpg') },
  { title: 'Space Image4', image: require('../../images/space4.jpg') },
  { title: 'Space Image5', image: require('../../images/space1.jpg') },
  { title: 'Space Image6', image: require('../../images/space2.jpg') },
  { title: 'Space Image7', image: require('../../images/space3.jpg') },
  { title: 'Space Image8', image: require('../../images/space4.jpg') },
]

const FlatListScreen = () => {
  const renderItem = ({ item, index }) => (
    <View style={FlatListStyle.cardView}>
      <ImageBackground
        style={FlatListStyle.imageFit}
        source={item.image}
      >
        <Text style={FlatListStyle.bannerText}>{item.title}</Text>

      </ImageBackground>

    </View>

    // <ImageView key={index} spaceImage={item.image} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ margin: 10 }}>

        <FlatList
          data={FLATLIST_DATA}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </View>

    </SafeAreaView >
  );
}

export default FlatListScreen;