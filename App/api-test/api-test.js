import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import CustomHeader from '../component/custom-header';
import axios from 'axios';

const TestAPI = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState();

  useEffect(() => {
    getDataFromAPI(page);
  }, []);

  // fetch API data using Axios
  const getDataFromAPI = (page) => {
    setLoading(true);
    axios.get(`https://reqres.in/api/users?page=${page}`)
      .then(res => {
        setPageSize(res.data.total_pages);
        let listData = data;
        let newData = listData.concat(res.data.data);
        setData(newData);
        setPage(page + 1);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.warn('Something Went Wrong');
      });
  }

  function renderItem({ item, index }) {

    return (
      <View key={index} style={Styles.flatListItem}>
        <View style={Styles.fiedlView}>
          <Text style={Styles.subHeading}>{`Id`}</Text>
          <Text style={Styles.saperator}>{`:`}</Text>
          <Text style={Styles.textField}>{item.id}</Text>
        </View>
        <View style={Styles.fiedlView}>
          <Text style={Styles.subHeading}>{`First Name`}</Text>
          <Text style={Styles.saperator}>{`:`}</Text>
          <Text style={Styles.textField}>{item.first_name}</Text>
        </View>
        <View style={Styles.fiedlView}>
          <Text style={Styles.subHeading}>{`Last Name`}</Text>
          <Text style={Styles.saperator}>{`:`}</Text>
          <Text style={Styles.textField}>{item.last_name}</Text>
        </View>
        <View style={Styles.fiedlView}>
          <Text style={Styles.subHeading}>{`Email`}</Text>
          <Text style={Styles.saperator}>{`:`}</Text>
          <Text style={Styles.textField}>{item.email}</Text>
        </View>
      </View>
    );
  }

  // Load more data while Scroll
  handleLoadMore = () => {
    if (page <= pageSize) {
      if (!loading) {
        getDataFromAPI(page);
      }
    }
  };

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <StatusBar barStyle="light-content" backgroundColor="#0000ff" />

      <CustomHeader title="API Test" />
      <View style={Styles.mainview}>

        <View style={Styles.flatListView}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => handleLoadMore()}
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
    backgroundColor: '#e3e3e3'
  },
  // flatListView: {
  //   paddingVertical: 10
  // },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  flatListItem: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginHorizontal: 20,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  fiedlView: {
    flexDirection: 'row'
  },
  subHeading: {
    flex: 5,
    fontWeight: 'bold'
  },
  saperator: {
    flex: 1
  },
  textField: {
    flex: 12
  }
});

export default TestAPI;