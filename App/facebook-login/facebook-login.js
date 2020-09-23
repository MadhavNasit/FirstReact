import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class Login extends Component {
  render() {
    return (
      // <SafeAreaView style={{ flex: 1, backgroundColor: '#0000ff' }}>
      //   <StatusBar barStyle='light-content' />
      //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      // <View style={{
      //   width: 100, // whatever you want
      //   // height: 32, // whatever you want
      //   justifyContent: 'center', // center the button
      // }}>
      <LoginButton
        style={{
          flex: 1, // fill the container
          height: 30, // the default height
          borderColor: '#0000ff',
          borderWidth: 0.2,
          borderRadius: 5,
        }}

        onLoginFinished={
          (error, result) => {
            if (error) {
              console.log("login has error: " + result.error);
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  console.log(data);
                  console.log(data.accessToken.toString())
                }
              )
            }
          }
        }
        onLogoutFinished={() => console.log("logout.")} />
      // </View>
      // </SafeAreaView>
    );
  }
};