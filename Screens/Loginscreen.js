// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Welcomescreen from './Screens/Welcomescreen.js'

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image,
  Button,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/AntDesign'
import * as DataCoreApi from '../apis/DataCoreApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Iconfa from 'react-native-vector-icons/FontAwesome'
export default function App({ navigation }) {

  const Constants = GlobalVariables.useValues();

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const onpress = async (values) => {
    try {

      const loginResponse = await DataCoreApi.authLoginPOST(Constants, {
        email: values.email,
        password: values.password,
      });
      console.log(loginResponse)
      const loginResponseJson = loginResponse;
      const authToken = loginResponseJson.authToken;
      const authRefreshToken = loginResponseJson.authRefreshToken;
      const userId = loginResponseJson.userId;
      const message = loginResponseJson.message;

      setGlobalVariableValue({
        key: 'ERROR_MESSAGE',
        value: message,
      });

      if (!authToken) {
        return;
      }

      setGlobalVariableValue({
        key: 'AUTHORIZATION_HEADER',
        value: 'Bearer ' + authToken,
      });
      setGlobalVariableValue({
        key: 'AUTHORIZATION_REFRESH',
        value: authRefreshToken,
      });
      setGlobalVariableValue({
        key: 'USER_ID',
        value: userId,
      });

      console.log('Hellow');
      const userResponse = await DataCoreApi.usersGetGET(Constants, {
        user_id: userId,
      });
      console.log('userres', userResponse)
      const userResponseJson = userResponse;
      const userFirstName = userResponseJson.firstName;
      const userMiddleName = userResponseJson.middleName;
      const userLastName = userResponseJson.lastName;
      const userEmail = userResponseJson.email;
      const userMobileNo = userResponseJson.mobileNo;
      // const userProfileImage = userResponseJson.profile_image?.path;
      const userProfileImage = userResponseJson.profileImage;

      setGlobalVariableValue({
        key: 'USER_FULL_NAME',
        value: userFirstName + " " + userLastName,
      });
      setGlobalVariableValue({
        key: 'USER_FIRST_NAME',
        value: userFirstName,
      });
      setGlobalVariableValue({
        key: 'USER_LAST_NAME',
        value: userLastName,
      });
      setGlobalVariableValue({
        key: 'USER_MIDDLE_NAME',
        value: userMiddleName,
      });
      setGlobalVariableValue({
        key: 'USER_EMAIL',
        value: userEmail,
      });
      setGlobalVariableValue({
        key: 'USER_MOBILE_NO',
        value: userMobileNo,
      });
      setGlobalVariableValue({
        key: 'USER_PROFILE_IMAGE',
        value: userProfileImage,
      });

      navigation.replace('Home');
    } catch (err) {
      console.error(err);

    }
  }
  const back = () => {
    navigation.push('Welcome')
  }
  const forgot = () => {
    navigation.push('Resetpassword')
  }
  const home = () => {
    navigation.push('Home')
  }

  const loginvalidation = yup.object().shape({
    email: yup.string().required('Email Address ir required'),
    password: yup.string().min(8, ({ min }) => `Password must be at least ${min} charcahet`).required('Password is Required'),

  });

  return (
    // <Welcomescreen/>

    // * container start * //
    <Formik
      initialValues={{ email: '', password: '' }}
      validateOnChange={true}
      onSubmit={onpress}
      validationSchema={loginvalidation}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
        <View>

          {/* header */}
          <View style={styles.header}>

            <TouchableOpacity onPress={back}><Icon name="left" style={styles.headericon1} /></TouchableOpacity>

            <Text style={styles.headertitle} >Login</Text>



          </View>
          {/* header end */}



          {/* logo */}
          <Image source={require('../images/LogoOriginal.png')} style={styles.logo1} />
          {/* logo end */}



          {/* Email input */}
          <View style={styles.emailinputcontainer}>
            <Text style={styles.emailinputlable}>Email</Text>
            <TextInput
              placeholder=' Enter email...'
              style={styles.emailinputtextfeild}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}

            />
          </View>
          {(touched.email && errors.email) &&
            <Text style={{ top: Dimensions.get('window').height * 0.28, left: 20, color: "red" }}>{errors.email}</Text>
          }
          {/* Email inupt end */}



          {/* password input */}
          <View style={styles.passwordinputcontainer}>
            <Text style={styles.passwordinputlable}>Password</Text>
            <TextInput
              placeholder='  Enter Password...'
              style={styles.passwordinputtextfeild}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
          </View>
          {(touched.password && errors.password) &&
            <Text style={{ top: Dimensions.get('window').height * 0.28, left: 20, color: "red" }}>{errors.password}</Text>
          }
          {/* password input end */}



          <TouchableOpacity onPress={handleSubmit} style={styles.button1}>
            <Text style={{ color: "white" }}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={forgot} style={styles.button2}>
            <Text style={{ color: '#C0C0C0' }}>FORGOT PASSWORD ?</Text>
          </TouchableOpacity>

        </View>
      )}
    </Formik>

    // * container end * //
  );
}


const styles = StyleSheet.create({
  header: {
    top: Dimensions.get('window').height * 0.04,
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    justifyContent: "center"
  },

  headericon1: {
    fontSize: 23,
    fontWeight: "600",
    left: 10,
    position: "absolute",
    color: "#133459",

  },
  headertitle: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "250",
    color: "#133459",
    position: "absolute",
  },

  headericon2: {
    fontSize: 25,
    alignSelf: "flex-end",
    right: 5,
    color: "#133459",

  },

  logo1: {

    width: Dimensions.get('window').width * 0.8,
    height: 60,
    top: Dimensions.get('window').height * 0.23,
    resizeMode: 'stretch',
    alignSelf: "center"
  },

  emailinputcontainer: {
    top: Dimensions.get('window').height * 0.27,
    position: "relative",
    alignSelf: "center",

  },

  emailinputlable: {
    marginBottom: 8,
    fontSize: 17,
    color: "#133459",
    fontWeight: "500"
  },

  emailinputtextfeild: {
    height: 35,
    width: Dimensions.get('window').width * 0.92,
    borderWidth: 1.6,
    borderRadius: 6,
    borderColor: "#eaedf2"
  },

  passwordinputcontainer: {
    top: Dimensions.get('window').height * 0.27,
    position: "relative",
    alignSelf: "center",
    marginTop: 10
  },

  passwordinputlable: {
    marginBottom: 8,
    fontSize: 17,
    color: "#133459",
    fontWeight: "500"
  },

  passwordinputtextfeild: {
    height: 35,
    width: Dimensions.get('window').width * 0.92,
    borderWidth: 1.6,
    borderRadius: 6,
    borderColor: "#eaedf2"
  },

  button1: {
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 9,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#133459",
    top: Dimensions.get('window').height * 0.32,
    alignSelf: "center",

  },

  button2: {
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 9,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 40,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    top: Dimensions.get('window').height * 0.33,
    alignSelf: "center",


  }

});



