/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
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
import { MaterialCommunityIcons, Icon, FontAwesome, AntDesign, MaterialIcons } from 'react-native-vector-icons';
import Topbar from '../Components/Topbar.js'
import Homee from '../Components/Homeoption'
import { Formik } from 'formik';
import * as yup from 'yup';
import * as PTSApi from '../apis/PTSApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';

const UpdatePasswordSecond = (props) => {

    const Constants = GlobalVariables.useValues();

    const { theme } = props;
    const { navigation } = props;

    const IsPasswordInvalid = (oldPass, retypePass) => {
        return oldPass != retypePass;
    };

    const isResetCodeInvalid = (input) => {
        if (input != props.route?.params?.Code) {
            setGlobalVariableValue({
                key: 'ERROR_MESSAGE',
                value: 'Reset Code is invalid',
            });
            return true;
        }

        return false;
    };

    const [showLoading, setShowLoading] = React.useState(false);
    const [showSuccess, setShowSuccess] = React.useState(false);

    const setGlobalVariableValue = GlobalVariables.useSetValue();

    const updatePasswordValidationSchema = yup.object().shape({
        code: yup.string().required('Reset Code is required.'),
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters.`)
            .required('Password is required.'),
        rePassword: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters.`)
            .oneOf([yup.ref('password')], 'Passwords do not match')
            .required('Confirm Password is required.'),
    });


    const MyProfile = () => {
        navigation.push('MyProfile')
    }

    return (



        <View style={{ height: '100%' }}>
            <Topbar title={"Update Password"} mb={40} t={9} onPress={MyProfile} />
            <ScrollView>
                <Formik
                    validationSchema={updatePasswordValidationSchema}
                    initialValues={{ code: '', password: '', rePassword: '' }}
                    onSubmit={async (values) => {

                        console.log('valu', values)
                        try {
                            setShowLoading(true);
                            const isResetCodeInvalidResult = isResetCodeInvalid(
                                values.code
                            );
                            setShowLoading(false);
                            console.log("result", isResetCodeInvalidResult)
                            if (isResetCodeInvalidResult) {

                                return;
                            }
                            if (IsPasswordInvalid(values.password, values.rePassword)) {
                                setShowLoading(false);
                                return;
                            }
                            const updateResponse = await PTSApi.usersUpdatePasswordPOST(
                                Constants,
                                { password: values.password, user_id: Constants['USER_ID'] }
                            );
                            console.log("res", updateResponse)
                            const updateResponseJson = updateResponse;

                            const message = updateResponseJson.message;
                            setGlobalVariableValue({
                                key: 'ERROR_MESSAGE',
                                value: message,
                            });
                            if (message) {
                                setShowLoading(false);
                                return;
                            }
                            setShowLoading(false);
                            setShowSuccess(true);
                        } catch (err) {
                            setShowLoading(false);
                            console.error(err);
                        }
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <>

                            <View style={styles.profilecontainer}>
                                <TouchableOpacity style={styles.profile1}>

                                    <View style={{ width: "90%", height: "80%", flexDirection: "row", }}>
                                        <View>
                                            <Image source={require('../images/UserDefault.jpg')} style={styles.profileimg} />
                                        </View>
                                        <View style={{ alignSelf: "center", left: 5 }}>
                                            <Text style={styles.profiletitle1}>Update My Password</Text>
                                            <Text style={styles.profiletitle2}>Varun Verma</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <MaterialIcons name='lock' size={150} style={{ color: '#133459', alignSelf: 'center', top: 15 }} />
                            <Text style={styles.txt3}>A reset code has been sent to your registered email address.</Text>

                            <View style={{ marginBottom: 32, top: 15 }}>

                                <View>
                                    <Text style={{ top: 20, left: 16, color: '#a5aeb5' }}>Reset Code (6 numbers)</Text>
                                    <TextInput
                                        style={styles.inputContainer}
                                        placeholder="Enter reset code"
                                        onChangeText={handleChange('code')}
                                        onBlur={handleBlur('code')}
                                        value={values.code}
                                    />
                                    {errors.code && (
                                        <Text
                                            style={styles.Text_4n}
                                        >
                                            {errors.code}
                                        </Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={{ top: 20, left: 16, color: '#a5aeb5' }}>New Password</Text>
                                    <TextInput
                                        style={styles.inputContainer}
                                        placeholder="Enter new password"
                                        secureTextEntry={true}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                    />
                                    {errors.password && (
                                        <Text
                                            style={[styles.Text_4n]}
                                        >
                                            {errors.password}
                                        </Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={{ top: 20, left: 16, color: '#a5aeb5' }}>Confirm New Password</Text>
                                    <TextInput
                                        style={styles.inputContainer}
                                        placeholder="Enter new password"
                                        secureTextEntry={true}
                                        onChangeText={handleChange('rePassword')}
                                        onBlur={handleBlur('rePassword')}
                                        value={values.rePassword}
                                    />
                                    <>
                                        {errors.rePassword && (
                                            <Text
                                                style={[
                                                    styles.Text_4n,
                                                    ,
                                                ]}
                                            >
                                                {errors.rePassword}
                                            </Text>
                                        )}
                                        {!IsPasswordInvalid(
                                            values.password,
                                            values.rePassword
                                        ) ? null : (
                                            <Text
                                                style={[
                                                    styles.Text_4n,

                                                ]}
                                            >
                                                {"Password doesn't match"}
                                            </Text>
                                        )}
                                    </>
                                </View>
                            </View>

                            <TouchableOpacity onPress={handleSubmit} style={{
                                top: 32,
                                width: Dimensions.get('window').width * 0.92,
                                borderRadius: 9,
                                height: 45,
                                alignItems: "center",
                                justifyContent: "center",
                                // marginTop: 40,
                                backgroundColor: "#16355a",
                                alignSelf: "center",
                                // position: props.position
                                marginBottom: 40,
                                flexDirection: "row"
                            }}>

                                <MaterialIcons name='lock' size={23} style={{ color: 'white', alignSelf: 'center', right: 10 }} />
                                <Text style={styles.btntxt}>UPDATE PASSWORD</Text>
                            </TouchableOpacity>

                        </>
                    )}
                </Formik>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.055,
        left: 15,
        borderRadius: 10,
        top: 32,
        borderColor: '#a5aeb5',
        borderWidth: 0.4,
        marginBottom: 20,
        paddingLeft: 10
    },
    profilecontainer: {

        backgroundColor: "#133459",
        height: 90,
        justifyContent: "flex-start",
        height: 80,
        flexDirection: "row"
    },
    profileimg: {
        resizeMode: 'stretch',
        height: 50,
        width: 50,
        borderRadius: 40,
        top: 5
    },
    profile1: {
        height: 80,
        width: "50%",
        justifyContent: "center",
        top: 1,
        left: 18
    },
    profiletitle1: {
        fontSize: 13,
        color: "white",
        top: 1,
        left: 1
    },

    profiletitle2: {
        fontSize: 16,
        color: "white",
        left: 1
    },
    txt3: {
        width: Dimensions.get('window').width * 0.85,
        left: 16,
        top: 15,
    },
    btntxt: {
        color: "white",
        fontSize: 15,
        fontWeight: "500",

    },
    Text_4n: {
        color: 'red',
        marginTop: 4,
        marginBottom: 4,
        left: 16,
        top: 15
    },
})

export default UpdatePasswordSecond;