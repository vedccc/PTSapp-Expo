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

  return (

    <View style={{ height: '100%', backgroundColor: 'white' }}>

      <Topbar title={"My Property Passport "} mb={40} onPress={back} />
      <View style={styles.profilecontainer}>

        <TouchableOpacity >
          <View style={styles.subprofilecontainer}>
            <Image source={require('../images/UserDefault.jpg')} style={styles.profileimg} />
            <Text style={styles.profiletitle1}>Welcome</Text>
            <Text style={styles.profiletitle2}>Vedant chellani</Text>
          </View>
        </TouchableOpacity>

      </View>
      <ScrollView style={{ height: 1500 }}>


        <View>
          <View style={styles.txt1Container} >
            <Text style={styles.txt1}>Properties i have</Text>
            <Text style={{ fontWeight: "bold" }}> Purchased</Text>
          </View>


          <MyPropertyComponent
            value={PathwayStepsScreen}
            BoxText={'Buyer Australia Avenue       Sydney Olympic Park, NSW     2127 Australia               Residential'}
          />


          <MyPropertyComponent
            BoxText={'7 George Street north    Strathfield, NSW2137       Australia  VacantLand'}
          />

          <View style={styles.txt2Container} >
            <Text style={styles.txt1}>Properties i have</Text>
            <Text style={{ fontWeight: "bold" }}> Sold</Text>
          </View>

          <MyPropertyComponent
            BoxText={'Seller Australia Avenue       Sydney Olympic Park, NSW     2127 Australia               Residential'}
          />

          <View style={styles.txt2Container} >
            <Text style={styles.txt1}>Properties i have</Text>
            <Text style={{ fontWeight: "bold" }}> Watched</Text>
          </View>

          <MyPropertyComponent
            BoxText={'BuyerAgent Australia Avenue       Sydney Olympic Park, NSW     2127 Australia               Residential'}
          />

          <MyPropertyComponent
            BoxText={'SellerAgent Australia Avenue       Sydney Olympic Park, NSW     2127 Australia               Residential'}
          />
        </View>

      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  txt1Container: {
    flexDirection: "row",
    top: 20,
    marginLeft: 23,
  },
  txt2Container: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 23,
    top: 15,
  },
  RedtxtContainer: {
    color: 'red',
    marginTop: 30,
    marginLeft: 15,
  },

  txt2: {

    color: 'red',
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

export default App;









  // *test screens *//



