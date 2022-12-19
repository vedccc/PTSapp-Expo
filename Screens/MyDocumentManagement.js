/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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


import Topbar from '../Components/Topbar.js'

import MyPropertyComponent from '../Components/MyPropertyPassport.js';
import PathwaySteps from './PathwaySteps.js';

const MyDocumentManagement: () => Node = ({ navigation }) => {

    const back = () => {
        navigation.push('Home')
    }

    const PathwayStepsScreen = () => {
        navigation.push('PathwaySteps')
    }

    return (

        <View style={{ height: '100%', backgroundColor: 'white' }}>

            <Topbar title={`  My Document
   Management`} mb={40} onPress={back} />


            <ScrollView>

                <View>
                    <Text style={styles.txt1}>Select Property</Text>
                    <View style={styles.txt1Container} >
                        <Text style={{ fontSize: 15 }}>Properties i am<Text style={{ fontWeight: "bold", fontSize: 15 }}> Buying</Text></Text>
                    </View>

                    <MyPropertyComponent
                        left={30}
                        w={Dimensions.get('window').width * 0.85}
                        BoxText={`Address not found
Residential`}
                    />

                    <MyPropertyComponent
                        left={30}
                        w={Dimensions.get('window').width * 0.85}
                        BoxText={`1010/BuyerTrack Australia
Avenue Sydney Olympic 
Park, NSW 2127 Australia
Residential`}
                    />
                    <MyPropertyComponent
                        left={30}
                        w={Dimensions.get('window').width * 0.85}
                        BoxText={`35 Ponte Vecchio
Boulevard Ellenbrook,WA
6069 Australia
Residential`}
                    />
                </View>


                <View>
                    <View style={styles.txt2Container} >
                        <Text style={styles.txt1}>Properties i am<Text style={{ fontWeight: "bold", fontSize: 15 }}> Selling</Text></Text>
                    </View>

                    <MyPropertyComponent
                        left={30}
                        w={Dimensions.get('window').width * 0.85}
                        BoxText={`SellerTrack Australia
Avenue Sydney Olympic 
Park, NSW 2127 Australia
Residential`}
                    />
                    <MyPropertyComponent
                        left={30}
                        w={Dimensions.get('window').width * 0.85}
                        BoxText={`100 Morley Drive Yokine,
WA 6060 Australia
Residential`}
                    />
                </View>



            </ScrollView >
        </View >

    );
};

const styles = StyleSheet.create({

    txt1: {
        top: 15,
        left: 14,
        marginBottom: 20,
        fontSize: 15
    },
    txt1Container: {
        top: 15,
        left: 30,
        marginBottom: 50,


    },
    txt2Container: {
        left: 23,
        marginBottom: 30,
        fontSize: 15
    },
    txt3Container: {
        left: 20,
        marginBottom: 30,
    },

    profilecontainer: {
        backgroundColor: "#133459",
        height: 80,
        justifyContent: "flex-start"
    },

    subprofilecontainer: {
        width: 180,
        height: 60,
        position: "absolute",
        left: 20, top: 6
    },

    profileimg: {
        resizeMode: 'stretch',
        height: 50,
        width: 50,
        borderRadius: 40,
        position: "absolute",
        top: 5
    },

    profiletitle1: {
        alignSelf: "center",
        fontSize: 13,
        position: "absolute",
        right: 68,
        top: 12,
        color: "white"
    },

    profiletitle2: {
        alignSelf: "flex-end",
        fontSize: 16,
        position: "absolute",
        top: 30,
        right: 14,
        color: "white"
    }

})

export default MyDocumentManagement;



