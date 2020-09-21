import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import CustomHeader from '../component/custom-header';
import axios from 'axios';

const TestAPI = () => {

  const [dataFetch, setDataFetch] = useState();
  const [dataAxios, setDataAiox] = useState();

  useEffect(() => {
    getMoviesFromFetchApi();
    getMovieFromAxiosApi();
  }, []);

  // Fetch APi data using Fetch
  const getMoviesFromFetchApi = () => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        setDataFetch(json.movies);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // fetch API data using Axios
  const getMovieFromAxiosApi = () => {
    axios.get(`https://reactnative.dev/movies.json`)
      .then(res => {
        setDataAiox(res.data.movies);
      })
  }

  function renderItem({ item, index }) {

    return (
      <View key={index} style={{ borderWidth: 1, borderColor: 'gray' }}>
        <Text>
          <Text>{item.title}</Text>
          <Text>{'--'}</Text>
          <Text>{item.releaseYear}</Text>
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <StatusBar barStyle="light-content" />

      <CustomHeader title="API Test" />
      <View style={Styles.mainview}>
        <View style={Styles.flatListView}>
          <Text style={Styles.headingText}>{'Movie Data Fetch'}</Text>
          <FlatList
            data={dataFetch}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={Styles.flatListView}>
          <Text style={Styles.headingText}>{'Movie Data Axios'}</Text>
          <FlatList
            data={dataAxios}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>

    </SafeAreaView >
  );
}

const Styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#0000ff'
  },
  mainview: {
    flex: 1,
    backgroundColor: '#fff'
  },
  flatListView: {
    padding: 20
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default TestAPI;