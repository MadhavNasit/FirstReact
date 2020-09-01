import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import ContactMeStyle from './contact-me-style';
import HomeScreen from '../home-screen/home-screen';
import HomeScreenStyle from '../home-screen/home-screen-style';
import RNPickerSelect from 'react-native-picker-select';
// import { Picker } from '@react-native-community/picker';


const createTextInput = (placeholder) => {
  return (
    <TextInput
      style={ContactMeStyle.textInput}
      placeholder={placeholder}
    />
  );
}

const Header = () => {
  return (
    <View>

      <View style={HomeScreenStyle.headerView}>
        <Text style={HomeScreenStyle.headerText}>{`Contact Me`}</Text>
      </View>
      <View style={HomeScreenStyle.profilePhoto}>
        <Image
          source={require('../../images/contactme.png')}
          style={HomeScreenStyle.profileLogo}
        />
      </View>
    </View>
  );
}

const ContactMe = () => {
  state = {
    language: 'java',
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>

        <StatusBar barStyle="dark-content" />
        {Header()}

        <View style={ContactMeStyle.formOuterView}>
          {createTextInput('Name')}
          {createTextInput('Contact Number')}
          {createTextInput('Email')}
          {createTextInput('Date of Birth')}
          {createTextInput('Gender')}

        </View>

        {/* <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker> */}
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Football', value: 'football' },
            { label: 'Baseball', value: 'baseball' },
            { label: 'Hockey', value: 'hockey' },
          ]}
        />
      </ScrollView>
      <TouchableOpacity style={HomeScreenStyle.button}>
        <Text style={HomeScreenStyle.buttonText}>{'Submit Details'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ContactMe;