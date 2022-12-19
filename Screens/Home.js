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

import Icon from 'react-native-vector-icons/AntDesign'
import Iconfa from 'react-native-vector-icons/FontAwesome'

// import Navigator from '../Routes'
import Topbar from '../Components/Topbar.js'
import Homee from '../Components/Homeoption'
import MyDocumentManagement from './MyDocumentManagement.js';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */



const App: () => Node = (props) => {

    const Constants = GlobalVariables.useValues();
    const SetGlobalVariable = GlobalVariables.useSetValue();


    const { navigation } = props;

    useEffect(() => {
        DataCoreApi.getLatestSettlements(Constants);
        DataCoreApi.getLatestMatterDetails(Constants);

    }, []);

    useEffect(() => {
        GlobalVariables.checkApiChanged(Constants, SetGlobalVariable);
    }, []);

    const pressHandler = () => {
        navigation.push('Currentsettlement')
    }
    const glossary = () => {
        navigation.push('Glossary')
    }
    const mpp = () => {
        navigation.push('Myproperty')
    }

    const md = () => {
        navigation.push('Deposit')
    }

    const back = () => {
        navigation.push('Login')
    }

    const MyDocumentManagement = () => {
        navigation.push('MyDocumentManagement')
    }



    return (


        <ScrollView>




            <Topbar title={"Home"} mb={40} t={9} onPress={back} />
            <View style={styles.Bluecontainer}>

                <TouchableOpacity style={{ height: 80, width: "50%", justifyContent: "center", top: 1, left: 18 }}>

                    <View style={{ width: "90%", height: "80%", flexDirection: "row", }}>
                        <View>
                            <Image source={require('../images/UserDefault.jpg')} style={styles.profileimg} />
                        </View>
                        <View style={{ alignSelf: "center", left: 5 }}>
                            <Text style={styles.profiletitle1}>Welcome</Text>
                            <Text style={styles.profiletitle2}> {Constants['USER_FULL_NAME']}</Text>
                        </View>
                    </View>

                </TouchableOpacity>
                <View style={{ width: "50%", justifyContent: "center" }}>
                    <Image source={require('../images/LogoLight.png')} style={styles.logo1} />
                </View>
            </View >


            <View style={styles.pinkcontainer}>
                <View style={styles.titlecontainer}>
                    <Text style={styles.title1}>
                        Pathway to Settlement
                    </Text>
                    <View style={styles.titlecontainer2}>
                        <Text style={styles.title2}>{`An innovative tool to track the progress 
     of property settlements in real time`} </Text>
                    </View>
                </View>
            </View>


            <TouchableOpacity onPress={pressHandler}>
                <View style={styles.tracksettlementbutton}>
                    <Image source={require('../images/Artboard2.png')} style={styles.tracksettlementlogo} />
                    <Text style={styles.tracksettlementtitle}>{`Track Your 
Settlements`} </Text>
                </View>
            </TouchableOpacity>


            <View style={styles.optionscontainer}>




                <View style={styles.rightoptioncontainer}>



                    <Homee img={require('../images/Artboard4.png')} onpress={glossary} title={'My Glossary'} />


                    <Homee img={require('../images/Artboard4.png')} onpress={MyDocumentManagement} title={`My Document Managment`} />



                </View>





                <View style={{ height: 100, position: "absolute", alignSelf: "flex-start", left: "5%", }}>


                    <Homee img={require('../images/Artboard3.png')} onpress={mpp} title={`My Property Passport`} />


                    <Homee img={require('../images/Artboard5.png')} onpress={md} title={`My Safe Deposit`} />


                    <Homee img={require('../images/Artboard6.png')} title={`My Concierg`} />


                </View>




            </View>
        </ScrollView >




    );
};



const styles = StyleSheet.create({
    Bluecontainer: {
        backgroundColor: "#133459",
        height: 80,
        flexDirection: "row"

    },

    subprofilecontainer: {
        width: 180,
        height: 60,
        flexDirection: "row",
        justifyContent: "center"
    },
    profileimg: {
        resizeMode: 'stretch',
        height: 50,
        width: 50,
        borderRadius: 40,

        top: 5
    },

    profiletitle1: {

        fontSize: 13,
        color: "white",
        top: 1,


    },

    profiletitle2: {

        fontSize: 16,
        color: "white",
        left: -4

    },

    logo1: {
        resizeMode: 'stretch',
        height: 30,
        width: 160,
        left: 20


    },

    pinkcontainer: {
        height: 150,
        backgroundColor: "#f2c8e0",
        alignItems: "center"
    },

    titlecontainer: {
        alignItems: "center",
        top: "20%",
        position: "absolute"
    },

    title1: {
        fontSize: 20,
        fontFamily: 'MontserratRegular',
    },

    titlecontainer2: {
        alignItems: "center",
        top: "110%",
        position: "absolute",
        width: 500
    },

    title2: {
        fontFamily: 'MontserratLight',
    },

    tracksettlementbutton: {
        width: Dimensions.get('window').width * 0.92, alignSelf: "center", top: -40, height: 130, borderRadius: 10, justifyContent: "center", borderWidth: 1, backgroundColor: "white"
    },

    tracksettlementlogo: {
        resizeMode: 'stretch', height: "90%", width: "42%", position: "absolute"
    },

    tracksettlementtitle: { alignSelf: "flex-end", fontSize: 20, right: "14%" },

    optionscontainer: { height: 450, width: "100%", bottom: 25, },

    rightoptioncontainer: { height: 100, position: "absolute", alignSelf: "flex-end", right: "5%" },

    mypropconta: { marginBottom: 10 }

});


export default App;









  // *test screens *//



