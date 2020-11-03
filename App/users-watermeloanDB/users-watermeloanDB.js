import React, { useState } from 'react';
import { StatusBar, SafeAreaView, View, TextInput, Text, TouchableOpacity, FlatList, Picker, Keyboard, KeyboardAvoidingView, Button, Platform, StyleSheet } from 'react-native';
import UserDetailsStyle from '../user-details/user-details-style';
import Swipeout from 'react-native-swipeout';
import { validateName } from '../utils/validation';

import CustomHeader from '../component/custom-header';

import { addUser, observeUsers, deleteUser, editUser, editUserInfo } from '../WatermeloanDb/helper';
import withObservables from '@nozbe/with-observables';

const UsersWatermeloanDb = ({ users }) => {

  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editKey, setEditKey] = useState('');

  const ValidateFields = async () => {
    Keyboard.dismiss();
    let isNameError = NameValidation();
    let isageError = AgeValidation();
    let isEmailError = EmailValidatation();

    if (isNameError && isageError && isEmailError) {
      if (isEdit == false) {
        await addUser({ name: userName, age, email });
      }
      else {
        await editUserInfo(editKey, { name: userName, age, email });
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
    if (!users.length) return null;
    return (
      <View style={UserDetailsStyle.footerView}>
        <Text style={UserDetailsStyle.textFooter}>{`--  That's All  --`}</Text>
      </View>
    );
  }

  const editUserData = async (id) => {
    let editObject = await editUser(id);
    setUserName(editObject.name);
    setAge(editObject.age.toString());
    setEmail(editObject.email);
    setIsEdit(true);
    setEditKey(id);
  }


  function renderItem({ item }) {
    var swipeoutBtns = [
      {
        text: 'Edit',
        type: 'primary',
        onPress: () => {
          editUserData(item.id);
        }
      },
      {
        text: 'Delete',
        type: 'delete',
        onPress: () => {
          deleteUser(item.id);
        }
      }
    ];
    return (
      <Swipeout
        right={swipeoutBtns}
        autoClose={true}
      >
        <View key={item.key} style={UserDetailsStyle.cardView}>
          {AddUserDetail('Name', item.name)}
          {AddUserDetail('Age', item.age)}
          {AddUserDetail('Email', item.email)}
        </View>
      </Swipeout>
    );

  }

  const AddUserForm = () => {
    return (
      <View
        style={UserDetailsStyle.keyboardAvoidingView, { backgroundColor: '#fff' }}
      >
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
                onChangeText={value => setEmail(value)}
                keyboardType='email-address'
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
          data={users}
          style={{ flexGrow: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={EmptyListComponentView()}
          ListFooterComponent={FooterView()}
        />
      </View>
    </SafeAreaView >
  );
}

const enhanceWithUsers = withObservables([], () => ({
  users: observeUsers(),
}));

export default enhanceWithUsers(UsersWatermeloanDb);