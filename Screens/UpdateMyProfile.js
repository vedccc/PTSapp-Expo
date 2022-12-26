import React from 'react';
import type { Node } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons, Icon, FontAwesome, AntDesign } from 'react-native-vector-icons';
import Topbar from '../Components/Topbar.js'

const UpdateMyProfile = () => {

    const MyProfile = () => {
        navigation.push('MyProfile')
    }

    return (
        <View style={{ height: '100%' }}>
            <Topbar title={'Update My Profile'} t={9} onPress={MyProfile} />

            <ScrollView>
                <View>
                    <TouchableOpacity><View style={{ backgroundColor: '#ebedf4', height: 200, width: 195, alignSelf: 'center', top: 23, borderRadius: 100 }}></View>
                        <MaterialCommunityIcons name='camera-plus' size={60} style={{ color: '#a5aeb5', left: 91, bottom: 40, width: Dimensions.get('window').width * 0.15, }} />
                        <Text style={{ alignSelf: 'center', bottom: 20, color: '#a5aeb5', fontSize: 15.5, }}>Replace Profile Image</Text></TouchableOpacity>
                </View>


                <View>
                    <Text style={{ left: 16, color: '#a5aeb5' }}>First Name</Text>
                    <TextInput
                        style={styles.inputContainer}
                        placeholder="Enter first name..."

                    />

                </View>

                <View>
                    <Text style={{ left: 16, color: '#a5aeb5' }}>Middle Name</Text>
                    <TextInput
                        style={styles.inputContainer}
                        placeholder="Enter middle name..."

                    />

                </View>

                <View>
                    <Text style={{ left: 16, color: '#a5aeb5' }}>Last Name</Text>
                    <TextInput
                        style={styles.inputContainer}
                        placeholder="Enter last name..."

                    />

                </View>

                <View>
                    <Text style={{ left: 16, color: '#a5aeb5' }}>Phone Number</Text>
                    <TextInput
                        style={styles.inputContainer}
                        placeholder="Enter phone number..."

                    />

                </View>



                <TouchableOpacity style={{
                    top: 23,
                    width: Dimensions.get('window').width * 0.92,
                    borderRadius: 9,
                    height: 45,
                    alignItems: "center",
                    justifyContent: "center",
                    // marginTop: 40,
                    backgroundColor: "#16355a",
                    alignSelf: "center",
                    // position: props.position
                    marginBottom: 30,
                    flexDirection: "row"
                }}>
                    <FontAwesome name='user' size={24} style={{ color: 'white', right: 10 }} />

                    <Text style={{ color: "white", fontSize: 15, fontWeight: "500", }}>UPDATE  PROFILE</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.055,
        left: 15,
        borderRadius: 10,
        top: 9,
        borderColor: '#a5aeb5',
        borderWidth: 0.4,
        marginBottom: 15,
        paddingLeft: 10
    },
    Textal: {
        color: 'red',
        top: -10, left: 15
    }
})

export default UpdateMyProfile;