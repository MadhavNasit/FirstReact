import React, { useState } from 'react';
import { StatusBar, SafeAreaView, View, TextInput, Text, TouchableOpacity, FlatList, Picker, Keyboard, KeyboardAvoidingView, Button, Platform, StyleSheet } from 'react-native';
import UserDetailsStyle from './user-details-style';
import Loader from '../component/loader';
import Swipeout from 'react-native-swipeout';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'

const User_Data = [];
const Gender_List = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

const UserDetails = () => {

  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loaderShow, setLoader] = useState(false);
  const [arrayChange, setChangeArray] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [arrayIndex, setIndex] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState("2020-09-08");

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
      if (isEdit == false) {
        userObj["name"] = userName;
        userObj["age"] = age;
        userObj["email"] = email;
        userObj["gender"] = gender;
        userObj['date'] = date;
        User_Data.push(userObj);
      }
      else {
        User_Data[arrayIndex].name = userName;
        User_Data[arrayIndex].age = age;
        User_Data[arrayIndex].email = email;
        User_Data[arrayIndex].gender = gender;
        User_Data[arrayIndex].date = date;
        setIsEdit(false);
      }
      setChangeArray(User_Data.length);
      setUserName('');
      setAge('');
      setEmail('');
      setGender('');
      setDate('');
    }

  }

  const NameValidation = () => {
    var regName = /^[a-zA-Z ]{2,40}$/;

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
    var regAge = /^[0-9]+$/;
    console.log((age >= 1 && age <= 150));
    console.log(regAge.test(parseInt(age)));
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
  };

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
        text: 'Edit',
        type: 'primary',
        onPress: () => {
          setUserName(User_Data[index].name);
          setAge(User_Data[index].age);
          setEmail(User_Data[index].email);
          setGender(User_Data[index].gender);
          setDate(User_Data[index].date);
          setIsEdit(true);
          setIndex(index);
        }
      },
      {
        text: 'Delete',
        type: 'delete',
        onPress: () => {
          User_Data.splice(index, 1);
          setChangeArray(User_Data.length);
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
          {AddUserDetail('Gender', item.gender)}
          {AddUserDetail('Date', item.date)}
        </View>
      </Swipeout>
    );

  };

  const AddUserForm = () => {
    return (
      <View
        style={UserDetailsStyle.keyboardAvoidingView}
      >
        <View style={UserDetailsStyle.formHeading}>
          <Text style={UserDetailsStyle.textFormHeading}>{`Add User Details`}</Text>
        </View>
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
                onSubmitEditing={() => ValidateFields()}
              />
            </View>
            <View style={UserDetailsStyle.errorView}>
              <Text style={UserDetailsStyle.errorText}>{emailError}</Text>
            </View>
          </View>

          <View style={UserDetailsStyle.formFieldBox}>
            <View style={UserDetailsStyle.formFieldView}>
              <Text style={UserDetailsStyle.labelForm}>{`Gender:`}</Text>
              <View style={{ flex: 9, marginBottom: 5 }}>
                <RNPickerSelect
                  style={pickerSelectStyles}
                  value={gender}
                  onValueChange={(value) => { setGender(value) }}
                  items={Gender_List}
                  placeholder={placeholder}
                />
              </View>
            </View>
          </View>


          <View style={UserDetailsStyle.formFieldBox, { marginTop: 8, marginBottom: 20 }}>
            <View style={UserDetailsStyle.formFieldView}>
              <Text style={UserDetailsStyle.labelForm}>{`Date:`}</Text>
              <View style={{ flex: 9 }}>
                <DatePicker
                  style={{ width: '100%' }}
                  date={date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      right: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      paddingHorizontal: 10,
                      borderRadius: 4,
                      borderColor: 'gray',
                      alignItems: 'flex-start',
                    },
                    datePicker: {
                      backgroundColor: '#d9d9d9'
                    },
                    btnTextConfirm: {
                      color: 'blue',
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => { setDate(date) }}
                />
              </View>
              {/* <Button onPress={showDatepicker}
                title={show ? "Hide date picker!" : "Show date picker!"} /> */}
            </View>
          </View>





          <TouchableOpacity style={UserDetailsStyle.button}
            onPress={() => ValidateFields()}>
            <Text style={UserDetailsStyle.buttonText}>{'Submit Details'}</Text>
          </TouchableOpacity>
        </View>
      </View >
    );
  }


  return (
    <SafeAreaView style={UserDetailsStyle.safeAreaView}>
      <StatusBar barStyle="dark-content" />


      {AddUserForm()}

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
export default UserDetails;