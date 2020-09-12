import React from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import { icons } from '../icons';
import { useNavigation } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';



const CustomHeader = (props) => {
  const isDrawerOpen = useIsDrawerOpen();
  const { title } = props;
  const navigation = useNavigation();
  return (
    <View style={Styles.headerView}>
      <View style={Styles.innerView}>
        <View style={Styles.firstView}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}>
            <Image source={isDrawerOpen ? icons.back : icons.menu} style={Styles.imageView}></Image>
          </TouchableOpacity>
        </View>
        <View style={Styles.secondView}>
          <Text style={Styles.headerText} numberOfLines={1}>{title}</Text>
        </View>
        <View style={Styles.thirdView}></View>
      </View>
    </View >
  );
}

const Styles = StyleSheet.create({
  //Header Styles
  headerView: {
    height: 60,
    backgroundColor: 'blue',
  },
  firstView: {
    flex: 1,
  },
  secondView: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  thirdView: {
    flex: 1,
  },
  innerView: {
    flex: 1,
    flexDirection: 'row',
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CustomHeader;