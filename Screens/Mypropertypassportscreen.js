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
import * as GlobalVariables from '../config/GlobalVariableContext';
import Icon from 'react-native-vector-icons/AntDesign'
import Iconfa from 'react-native-vector-icons/FontAwesome'

import Topbar from '../Components/Topbar.js'
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
import MyPropertyComponent from '../Components/MyPropertyPassport.js';
import PathwaySteps from './PathwaySteps.js';

const App: () => Node = ({ navigation }) => {

  const back = () => {
    navigation.push('Home')
  }

  const PathwayStepsScreen = () => {
    navigation.push('PathwaySteps')
  }
  const Constants = GlobalVariables.useValues();

  return (

    <View style={{ height: '100%', backgroundColor: 'white' }}>

      <Topbar title={"My Property Passport "} mb={40} t={9} onPress={back} />


      <ScrollView>
        <View style={styles.profilecontainer}>
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

        </View>

        <View>
          <View style={styles.txt1Container} >
            <Text style={styles.txt1}>Properties i have <Text style={{ fontWeight: "bold" }}> Purchased</Text></Text>
          </View>

          <MyPropertyComponent
            left={15}
            w={Dimensions.get('window').width * 0.92}
            value={PathwayStepsScreen}
            BoxText={`Buyer Australia Avenue Sydney Olympic Park, NSW 2127 
Australia
Residential`}
          />

          <MyPropertyComponent
            left={15}
            w={Dimensions.get('window').width * 0.92}
            BoxText={`7 George Street north 
Strathfield, NSW 2137 Australia 
VacantLand`}
          />
        </View>


        <View>
          <View style={styles.txt2Container} >
            <Text style={styles.txt1}>Properties i have <Text style={{ fontWeight: "bold" }}>sold</Text></Text>
          </View>

          <MyPropertyComponent
            left={15}
            w={Dimensions.get('window').width * 0.92}
            BoxText={`Seller Australia Avenue Sydney Olympic Park, NSW 2127 
Australia 
Residential`}
          />
        </View>


        <View>
          <View style={styles.txt3Container} >
            <Text style={styles.txt1}>Properties i have <Text style={{ fontWeight: "bold" }}>Watched</Text></Text>
          </View>
          <MyPropertyComponent
            left={15}
            w={Dimensions.get('window').width * 0.92}
            BoxText={`BuyerAgent Australia Avenue Sydney Olympic Park, NSW 
2127 Australia
Residential`}
          />

          <MyPropertyComponent
            left={15}
            w={Dimensions.get('window').width * 0.92}
            BoxText={`SellerAgent Australia Avenue       Sydney Olympic Park, NSW 
2127 Australia  
Residential`}
          />
        </View>
      </ScrollView >
    </View >

  );
};

const styles = StyleSheet.create({

  txt1Container: {
    top: 15,
    left: 20,
    marginBottom: 30,

  },
  txt2Container: {
    left: 17,
    marginBottom: 30,
  },
  txt3Container: {
    left: 20,
    marginBottom: 30,
  },

  profilecontainer: {
    backgroundColor: "#133459",

    justifyContent: "flex-start",

    height: 80,
    flexDirection: "row"

  },

  subprofilecontainer: {
    width: 180,
    height: 60,
    position: "absolute",
    left: 20, top: 12
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

  }

})

export default App;



