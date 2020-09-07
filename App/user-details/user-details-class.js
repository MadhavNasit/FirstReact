import React, { Component } from 'react';
import { StatusBar, SafeAreaView, View, TextInput, Text, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import UserDetailsStyle from './user-details-style';
import Loader from '../component/loader';
import Swipeout from 'react-native-swipeout';

class UserDetailsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userNameError: "",
      age: "",
      ageError: "",
      email: "",
      emailError: "",
      loaderShow: false,
      user_Data: [],
      arrayLength: 0

    }
    // this.handleClick = this.handleClick.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handleUserAge = this.handleUserAge.bind(this);
    this.HeaderView = this.HeaderView.bind(this);
    this.FooterView = this.FooterView.bind(this);
    this.AddUserDetail = this.AddUserDetail.bind(this);
    this.EmptyListComponentView = this.EmptyListComponentView.bind(this);
    this.renderItem = this.renderItem.bind(this);
  };


  ValidateFields = () => {
    Keyboard.dismiss();
    let isNameError = this.NameValidation();
    let isageError = this.AgeValidation();
    let isEmailError = this.EmailValidatation();

    if (isNameError && isageError && isEmailError) {
      const userObj = {};
      userObj["name"] = this.state.userName;
      userObj["age"] = this.state.age;
      userObj["email"] = this.state.email;
      this.state.user_Data.push(userObj);
      this.setState({
        userName: '',
        age: '',
        email: '',
        arrayLength: this.state.user_Data.length
      });
    }

  }

  NameValidation = () => {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    if (this.state.userName.length == 0) {
      this.setState({ userNameError: 'Please Enter User Name' });
      return false;
    }
    else if (!regName.test(this.state.userName)) {
      this.setState({ userNameError: 'Please Enter Valid User Name' });
      return false;
    }
    else {
      this.setState({ userNameError: '' });
      return true;
    }
  };

  AgeValidation = () => {
    if (this.state.age == '') {
      this.setState({ ageError: 'Please Enter Age' });
      return false;
    }
    else if (isNaN(this.state.age) || this.state.age < 1 || this.state.age > 150) {
      this.setState({ ageError: 'Please Enter Valid Age' });
      return false;
    }
    else {
      this.setState({ ageError: '' });
      return true;
    }
  };

  EmailValidatation = () => {
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email.length == 0) {
      this.setState({ emailError: 'Please Enter Email' });
      return false;
    }
    else if (!regEmail.test(this.state.email)) {
      this.setState({ emailError: 'Please Enter Valid Email' });
      return false;
    }
    else {
      this.setState({ emailError: '' });
      return true;
    }
  }

  AddUserDetail = (title, fieldValue) => {
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

  EmptyListComponentView = () => {
    return (
      <View style={UserDetailsStyle.emptyListView}>
        <Text style={UserDetailsStyle.textEmptyList}>Nothing Here..!!</Text>
      </View>
    );
  }

  HeaderView = () => {
    if (!this.state.user_Data.length) return null;
    return (
      <View style={UserDetailsStyle.flatListHeading}>
        <Text style={UserDetailsStyle.textFormHeading}>{`User Details`}</Text>
      </View>
    );
  }

  FooterView = () => {
    if (!this.state.user_Data.length) return null;
    return (
      <View style={UserDetailsStyle.footerView}>
        <Text style={UserDetailsStyle.textFooter}>{`--  That's All  --`}</Text>
      </View>
    );
  }

  onRefresh = () => {
    this.setState({ loaderShow: true });
    setTimeout(() => {
      this.setState({ loaderShow: false });
    }, 2000);
  };

  renderItem = ({ item, index }) => {
    this.swipeoutBtns = [
      {
        text: 'Cancel',
        type: 'primary'

      },
      {
        text: 'Delete',
        type: 'delete',
        onPress: () => {
          this.setState({ arrayLength: this.state.user_Data.length });
          this.state.user_Data.splice(index, 1);
        }
      }
    ]
    return (
      <Swipeout
        right={this.swipeoutBtns}
        autoClose={true}
        key={index}
      >
        <View style={UserDetailsStyle.cardView}>
          {this.AddUserDetail('Name', item.name)}
          {this.AddUserDetail('Age', item.age)}
          {this.AddUserDetail('Email', item.email)}
        </View>
      </Swipeout>
    );

  };

  handleUserName = (text) => {
    this.setState({ userName: text })
  }

  handleUserAge = (text) => {
    this.setState({ age: text })
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }

  render() {
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
                value={this.state.userName}
                onChangeText={this.handleUserName}
              />
            </View>
            <View style={UserDetailsStyle.errorView}>
              <Text style={UserDetailsStyle.errorText}>{this.state.userNameError}</Text>
            </View>
          </View>
          <View style={UserDetailsStyle.formFieldBox}>
            <View style={UserDetailsStyle.formFieldView}>
              <Text style={UserDetailsStyle.labelForm}>{`Age:`}</Text>
              <TextInput
                style={UserDetailsStyle.textInput}
                placeholder={'Enter Age'}
                value={this.state.age}
                onChangeText={this.handleUserAge}
                keyboardType={'numeric'}
              />
            </View>
            <View style={UserDetailsStyle.errorView}>
              <Text style={UserDetailsStyle.errorText}>{this.state.ageError}</Text>
            </View>
          </View>
          <View style={UserDetailsStyle.formFieldBox}>
            <View style={UserDetailsStyle.formFieldView}>
              <Text style={UserDetailsStyle.labelForm}>{`Email:`}</Text>
              <TextInput
                style={UserDetailsStyle.textInput}
                placeholder={'Enter Email'}
                value={this.state.email}
                onChangeText={this.handleEmail}
              />
            </View>
            <View style={UserDetailsStyle.errorView}>
              <Text style={UserDetailsStyle.errorText}>{this.state.emailError}</Text>
            </View>
          </View>
          <TouchableOpacity style={UserDetailsStyle.button}
            onPress={this.ValidateFields}>
            <Text style={UserDetailsStyle.buttonText}>{'Submit Details'}</Text>
          </TouchableOpacity>
        </View>

        <View style={UserDetailsStyle.flatListView}>
          {this.state.loaderShow ? <Loader /> :
            <FlatList
              data={this.state.user_Data}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              ListHeaderComponent={this.HeaderView}
              ListEmptyComponent={this.EmptyListComponentView}
              ListFooterComponent={this.FooterView}
              extraData={this.state.arrayLength}
              onRefresh={() => this.onRefresh()}
              refreshing={this.state.loaderShow}
            />
          }

        </View>
      </SafeAreaView >
    )
  }
}


export default UserDetailsClass;
