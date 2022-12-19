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

import Icon from 'react-native-vector-icons/AntDesign'
import Iconfa from 'react-native-vector-icons/FontAwesome'
import Topbar from '../Components/Topbar.js'
import Textfeild from '../Components/Textfeild'
import Darkb from '../Components/Darkbutton'

export default function App({ navigation }) {
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
            <Textfeild title={"Email"} holder={" Enter email"} top={Dimensions.get('window').height * 0.27} position={"absolute"} />

            <Darkb t={Dimensions.get('window').height * 0.39} position={"absolute"} value={"hi"} />

        </View>

    );
}

const styles = StyleSheet.create({
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
