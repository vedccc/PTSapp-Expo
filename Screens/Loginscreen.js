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
  TextInput,
  KeyboardAvoidingView

} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Formik } from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/AntDesign'
import * as DataCoreApi from '../apis/DataCoreApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Iconfa from 'react-native-vector-icons/FontAwesome';
import Textfeild from '../Components/Textfeild'
import Darkb from '../Components/Darkbutton'
import Topbar from '../Components/Topbar';

export default function App({ navigation }) {

  const [showLoading, setShowLoading] = React.useState(false);
  const Constants = GlobalVariables.useValues();
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const onpress = async (values) => {
    try {
      setShowLoading(true);
      const loginResponse = await DataCoreApi.authLoginPOST(Constants, {
        email: values.email,
        password: values.password,
      });
      if (!loginResponse) {
        setGlobalVariableValue({
          key: 'ERROR_MESSAGE',
          value: 'ERRROR',
        });
        setShowLoading(false);
      }
      console.log("dd", loginResponse)
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
        setShowLoading(false);
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
      setShowLoading(false);
      navigation.replace('Home');
    } catch (err) {
      console.error(err);
      setShowLoading(false);
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
    email: yup.string().required('Email Address is required'),
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



        <View style=
          {{ flex: 1 }}>
          <Spinner visible={showLoading} />
          <Topbar title={"Login"} mb={40} t={9} onPress={back} />


          <View style={{ flex: 1, }}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.container}
            >


              <View style={{ height: 400, }}>
                <ScrollView>
                  <Image source={require('../images/LogoOriginal.png')} style={styles.logo1} />

                  <Textfeild
                    holder={"  Enter email..."}
                    title={"Email"}
                    mb={10}
                    mt={25}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {(touched.email && errors.email) &&
                    <Text style={{ left: 20, color: "red", marginBottom: 5 }}>{errors.email}</Text>
                  }

                  <Textfeild
                    holder={"  Enter password..."}
                    title={"Password"}
                    mb={30}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {(touched.password && errors.password) &&
                    <Text style={{ left: 20, color: "red", bottom: 20 }}>{errors.password}</Text>
                  }

                  <Darkb value={"LOGIN"} nav={handleSubmit} />

                  <TouchableOpacity style={styles.button3}>
                    <Text style={styles.Buttontxt}>CREATE ACCOUNT</Text>
                  </TouchableOpacity>

                </ScrollView>
              </View>


            </KeyboardAvoidingView>
          </View>

        </View>







      )
      }
    </Formik >

    // * container end * //
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  inner: {

    flex: 1,

    backgroundColor: "red"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,

  },
  btnContainer: {
    backgroundColor: "white",

  },
  logo1: {

    width: Dimensions.get('window').width * 0.8,
    height: 60,

    resizeMode: 'stretch',
    alignSelf: "center",
    top: 22,
    marginBottom: 27
  },

  button3: {
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 9,
    height: 45,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 40,
    borderWidth: 1,
    marginTop: 8

  }


});


