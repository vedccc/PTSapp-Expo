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

    const Create = () => {
        navigation.push('Welcome')
    }
    return (



        <View>

            <ScrollView style={styles.container}>


                <Topbar title={"Signup"} mb={40} onPress={Create} />


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

                <Textfeild holder={" Enter your first name"} value={"First Name"} mb={25} mt={200} />
                <Textfeild holder={" Enter your middle name"} value={"Middle Name"} mb={25} />
                <Textfeild holder={" Enter your last name"} value={"Last Name"} mb={25} />
                <Textfeild holder={" Enter your email address"} value={"Email"} mb={25} />
                <Textfeild holder={" Enter your mobile number"} value={"Mobile No"} mb={25} />
                <Textfeild holder={" Enter password"} value={"Password"} mb={25} />
                <Textfeild holder={" Confirm your password "} value={"Confirm password"} mb={30} />


                <Darkb value={"NEXT STEP"} />





            </ScrollView>


        </View>



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


