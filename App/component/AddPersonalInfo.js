import React from 'react';
import HomeScreenStyle from '../home-screen/home-screen-style';
import { View, Text } from 'react-native';

export default AddPersonalInfo = (props) => {
  const { subHeading, information } = props
  return (
    <View style={HomeScreenStyle.formatePersonalInfo}>
      <Text style={HomeScreenStyle.subHeading}>{subHeading}</Text>
      <Text style={HomeScreenStyle.InformationText}>{`: ` + information}</Text>
    </View>
  )
}
