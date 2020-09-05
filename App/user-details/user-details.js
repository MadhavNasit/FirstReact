import React, { useState } from 'react';
import { StatusBar, SafeAreaView, View, TextInput, Text, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import UserDetailsStyle from './user-details-style';
import Loader from '../component/loader';
import Swipeout from 'react-native-swipeout';

const User_Data = [];

const UserDetails = () => {

  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loaderShow, setLoader] = useState(false);
  const [arrayChange, setChangeArray] = useState(0);

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
      User_Data.push(userObj);
      setChangeArray(User_Data.length);
      setUserName('');
      setAge('');
      setEmail('');
    }

  }

  const NameValidation = () => {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    if (userName.length == 0) {
      setUserNameError('Please Enter User Name');
      return false;
    }
    else if (!regName.test(userName)) {
      setUserNameError('Please Enter Valid User Name');
      return false;
    }
    else {
      setUserNameError('');
      return true;
    }
  };

  const AgeValidation = () => {
    if (age == null) {
      setAgeError('Please Enter Age');
      return false;
    }
    else if (isNaN(age) || age < 1 || age > 150) {
      setAgeError('Please Enter Valid Age');
      return false;
    }
    else {
      setAgeError('');
      return true;
    }
  };

  const EmailValidatation = () => {
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

  const HeaderView = () => {
    if (!User_Data.length) return null;
    return (

      <View style={UserDetailsStyle.flatListHeading}>
        <Text style={UserDetailsStyle.textFormHeading}>{`User Details`}</Text>
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

  onRefresh = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  function renderItem({ item, index }) {
    var swipeoutBtns = [
      {
        text: 'Cancel',
        type: 'primary'

      },
      {
        text: 'Delete',
        type: 'delete',
        onPress: () => {
          User_Data.splice(index, 1);
          setChangeArray(User_Data.length);
          console.log(User_Data.length);
        }
      }
    ];
    return (

      <Swipeout
        right={swipeoutBtns}
        autoClose={true}
      >
        <View key={index} style={UserDetailsStyle.cardView}>
          {AddUserDetail('Name', item.name)}
          {AddUserDetail('Age', item.age)}
          {AddUserDetail('Email', item.email)}
        </View>
      </Swipeout>
    );

  };



  return (
    <SafeAreaView style={UserDetailsStyle.safeAreaView}>
      <StatusBar barStyle="dark-content" />
      <View style={UserDetailsStyle.formHeading}>
        <Text style={UserDetailsStyle.textFormHeading}>{`Add User Details`}</Text>
      </View>
      <View style={UserDetailsStyle.formView}>
        <View style={UserDetailsStyle.formFieldBox}>
          <View style={UserDetailsStyle.formFieldView}>
            <Text style={UserDetailsStyle.labelForm}>{`Name:`}</Text>
            <TextInput
              style={UserDetailsStyle.textInput}
              placeholder={'Enter First Name + Last Name'}
              value={userName}
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
              style={UserDetailsStyle.textInput}
              placeholder={'Enter Age'}
              value={age}
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
              style={UserDetailsStyle.textInput}
              placeholder={'Enter Email'}
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <View style={UserDetailsStyle.errorView}>
            <Text style={UserDetailsStyle.errorText}>{emailError}</Text>
          </View>
        </View>
        <TouchableOpacity style={UserDetailsStyle.button}
          onPress={() => ValidateFields()}>
          <Text style={UserDetailsStyle.buttonText}>{'Submit Details'}</Text>
        </TouchableOpacity>
      </View>

      <View style={UserDetailsStyle.flatListView}>
        {loaderShow ? <Loader /> :
          <FlatList
            data={User_Data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={HeaderView()}
            ListEmptyComponent={EmptyListComponentView()}
            ListFooterComponent={FooterView()}
            extraData={arrayChange}
            onRefresh={() => this.onRefresh()}
            refreshing={loaderShow}
          />
        }

      </View>
    </SafeAreaView >
  );
}

export default UserDetails;