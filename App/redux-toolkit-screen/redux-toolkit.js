import React, { useEffect, useState } from 'react';
import { StatusBar, SafeAreaView, View, TextInput, Text, TouchableOpacity, FlatList, Picker, Keyboard, KeyboardAvoidingView, Button, Platform, StyleSheet } from 'react-native';
import UserDetailsStyle from '../user-details/user-details-style';
import Swipeout from 'react-native-swipeout';
import { validateName } from '../utils/validation';

import CustomHeader from '../component/custom-header';

import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, editUser } from '../redux-toolkit/usersSlice';

import { Formik } from "formik";
import { compose } from "recompose";
import {
  handleTextInput,
  withNextInputAutoFocusInput,
  withNextInputAutoFocusForm,
} from "react-native-formik";
import * as Yup from "yup";



const ReduxToolkit = () => {

  const [isEdit, setIsEdit] = useState(false);
  const [editKey, setEditKey] = useState('');
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const MyInput = compose(
    handleTextInput,
    withNextInputAutoFocusInput
  )(TextInput);

  const Form = withNextInputAutoFocusForm(View);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().max(20),
    age: Yup.number()
      .required()
      .typeError('age must be a number')
      .min(1)
      .max(150)
      .integer('Not a Valid Number'),
    email: Yup.string()
      .required()
      .email("well that's not an email"),
  });

  const { User_Data } = useSelector(
    (state) => state.users
  )

  const dispatch = useDispatch()
  const addUserData = (name, age, email) => {
    dispatch(addUser({ name, age, email }))
  }
  const editUserInfo = (editKey, name, age, email) => {
    dispatch(editUser({ key: editKey, userObj: { name, age, email } }))
  }
  const deleteUserData = (key) => {
    dispatch(deleteUser(key))
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
        <Text style={UserDetailsStyle.textEmptyList}>Add User Data..!</Text>
      </View>
    );
  }

  const editUserData = (id) => {
    let editObject = User_Data.find(x => x.key == id);
    setUserName(editObject.userObj.name);
    setAge(editObject.userObj.age.toString());
    setEmail(editObject.userObj.email);
    setIsEdit(true);
    setEditKey(id);
  }


  function renderItem({ item }) {
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
          deleteUserData(item.key);
        }
      }
    ];
    return (
      <Swipeout
        right={swipeoutBtns}
        autoClose={true}
        style={UserDetailsStyle.cardView}
      >
        <View key={item.key} style={{
          marginVertical: 10,
        }} >
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
        style={UserDetailsStyle.keyBoardAvoidingView}
      >
        <View style={UserDetailsStyle.formView}>
          <Formik
            initialValues={{ name: '', age: '', email: '' }}
            onSubmit={(values, { resetForm }) => {
              if (!isEdit) {
                addUserData(values.name, values.age, values.email);
              }
              else {
                editUserInfo(editKey, values.name, values.age, values.email);
                setIsEdit(false);
              }
              resetForm();
            }}
            validateOnChange={true}
            validateOnBlur={false}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, errors, values, isValid, setFieldValue, touched }) => {
              useEffect(() => {
                if (isEdit) {
                  setFieldValue('name', userName)
                  setFieldValue('age', age, false)
                  setFieldValue('email', email)
                }
              }, [isEdit])
              return (
                <Form>
                  <View style={UserDetailsStyle.formFieldBox}>
                    <View style={UserDetailsStyle.formFieldView}>
                      <Text style={UserDetailsStyle.labelForm}>{`Name:`}</Text>
                      <MyInput
                        name='name'
                        values={values.name}
                        style={[UserDetailsStyle.textInput, { borderColor: 'grey' }]}
                        placeholder={'Full Name'}
                        maxLength={40}
                        touched={touched.name}
                      />
                    </View>
                    {errors.name && touched.name &&
                      <View style={UserDetailsStyle.errorView}>
                        <Text style={UserDetailsStyle.errorText}>{errors.name}</Text>
                      </View>
                    }
                  </View>

                  <View style={UserDetailsStyle.formFieldBox}>
                    <View style={UserDetailsStyle.formFieldView}>
                      <Text style={UserDetailsStyle.labelForm}>{`Age:`}</Text>
                      <MyInput
                        name='age'
                        style={[UserDetailsStyle.textInput, { borderColor: 'grey' }]}
                        placeholder={'Enter Age'}
                        maxLength={3}
                        keyboardType={'numeric'}
                        touched={touched.name}
                      />
                    </View>
                    {touched.age && errors.age &&
                      <View style={UserDetailsStyle.errorView}>
                        <Text style={UserDetailsStyle.errorText}>{errors.age}</Text>
                      </View>
                    }
                  </View>

                  <View style={UserDetailsStyle.formFieldBox}>
                    <View style={UserDetailsStyle.formFieldView}>
                      <Text style={UserDetailsStyle.labelForm}>{`Email:`}</Text>
                      <MyInput
                        name='email'
                        style={[UserDetailsStyle.textInput, { borderColor: 'grey' }]}
                        placeholder={'Enter Email'}
                        maxLength={50}
                        touched={touched.name}
                        keyboardType='email-address'
                      />
                    </View>
                    {touched.email && errors.email &&
                      <View style={UserDetailsStyle.errorView}>
                        <Text style={UserDetailsStyle.errorText}>{errors.email}</Text>
                      </View>
                    }
                  </View>

                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <TouchableOpacity style={UserDetailsStyle.button}
                      disabled={!isValid}
                      onPress={() => handleSubmit()}>
                      <Text style={UserDetailsStyle.buttonText}>{'Submit Details'}</Text>
                    </TouchableOpacity>
                  </View>
                </Form>
              )
            }}
          </Formik>
        </View>
      </View >
    );
  }

  return (
    <SafeAreaView style={UserDetailsStyle.safeAreaView}>
      <StatusBar barStyle="light-content" backgroundColor="#0000ff" />
      <CustomHeader title="User Details" />
      <View style={UserDetailsStyle.container}>

        {AddUserForm()}

        <FlatList
          data={User_Data}
          renderItem={renderItem}
          contentContainerStyle={{ flexGrow: 1, marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={EmptyListComponentView()}
        />
      </View>
    </SafeAreaView >
  );
}


export default ReduxToolkit;