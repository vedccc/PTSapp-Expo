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

        <View style={{ alignSelf: "center", top: props.top, position: props.position, marginBottom: props.mb, marginTop: props.mt }}>
            <Text style={{ marginBottom: 8, fontSize: 17, color: "#133459", fontWeight: "500" }}>{props.value}</Text>
            <TextInput
                placeholder={props.holder}
                style={{ height: 35, width: Dimensions.get('window').width * 0.92, borderWidth: 1.6, borderRadius: 6, borderColor: "#eaedf2" }}
            />
        </View>
    );
}


