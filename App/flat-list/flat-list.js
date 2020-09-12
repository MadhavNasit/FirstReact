import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, Image, ImageBackground, ScrollView, TouchableOpacity, Alert, StatusBar } from 'react-native';
import FlatListStyle from './flat-list-style';
import Loader from '../component/loader';
import CustomHeader from '../component/custom-header';

// List of title and Image
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

// Main Screen of Flat List
const FlatListScreen = () => {

  const [loaderShow, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);


  // Return Header View
  const HeaderView = () => {
    return (
      <View style={FlatListStyle.headerView}>
        <ImageBackground
          style={FlatListStyle.imageFit}
          source={require('../../images/spaceBanner.jpg')}
        >
          <Text style={FlatListStyle.textHeader}>Space Images</Text>
        </ImageBackground>

      </View>
    );
  }

  // Return "Thats All" at Bottom where FlatList Ends
  const FooterView = () => {
    if (!FLATLIST_DATA.length) return null;
    return (
      <View style={FlatListStyle.footerView}>
        <Text style={FlatListStyle.textFooter}>{`--  That's All  --`}</Text>
      </View>
    );
  }

  // Return View When no item in Arrayz
  const EmptyListComponentView = () => {
    return (
      <View style={FlatListStyle.emptyListView}>
        <Text style={FlatListStyle.textEmptyList}>Nothing Here..!!</Text>
      </View>
    );
  }

  // Gives Alert window
  const AlertView = (item) => {
    Alert.alert(
      "You Pressed",
      item.title,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }

  // View for Flat List
  const renderItem = ({ item, index }) => (

    <TouchableOpacity
      style={FlatListStyle.cardView}
      onPress={AlertView.bind(this, item)}>
      <Image
        style={FlatListStyle.imageFit}
        source={item.image}
      >
      </Image>
      <Text style={FlatListStyle.bannerText}>{item.title}</Text>
    </TouchableOpacity>
  );

  onRefresh = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  // Return Loader for 3 sec and then Return flat List
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0000ff' }}>
      <StatusBar barStyle="light-content" />
      {loaderShow ? <Loader /> :
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <CustomHeader title="Flat List" />
          <FlatList
            data={FLATLIST_DATA}
            renderItem={renderItem}
            keyExtractor={item => item.title}
            // ListHeaderComponent={HeaderView()}
            ListFooterComponent={FooterView()}
            ListEmptyComponent={EmptyListComponentView()}
            onRefresh={() => this.onRefresh()}
            refreshing={loaderShow}
          />
        </View>
      }
    </SafeAreaView >
  );
}

export default FlatListScreen;