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

export default function App({ navigation }) {
    const pressHandler = () => {
        navigation.push('NewUserInvite')
    }

    const login = () => {
        navigation.push('Login')
    }
    const Create = () => {
        navigation.push('Create')
    }
    return (
        <SafeAreaView style={styles.container} >



            <Image source={require('../images/LogoOriginal.png')} style={styles.logo} />

            <Image source={require('../images/Artboard1.png')} style={styles.logo2} />

            <Text style={styles.Maintitle}>Pathway to Settlement</Text>



            <View style={styles.subtitlecontainer}>
                <Text style={styles.subtitle}>
                    {
                        '    An innovative tool to track the progress of     property settlements inreal time. For buyers, sellers,real estate agents, and finance brokers.'
                    }

                </Text>
            </View>


            <TouchableOpacity onPress={pressHandler} style={styles.button1}>
                <Text style={{ color: "white" }}>NEW USER WITH INVITE</Text>
            </TouchableOpacity>


            <Text style={{ top: Dimensions.get('window').height * 0.73, position: "absolute" }}>or</Text>


            <TouchableOpacity onPress={login} style={styles.button2}>
                <Text style={styles.Buttontxt}>I ALREADY HAVE AN ACCOUNT</Text>
            </TouchableOpacity>


            <Text style={{ top: Dimensions.get('window').height * 0.83, position: "absolute" }}>or</Text>


            <TouchableOpacity onPress={Create} style={styles.button3}>
                <Text style={styles.Buttontxt}>CREATE ACCOUNT</Text>
            </TouchableOpacity>




        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignContent: "center",
        alignItems: "center"
    },
    logo: {
        width: Dimensions.get('window').width * 0.8,
        height: 60, top: Dimensions.get('window').height * 0.09,
        resizeMode: 'stretch',
        position: "absolute",
        alignSelf: "center"
    },

    logo2: {
        width: 320,
        height: 150,
        top: Dimensions.get('window').height * 0.22,
        position: "absolute",
        resizeMode: 'stretch'
    },

    Maintitle: {
        fontSize: 23,
        top: Dimensions.get('window').height * 0.49,
        position: "absolute",
        fontWeight: "bold"
    },

    subtitlecontainer: {
        top: Dimensions.get('window').height * 0.541,
        alignItems: "center",
        width: Dimensions.get('window').width * 0.85,
        position: "absolute"
    },
    subtitle: {
        alignSelf: "center",
        marginLeft: 14,
        marginTop: 4,
        fontSize: 12.9
    },

    button1: {
        width: Dimensions.get('window').width * 0.9,
        borderRadius: 9,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 40,
        backgroundColor: "#133459",
        top: Dimensions.get('window').height * 0.65,
        position: "absolute"
    },

    button2: {
        width: Dimensions.get('window').width * 0.9,
        borderRadius: 9,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 40,
        borderWidth: 1,
        top: Dimensions.get('window').height * 0.76,
        position: "absolute"
    },

    button3: {
        width: Dimensions.get('window').width * 0.9,
        borderRadius: 9,
        height: 45,
        marginTop: 79,
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 40,
        borderWidth: 1,
        top: Dimensions.get('window').height * 0.76,
        position: "absolute"
    }

});
