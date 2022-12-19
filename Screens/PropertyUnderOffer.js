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
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
import MyPropertyComponent from '../Components/MyPropertyPassport.js';
import PathwaySteps from './PathwaySteps.js';

const PropertyUnderOffer = ({ navigation }) => {

    const back = () => {
        navigation.push('PathwaySteps')
    }

    const PathwayStepsScreen = () => {
        navigation.push('PathwaySteps')
    }

    return (

        <View style={{ height: '100%', backgroundColor: 'white' }}>

            <Topbar title={"Property Under Offer"} mb={40} t={9} onPress={back} />
            <View style={styles.profilecontainer}>

                <TouchableOpacity >
                    <View style={styles.subprofilecontainer}>
                        <Image source={require('../images/UserDefault.jpg')} style={styles.profileimg} />
                        <Text style={styles.profiletitle1}>Varun Verma</Text>
                        <Text style={styles.profiletitle2}>You are on your pathway to the purchase of</Text>
                        <Text style={{ left: 180, color: 'white', fontSize: 13, width: 160, top: 10 }}>Buyer Australia Avenue  Sydney Olympic Park, NSW 2127 Australia</Text>
                    </View>
                </TouchableOpacity>

                <Image source={require('../images/300NEW.jpeg')} style={{ height: 290, left: 23, width: 320, resizeMode: 'stretch', top: 110 }} />
                <View style={{ backgroundColor: '#80bdd2', right: 23, width: 100, borderRadius: 8, height: 23, justifyContent: 'center', alignSelf: 'flex-end', top: 116, position: 'absolute' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 11 }}>IN PROGRESS</Text>
                </View>
                <Text style={{ color: 'black', fontSize: 23, top: 100, width: 290, left: 55, color: '#606060' }}>Congratulations! Your offer </Text>
                <Text style={{ color: 'black', fontSize: 23, top: 100, width: 270, left: 100, color: '#606060' }}>has been accepted.</Text>
                <Text style={{ color: 'black', fontSize: 13, top: 110, marginHorizontal: 10, color: '#606060' }}>Congratulations on your offer being accepted. There are a few condition that need to be met before we officially say that the property is sold (such as finance approval). Please keep us updated as to the progress of these conditions.</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    profilecontainer: {
        backgroundColor: "#133459",
        height: 105,
        justifyContent: "flex-start"
    },

    subprofilecontainer: {
        width: 180,
        height: 90,
        position: "absolute",
        left: 20, top: 15,

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
        right: 45,
        top: 5,
        color: "white"
    },

    profiletitle2: {
        alignSelf: "flex-end",
        fontSize: 11,
        width: 110,
        position: "absolute",
        top: 23,
        right: 10,
        color: "#F0F0F0"
    }
})

export default PropertyUnderOffer;