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

import Icon from 'react-native-vector-icons/AntDesign'
import Iconfa from 'react-native-vector-icons/FontAwesome'

// import Navigator from '../Routes'
import Topbar from '../Components/Topbar.js'
import Homee from '../Components/Homeoption'
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */



const App: () => Node = ({ navigation }) => {


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




    return (


        <ScrollView>




            <Topbar title={"Home"} mb={40} onPress={back} />
            <View style={styles.profilecontainer}>
                <TouchableOpacity >
                    <View style={styles.subprofilecontainer}>
                        <Image source={require('../images/UserDefault.jpg')} style={styles.profileimg} />
                        <Text style={styles.profiletitle1}>Welcome</Text>
                        <Text style={styles.profiletitle2}>Vedant chellani</Text>
                    </View>
                </TouchableOpacity>
                <Image source={require('../images/LogoLight.png')} style={styles.logo1} />
            </View>


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
                    <Text style={styles.tracksettlementtitle}>{` Track Your 
  Settlements`} </Text>
                </View>
            </TouchableOpacity>


            <View style={styles.optionscontainer}>




                <View style={styles.rightoptioncontainer}>



                    <Homee img={require('../images/Artboard4.png')} onpress={glossary} title={'My Glossary'} />


                    <Homee img={require('../images/Artboard4.png')} title={`My Document Managment`} />



                </View>





                <View style={{ height: 100, position: "absolute", alignSelf: "flex-start", left: "6%", }}>


                    <Homee img={require('../images/Artboard3.png')} onpress={mpp} title={`My Property Passport`} />


                    <Homee img={require('../images/Artboard5.png')} onpress={md} title={`My Safe Deposit`} />


                    <Homee img={require('../images/Artboard6.png')} title={`My Concierg`} />


                </View>




            </View>
        </ScrollView>




    );
};



const styles = StyleSheet.create({
    profilecontainer: {
        backgroundColor: "#133459",
        height: 80,
        justifyContent: "flex-start"
    },

    subprofilecontainer: {
        width: 180,
        height: 60,
        position: "absolute",
        left: 20,
        top: 6
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
    },

    logo1: {
        resizeMode: 'stretch',
        height: "40%",
        width: "42%",
        alignSelf: "flex-end",
        top: 20,
        right: "2%"
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



