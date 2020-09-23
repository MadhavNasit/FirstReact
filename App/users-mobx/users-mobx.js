import React, { useState } from 'react';
import { StatusBar, SafeAreaView, View, TextInput, Text, TouchableOpacity, FlatList, Picker, Keyboard, KeyboardAvoidingView, Button, Platform, StyleSheet } from 'react-native';
import UserDetailsStyle from '../user-details/user-details-style';
import Swipeout from 'react-native-swipeout';
import { validateName } from '../utils/validation';

import { inject, observer } from "mobx-react";
import CustomHeader from '../component/custom-header';

// const User_Data = [];
const Gender_List = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  }
];

const UsersMobx = (props) => {

  const { User_Data, addUser, editUser, deleteUser } = props.store;

  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editKey, setEditKey] = useState('');

  const placeholder = {
    label: 'Select a gender...',
    value: null,
    color: '#9EA0A4',
  };


  inputs = {};

  focusTheField = (id) => {
    this.inputs[id].focus();
  }

  const ValidateFields = () => {
    Keyboard.dismiss();
    let isNameError = NameValidation();
    let isageError = AgeValidation();
    let isEmailError = EmailValidatation();

    if (isNameError && isageError && isEmailError) {
      const userObj = {};
      userObj["name"] = userName;
      userObj["age"] = age;
      userObj["email"] = email;
      if (isEdit == false) {
        addUser(userObj);
      }
      else {
        editUser(editKey, userObj);
        setIsEdit(false);
      }

      setUserName('');
      setAge('');
      setEmail('');
    }

  }

  const NameValidation = () => {
    let nameData = validateName(userName);
    setUserNameError(nameData);
    if (nameData == "") {
      return true;
    }
    else {
      return false;
    }
  }

  const AgeValidation = () => {
    var regAge = /^[0-9]+$/;

    if (age == '') {
      setAgeError('Please Enter Age');
      return false;
    }
    else if (isNaN(age) || (age < 1 || age > 150)) {
      setAgeError('Please Enter Valid Age')
      return false;
    }
    else if ((age >= 1 && age <= 150) && (!regAge.test(age))) {
      setAgeError('Please Enter Valid Age')
      return false;
    }
    else {
      setAgeError('');
      return true;
    }
  }

  const EmailValidatation = () => {
    var regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.([a-zA-Z]{2,5}|[a-zA-z]{2,5}\.[a-zA-Z]{2,5})$/;
    if (email.length == 0) {
      setEmailError('Please Enter Email');
      return false;
    }
    else if (!regEmail.test(email)) {
      setEmailError('Please Enter Valid Email');
      return false;
    }
    else {
      setEmailError('');
      return true;
    }
  }

  const AddUserDetail = (title, fieldValue) => {
    return (

      <View style={UserDetailsStyle.userDetailsView}>
        <View style={UserDetailsStyle.subHeadingView}>
          <Text style={UserDetailsStyle.textSubHeading}>{title}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>{`:`}</Text>
        </View>
        <View style={UserDetailsStyle.detailView}>
          <Text style={UserDetailsStyle.textData}>{fieldValue}</Text>
        </View>
      </View>
    );
  }

  const EmptyListComponentView = () => {
    return (
      <View style={UserDetailsStyle.emptyListView}>
        <Text style={UserDetailsStyle.textEmptyList}>Nothing Here..!!</Text>
      </View>
    );
  }

  const FooterView = () => {
    if (!User_Data.length) return null;
    return (
      <View style={UserDetailsStyle.footerView}>
        <Text style={UserDetailsStyle.textFooter}>{`--  That's All  --`}</Text>
      </View>
    );
  }

  const editUserData = (key) => {
    let editObject = [];
    editObject = User_Data.filter((item) =>
      item.key == key
    );
    setUserName(editObject[0].userObj.name);
    setAge(editObject[0].userObj.age);
    setEmail(editObject[0].userObj.email);
    setIsEdit(true);
    setEditKey(key);
  }


  function renderItem({ item, index }) {
    var swipeoutBtns = [
      {
        text: 'Edit',
        type: 'primary',
        onPress: () => {
          editUserData(item.key);
        }
      },
      {
        text: 'Delete',
        type: 'delete',
        onPress: () => {
          deleteUser(item.key);
        }
      }
    ];
    return (

      <Swipeout
        right={swipeoutBtns}
        autoClose={true}
      >
        <View key={item.key} style={UserDetailsStyle.cardView}>
          {AddUserDetail('Name', item.userObj.name)}
          {AddUserDetail('Age', item.userObj.age)}
          {AddUserDetail('Email', item.userObj.email)}
        </View>
      </Swipeout>
    );

  }

  const AddUserForm = () => {
    return (
      <View
        style={UserDetailsStyle.keyboardAvoidingView, { backgroundColor: '#fff' }}
      >
        {/* <View style={UserDetailsStyle.formHeading}>
          <Text style={UserDetailsStyle.textFormHeading}>{`Add User Details`}</Text>
        </View> */}
        <View style={UserDetailsStyle.formView}>
          <View style={UserDetailsStyle.formFieldBox}>
            <View style={UserDetailsStyle.formFieldView}>
              <Text style={UserDetailsStyle.labelForm}>{`Name:`}</Text>
              <TextInput
                style={[UserDetailsStyle.textInput, { borderColor: (userNameError == '') ? 'grey' : 'red' }]}
                placeholder={'Full Name'}
                value={userName}
                maxLength={40}
                onChangeText={value => setUserName(value)}
                returnKeyType={"next"}
                onSubmitEditing={() => { this.focusTheField('ageField'); }}
              />
            </View>
            <View style={UserDetailsStyle.errorView}>
              <Text style={UserDetailsStyle.errorText}>{userNameError}</Text>
            </View>
          </View>
          <View style={UserDetailsStyle.formFieldBox}>
            <View style={UserDetailsStyle.formFieldView}>
              <Text style={UserDetailsStyle.labelForm}>{`Age:`}</Text>
              <TextInput
                style={[UserDetailsStyle.textInput, { borderColor: (ageError == '') ? 'grey' : 'red' }]}
                placeholder={'Enter Age'}
                value={age}
                maxLength={3}
                onChangeText={value => setAge(value)}
                keyboardType={'numeric'}
                ref={(input) => { secondTextInput = input; }}
                blurOnSubmit={false}
                returnKeyType={"next"}
                ref={input => { this.inputs['ageField'] = input }}
                onSubmitEditing={() => { this.focusTheField('emailField'); }}
              />
            </View>
            <View style={UserDetailsStyle.errorView}>
              <Text style={UserDetailsStyle.errorText}>{ageError}</Text>
            </View>
          </View>

          <View style={UserDetailsStyle.formFieldBox}>
            <View style={UserDetailsStyle.formFieldView}>
              <Text style={UserDetailsStyle.labelForm}>{`Email:`}</Text>
              <TextInput
                style={[UserDetailsStyle.textInput, { borderColor: (emailError == '') ? 'grey' : 'red' }]}
                placeholder={'Enter Email'}
                value={email}
                maxLength={50}
                // blurOnSubmit={false}
                onChangeText={value => setEmail(value)}
                ref={input => { this.inputs['emailField'] = input }}
              // onSubmitEditing={() => { this.focusTheField('genderField'); }}
              />
            </View>
            <View style={UserDetailsStyle.errorView}>
              <Text style={UserDetailsStyle.errorText}>{emailError}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            <TouchableOpacity style={UserDetailsStyle.button}
              onPress={() => ValidateFields()}>
              <Text style={UserDetailsStyle.buttonText}>{'Submit Details'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );
  }


  return (
    <SafeAreaView style={UserDetailsStyle.safeAreaView, { backgroundColor: 'blue' }}>
      <StatusBar barStyle="light-content" backgroundColor="#0000ff" />
      <CustomHeader title="User Details" />

      {AddUserForm()}

      <View style={UserDetailsStyle.flatListView, { backgroundColor: '#fff' }}>
        <FlatList
          data={User_Data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={EmptyListComponentView()}
          ListFooterComponent={FooterView()}
          extraData={User_Data}
        />
      </View>
    </SafeAreaView >
  );
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    marginBottom: 5,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    marginBottom: 5,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});


export default inject("store")(observer(UsersMobx));