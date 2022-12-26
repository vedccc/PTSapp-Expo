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
import * as DataCoreApi from '../apis/DataCoreApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { MaterialCommunityIcons, Icon, FontAwesome, AntDesign, MaterialIcons } from 'react-native-vector-icons';
import * as PTSApi from '../apis/PTSApi.js';
import Topbar from '../Components/Topbar.js'
import Homee from '../Components/Homeoption'
import MyDocumentManagement from './MyDocumentManagement.js';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const UpdatePasswordScreen = ({ navigation }) => {

    const Constants = GlobalVariables.useValues();

    const MyProfile = () => {
        navigation.push('MyProfile')
    }

    const UpdatePasswordSecond = () => {
        navigation.push('UpdatePasswordSecond')
    }

    return (
        <View>
            <Topbar title={"Update Password"} mb={40} t={9} onPress={MyProfile} />



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
            <Text style={styles.txt3}>Click on SEND CODE and get your reset code on your registered email address.</Text>

            <TouchableOpacity onPress={async () => {
                try {
                    const codeResponse = await PTSApi.usersSendResetCodePOST(
                        Constants,
                        { user_id: Constants['USER_ID'] }
                    );
                    const codeResponseJson = codeResponse;
                    const code = codeResponseJson.code;
                    console.log("check123", codeResponse);
                    navigation.push('UpdatePasswordSecond', { Code: code });
                } catch (err) {
                    console.error(err);
                }
            }}
                style={{
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
                    marginBottom: 6,
                    flexDirection: "row"
                }}>


                <Text style={styles.btntxt}>SEND RESET CODE</Text>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
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
        fontWeight: "500"
    },
})

export default UpdatePasswordScreen;