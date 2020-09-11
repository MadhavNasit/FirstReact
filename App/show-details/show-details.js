import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const ShowDetails = ({ route, navigation }) => {
  const { name, age, email, gender, date } = route.params;
  const [postText, setPostText] = React.useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text>{'Name :'}</Text>
        <Text>{JSON.stringify(name)}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text>{'Age :'}</Text>
        <Text>{JSON.stringify(age)}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text>{'Email :'}</Text>
        <Text>{JSON.stringify(email)}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text>{'Gender :'}</Text>
        <Text>{JSON.stringify(gender)}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text>{'Date :'}</Text>
        <Text>{JSON.stringify(date)}</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <TextInput
          placeholder="Whats your Name?"
          style={{ height: 40, padding: 10, backgroundColor: 'white', borderWidth: 2 }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Send"
          onPress={() => {
            // Pass params back to home screen
            navigation.navigate('UserDetails', { post: postText });
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default ShowDetails;