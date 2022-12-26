// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Welcomescreen from './Screens/Welcomescreen.js'

import React from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, useColorScheme, View, Dimensions, TouchableOpacity, } from 'react-native';
import * as PTSApi from '../apis/PTSApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Topbar from '../Components/Topbar.js'
import Textfeild from '../Components/Textfeild'
import Darkb from '../Components/Darkbutton'

export default function App(props) {

    const Constants = GlobalVariables.useValues();
    const { theme } = props;
    const { navigation } = props;

    const [textInputEmail, setTextInputEmail] = React.useState('');
    const [showSuccess, setShowSuccess] = React.useState(false);

    const login = () => {
        navigation.push('Login')
    }

    return (

        <View>

            <Topbar title={"Reset Password"} mb={40} onPress={login} />
            <Text style={styles.title1}>Reset password</Text>
            <Text style={styles.para}>
                {` Enter your email address and we'll send you instructions
 on how to reset your password`}
            </Text>
            <Textfeild
                onChangeText={(textInputEmail) => {
                    try {
                        setTextInputEmail(textInputEmail);
                    } catch (err) {
                        console.error(err);
                    }
                }}
                title={"Email"} holder={" Enter email"} top={Dimensions.get('window').height * 0.27} position={"absolute"} />

            <Darkb
                disabledValue={!textInputEmail}
                nav={async () => {
                    try {
                        const response = await PTSApi.usersSendResetInstructionPOST(
                            Constants,
                            {
                                email: textInputEmail,
                            }
                        );

                        if (response.success) {
                            setShowSuccess(true);
                        }
                    } catch (err) {
                        console.error(err);
                    }
                }}
                t={Dimensions.get('window').height * 0.39}
                position={"absolute"}
                value={"SUBMIT"} />

            <View style={styles.SecondButton}>
                <TouchableOpacity
                    onPress={() => {
                        try {
                            navigation.navigate('Home');
                        } catch (err) {
                            console.error(err);
                        }
                    }}>
                    <Text style={styles.SecondButtonTxt}>CANCEL</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    SecondButton: {
        top: 275,
        borderRadius: 10,
        left: 18,
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.91,
        height: Dimensions.get('window').height * 0.05,
        borderWidth: 0.5,
    },
    SecondButtonTxt: {
        alignSelf: 'center',
        color: '#A0A0A0'
    },

    title1: {
        left: 15,
        top: Dimensions.get('window').height * 0.16,
        position: "absolute",
        fontSize: 17,
        color: "#133459",
        fontWeight: "700"
    },

    para: {
        left: 14,
        color: "#133459",
        fontSize: 12,
        position: "absolute",
        top: Dimensions.get('window').height * 0.20
    }

});
