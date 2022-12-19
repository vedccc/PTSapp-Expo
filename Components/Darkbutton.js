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

export default function App(props) {

  return (

    <TouchableOpacity onPress={props.nav} style={{
      width: Dimensions.get('window').width * 0.92,
      borderRadius: 9,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      // marginTop: 40,
      backgroundColor: "#133459",
      top: props.t,
      alignSelf: "center",
      position: props.position


    }}>
      <Text style={{ color: "white" }}>{props.value}</Text>
    </TouchableOpacity>
  );
}


