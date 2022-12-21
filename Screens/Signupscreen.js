// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Welcomescreen from './Screens/Welcomescreen.js'

import React from 'react';
import type { Node } from 'react';
import {
    SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions, Image, Button, TouchableOpacity,
    TextInput
} from 'react-native';
import * as yup from 'yup';
import { Formik, formik } from 'formik';
import Topbar from '../Components/Topbar.js'
import Textfeild from '../Components/Textfeild'
import Darkb from '../Components/Darkbutton'
import * as PTSApi from '../apis/PTSApi.js';
import * as DataCoreApi from '../apis/DataCoreApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';

export default function App(props) {

    const Constants = GlobalVariables.useValues();
    const { theme } = props;
    const { navigation } = props;

    const isNotEmpty = (input) => {
        return input != '' && input != undefined;
    };

    const [textInputEmail, setTextInputEmail] = React.useState('');
    const [showLoading, setShowLoading] = React.useState(false);

    const setGlobalVariableValue = GlobalVariables.useSetValue();

    const handleInput = () => (textInputEmail, name) => {
        switch (name) {
            case 'email':
                setTextInputEmail(textInputEmail);
                break;

            default:
                break;
        }
    };

    const Create = () => {
        navigation.push('Welcome')
    }
    const mob = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const registerValidationSchema = yup.object().shape({
        firstName: yup
            .string()
            .matches(
                /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
                'Name can only contain Latin letters.'
            ).required('Please enter your first name'),

        lastName: yup
            .string()
            .matches(
                /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
                'Name can only contain Latin letters.'
            )
            .required('Please enter your last name'),

        email: yup
            .string()
            .email('Please enter valid email')
            .required('email is required'),

        mobileNo: yup
            .string()
            .matches(mob, 'Phone number is not valid')
            .required('Mobile no is required'),

        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters.`)
            .required('Password is required.'),

        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
    });

    // API

    const handleSignupUser = async (userData) => {
        setShowLoading(true);
        setGlobalVariableValue({
            key: 'ERROR_MESSAGE',
            value: '',
        });
        try {
            const updateResponse = await PTSApi.signUpUser(Constants, {
                email: userData.email,
                mobileNo: userData.mobile,
                password: userData.password,
                firstName: userData.firstName,
                middleName: userData.middleName,
                lastName: userData.lastName,


            });
            const updateResponseJson = updateResponse;
            console.log(updateResponse)
            const message = updateResponseJson?.message;
            setGlobalVariableValue({
                key: 'ERROR_MESSAGE',
                value: message,
            });
            if (isNotEmpty(message)) {
                setShowLoading(false);
                return;
            }
            setShowLoading(false);
            navigation.navigate('Home', {
                userData: { ...updateResponse, password: userData.password },
            });
        } catch (err) {
            setShowLoading(false);
            console.error('error sign up', err);
        }
    };


    return (

        <Formik
            validationSchema={registerValidationSchema}
            initialValues={{
                email: '',
                mobileNo: '',
                password: '',
                confirmPassword: '',
                firstName: '',
                middleName: '',
                lastName: '',
            }} onSubmit={handleSignupUser}>

            {({ handleChange, handleBlur, handleSubmit, values, touched, onSubmit, errors, isValid }) => (


                <View>

                    <ScrollView style={styles.container}>


                        <Topbar title={"Signup"} mb={40} t={9} onPress={Create} />
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', top: 15, justifyContent: 'center', right: 10 }}>
                            <Text style={{ top: 9, right: 5 }}>Step</Text>
                            <View style={{ backgroundColor: '#153558', height: 32, width: 40, height: 40, justifyContent: 'center', borderRadius: 100 }}>
                                <Text style={{ color: 'white', alignSelf: 'center', }}>1/2</Text>
                            </View>
                        </View>

                        <View style={styles.heading}>

                            <Text style={styles.title1}>Create an account</Text>

                            <View style={styles.subcontainer}><View style={styles.subcontainercontainer}></View></View>

                            <Text style={styles.para}>{`Please Rigester With your email address or phone 
number ` }
                            </Text>

                            <Text style={styles.ty}>
                                Thank you
                            </Text>

                        </View>

                        <Textfeild
                            holder={" Enter your first name"}
                            title={"First Name"}
                            mb={25}
                            mt={154}
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            value={values.firstName}

                        />
                        {(touched.firstName && errors.firstName) &&
                            <Text style={{ left: 20, color: "red", top: -23 }}>{errors.firstName}</Text>
                        }

                        <Textfeild
                            holder={" Enter your middle name"}
                            title={"Middle Name"}
                            mb={25}

                        />

                        <Textfeild
                            holder={" Enter your last name"}
                            title={"Last Name"}
                            mb={25}
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            value={values.lastName}

                        />
                        {(touched.lastName && errors.lastName) &&
                            <Text style={{ left: 20, color: 'red', top: -23 }}>{errors.firstName}</Text>
                        }

                        <Textfeild
                            holder={" Enter your email address"}
                            title={"Email"}
                            mb={25}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}

                        />{(touched.email && errors.email) &&
                            <Text style={{ left: 20, color: "red", top: -23 }}>{errors.email}</Text>
                        }

                        <Textfeild
                            holder={" Enter your mobile number"}
                            title={"Mobile No"}
                            mb={25}
                            onChangeText={handleChange('mobileNo')}
                            onBlur={handleBlur('mobileNo')}
                            value={values.mobileNo}
                        />
                        {(touched.mobileNo && errors.mobileNo) &&
                            <Text style={{ left: 20, color: "red", top: -23 }}>{errors.mobileNo}</Text>
                        }

                        <Textfeild
                            holder={" Enter password"}
                            title={"Password"}
                            mb={25}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        {(touched.password && errors.password) &&
                            <Text style={{ left: 20, color: "red", top: -23 }}>{errors.password}</Text>
                        }
                        <Textfeild
                            holder={" Confirm your password "}
                            title={"Confirm password"}
                            mb={30}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                        />
                        {(touched.confirmPassword && errors.confirmPassword) &&
                            <Text style={{ left: 20, color: "red", top: -23 }}>{errors.confirmPassword}</Text>
                        }


                        <Darkb value={"NEXT STEP"} nav={handleSubmit} />

                    </ScrollView>


                </View>

            )}
        </Formik>

    );
}



const styles = StyleSheet.create({


    container: {
        height: "100%"
    },

    heading: {
        height: 150,
        top: 90,
        position: 'absolute',
        width: "100%",
    },

    title1: {
        left: 10,
        top: 65,
        fontSize: 17,
        color: "#133459",
        fontWeight: "700"
    },

    subcontainer: {
        height: 14,
        width: Dimensions.get('window').width * 0.95,
        backgroundColor: "#133459",
        top: 72,
        alignSelf: "center"
    },

    subcontainercontainer: {
        width: "50%",
        height: 14,
        backgroundColor: "#f2c8e0"
    },

    para: {
        top: 77,
        left: 10,
        color: "#133459",
        fontSize: 13
    },

    ty: {
        top: 85,
        left: 10,
        color: "#133459",
        fontSize: 13
    }

});


