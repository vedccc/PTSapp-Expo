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

import Icon from 'react-native-vector-icons/EvilIcons'
import Iconfa from 'react-native-vector-icons/FontAwesome'


import Topbar from '../Components/Topbar.js'
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */



const App: () => Node = ({navigation}) => {

    const back = () => {
        navigation.push('Home')
    }


    return (


        <View>




            <Topbar title={"Glossary"} mb={40} onPress={back}/>
            <View style={{ backgroundColor: "#133459", height: 140, justifyContent: "flex-start", justifyContent: "center" }}>

                <Image source={require('../images/Artboard4.png')} style={{ resizeMode: 'stretch', height: 100, width: 100, position: "absolute", top: 5, left: 20 }} />
                <View style={{ alignSelf: "flex-end", width: "60%", height: "80%", }}>
                    <Text style={{ fontFamily: 'MontserratRegular', fontSize: 14, textAlign: 'justify', color: "#ffffff" }}>
                        {
                            `This  list  explains  any  words  or 
document  names  you encounter 
during   the   property   settlement 
process that may be unfamiliar to 
you.`
                        }
                    </Text>
                </View>

            </View>
            <View style={{

                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('window').width * 0.92,
                alignSelf: "center",
                elevation: 5,
                borderRadius: 5,
                backgroundColor: "white",
                height: 50,
                top: 20
            }}>
                <Icon style={{ padding: 10, backgroundColor: "white", color: "grey" }} name="search" size={20} color="#000" />
                <TextInput
                    style={{
                        flex: 1,
                        paddingTop: 10,
                        paddingRight: 10,
                        paddingBottom: 10,
                        paddingLeft: 0,
                        backgroundColor: 'white',
                        color: '#424242',
                        height: 40
                    }}
                    placeholder="Search for..."
                    onChangeText={(searchString) => { this.setState({ searchString }) }}
                    underlineColorAndroid="transparent"
                />
            </View>


            <View style={{

                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('window').width * 0.92,
                alignSelf: "center",
                elevation: 5,

                backgroundColor: "red",
                height: 50,
                top: 20
            }}>

            </View>



        </View >

    );
};



export default App;












