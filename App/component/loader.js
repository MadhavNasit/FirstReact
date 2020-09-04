import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

const Loader = () => {

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "center",
    // padding: 10
  }
});

export default Loader;
