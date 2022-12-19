import React from 'react';
import type { Node } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Topbar from '../Components/Topbar.js'

const PathwaySteps = ({ navigation }) => {

    const back = () => {
        navigation.push('Myproperty')
    }

    const Propertyoffer = () => {
        navigation.push('PropertyUnderOffer')
    }

    const MeetYourConveyancer = () => {
        navigation.push('MeetYourConveyancer')
    }

    const DepositePaid = () => {
        navigation.push('DepositePaid')
    }

    const InitialDocumentsSigned = () => {
        navigation.push('InitialDocumentsSigned')
    }

    const PurchaseUnconditional = () => {
        navigation.push('PurchaseUnconditional')
    }

    const UnconditionalDocumentsSigned = () => {
        navigation.push('UnconditionalDocumentsSigned')
    }

    const SettlementBooking = () => {
        navigation.push('SettlementBooking')
    }

    const SettlementEffected = () => {
        navigation.push('SettlementEffected')
    }

    return (
        <View style={{ height: '100%', backgroundColor: 'white' }}>

            <Topbar title={"Pathway Steps"} mb={40} t={9} onPress={back} />
            <View style={styles.profilecontainer}>
                <TouchableOpacity>
                    <View style={styles.subprofilecontainer}>
                        <Image source={require('../images/UserDefault.jpg')} style={styles.profileimg} />
                        <Text style={styles.profiletitle1}>Welcome</Text>
                        <Text style={styles.profiletitle2}>Varun Verma</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "#83bad3" }}>
                    <View style={styles.subprofilecontainer1}>
                        <Image source={require('../images/UserDefault.jpg')} style={styles.profileimg1} />
                        <Text style={styles.profiletitle3}>Conveyancer</Text>
                        <Text style={styles.profiletitle4}>eSurabh Sh...</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={styles.pinkcontainer}>
                    <View style={{ left: 10, }}>
                        <View style={{ flexDirection: 'row', top: 23, }}>
                            <Text style={{ fontSize: 17 }}>i have </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
                                Purchased
                            </Text>
                        </View>
                        <Text style={{ top: 32, width: 350, fontSize: 17 }}>buyer Australia Avenue Sydney Olympic Park, NSW 2127 Australia  {"\n"} {"\n"}Residential</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: '#a5aeb5', margin: 11.5, height: 16 }}></View>

                <View style={{ height: 140, top: 5, backgroundColor: 'white', marginBottom: 10 }}>
                    <TouchableOpacity onPress={Propertyoffer}>
                        <View style={{ backgroundColor: '#80bdd2', right: 10, width: 100, borderRadius: 8, height: 23, justifyContent: 'center', alignSelf: 'flex-end' }}>
                            <Text style={{ alignSelf: 'center', fontSize: 11 }}>IN PROGRESS</Text>
                        </View>
                        <Text style={{ alignSelf: 'flex-end', right: 10, top: 10, fontSize: 16 }}>Property Under offer</Text>
                        <Text style={{ alignSelf: 'flex-end', top: 15, right: 10, fontSize: 13 }}>Congratulations! Your offer has </Text>
                        <Text style={{ alignSelf: 'flex-end', right: 15, top: 15, fontSize: 13 }}>been accepted</Text>
                        <Image source={require('../images/300Dark.jpeg')} style={{ height: 110, width: 150, resizeMode: 'stretch', position: 'absolute', left: 15, top: 5 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 140, top: 5, backgroundColor: 'white', marginBottom: 10 }}>
                    <TouchableOpacity onPress={MeetYourConveyancer}>
                        <View style={{ backgroundColor: '#80bdd2', right: 10, width: 100, borderRadius: 8, height: 23, justifyContent: 'center', alignSelf: 'flex-end' }}>
                            <Text style={{ alignSelf: 'center', fontSize: 11 }}>IN PROGRESS</Text>
                        </View>
                        <Text style={{ alignSelf: 'flex-end', right: 10, top: 10, fontSize: 16 }}>Meet Your Conveyancer</Text>
                        <Text style={{ alignSelf: 'flex-end', top: 15, right: 10, fontSize: 13 }}>Thank you! We have recieved</Text>
                        <Text style={{ alignSelf: 'flex-end', right: 10, top: 15, fontSize: 13 }}>your Contract of Sale</Text>
                        <Image source={require('../images/110Dark.jpeg')} style={{ height: 110, width: 150, resizeMode: 'stretch', position: 'absolute', left: 15, top: 5 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 140, top: 5, backgroundColor: 'white', marginBottom: 10 }}>
                    <TouchableOpacity onPress={DepositePaid}>
                        <View style={{ backgroundColor: '#80bdd2', right: 10, width: 100, borderRadius: 8, height: 23, justifyContent: 'center', alignSelf: 'flex-end' }}>
                            <Text style={{ alignSelf: 'center', fontSize: 11 }}>IN PROGRESS</Text>
                        </View>
                        <Text style={{ alignSelf: 'flex-end', right: 10, top: 10, fontSize: 16 }}>Deposit Paid</Text>
                        <Text style={{ alignSelf: 'flex-end', right: 10, top: 15, fontSize: 13 }}>Your Deposite is outstanding</Text>

                        <Image source={require('../images/310Dark.jpeg')} style={{ height: 110, width: 150, resizeMode: 'stretch', position: 'absolute', left: 15, top: 5 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 140, top: 5, backgroundColor: 'white', marginBottom: 10 }}>
                    <TouchableOpacity onPress={InitialDocumentsSigned}>
                        <View style={{ backgroundColor: '#80bdd2', right: 10, width: 100, borderRadius: 8, height: 23, justifyContent: 'center', alignSelf: 'flex-end' }}>
                            <Text style={{ alignSelf: 'center', fontSize: 11 }}>IN PROGRESS</Text>
                        </View>
                        <Text style={{ alignSelf: 'flex-end', right: 10, top: 10, fontSize: 16 }}>Initial Documents Signed</Text>
                        <Text style={{ alignSelf: 'flex-end', right: 10, top: 15, fontSize: 13 }}>Your initial documents have not</Text>
                        <Text style={{ alignSelf: 'flex-end', right: 11, top: 15, fontSize: 13 }}>yet been signed</Text>
                        <Image source={require('../images/340Dark.jpeg')} style={{ height: 110, width: 150, resizeMode: 'stretch', position: 'absolute', left: 15, top: 5 }} />
                    </TouchableOpacity>
                </View>


                <View style={{ height: 140, top: 5, backgroundColor: 'white', marginBottom: 10 }}>
                    <TouchableOpacity onPress={PurchaseUnconditional}>
                        <View style={{ backgroundColor: '#80bdd2', right: 10, width: 100, borderRadius: 8, height: 23, justifyContent: 'center', alignSelf: 'flex-end' }}>
                            <Text style={{ alignSelf: 'center', fontSize: 11 }}>IN PROGRESS</Text>
                        </View>
                        <Text style={{ alignSelf: 'flex-end', right: 10, top: 10, fontSize: 16 }}>Purchase Unconditional</Text>
                        <Text style={{ alignSelf: 'flex-end', right: 10, top: 15, fontSize: 13 }}>Your purchase is not yet</Text>
                        <Text style={{ alignSelf: 'flex-end', right: 11, top: 15, fontSize: 13 }}>unconditional</Text>
                        <Image source={require('../images/160Dark.jpeg')} style={{ height: 110, width: 150, resizeMode: 'stretch', position: 'absolute', left: 15, top: 5 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 140, top: 5, backgroundColor: 'white', marginBottom: 10 }}>
                    <TouchableOpacity onPress={UnconditionalDocumentsSigned}>
                        <View style={{ backgroundColor: '#80bdd2', right: 10, width: 100, borderRadius: 8, height: 23, justifyContent: 'center', alignSelf: 'flex-end' }}>
                            <Text style={{ alignSelf: 'center', fontSize: 11 }}>IN PROGRESS</Text>
                        </View>
                        <Text style={{ alignSelf: 'flex-end', right: 5, top: 10, fontSize: 16 }}>   Unconditional Documents {"\n"}                                     Signed</Text>
                        <Text style={{ alignSelf: 'flex-end', right: 13, top: 15, fontSize: 13 }}>Your unconditional documents</Text>
                        <Text style={{ alignSelf: 'flex-end', right: 15, top: 15, fontSize: 13 }}>have not been signed</Text>
                        <Image source={require('../images/340Dark.jpeg')} style={{ height: 110, width: 150, resizeMode: 'stretch', position: 'absolute', left: 15, top: 5 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 140, top: 5, backgroundColor: 'white', marginBottom: 10 }}>
                    <TouchableOpacity onPress={SettlementBooking}>
                        <View style={{ backgroundColor: '#80bdd2', right: 10, width: 100, borderRadius: 8, height: 23, justifyContent: 'center', alignSelf: 'flex-end' }}>
                            <Text style={{ alignSelf: 'center', fontSize: 11 }}>IN PROGRESS</Text>
                        </View>
                        <Text style={{ alignSelf: 'flex-end', right: 10, top: 10, fontSize: 16 }}>Settlement Booking</Text>
                        <Text style={{ alignSelf: 'flex-end', right: 10, top: 15, fontSize: 13 }}> Settlement is coming up soon! </Text>

                        <Image source={require('../images/220Dark.jpeg')} style={{ height: 110, width: 150, resizeMode: 'stretch', position: 'absolute', left: 15, top: 5 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 140, top: 5, backgroundColor: 'white', marginBottom: 10 }}>
                    <TouchableOpacity onPress={SettlementEffected}>
                        <View style={{ backgroundColor: '#80bdd2', right: 10, width: 100, borderRadius: 8, height: 23, justifyContent: 'center', alignSelf: 'flex-end' }}>
                            <Text style={{ alignSelf: 'center', fontSize: 11 }}>IN PROGRESS</Text>
                        </View>
                        <Text style={{ alignSelf: 'flex-end', right: 10, top: 10, fontSize: 16 }}>Settlement Effected</Text>
                        <Text style={{ alignSelf: 'flex-end', right: 10, top: 15, fontSize: 13 }}>Settlement is not completed yet</Text>
                        <Image source={require('../images/230Dark.jpeg')} style={{ height: 110, width: 150, resizeMode: 'stretch', position: 'absolute', left: 15, top: 5 }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};



const styles = StyleSheet.create({
    PinkText1: { fontSize: 15 },
    profilecontainer: {
        backgroundColor: "#133459",
        height: 90,
        flexDirection: 'row',
    },

    subprofilecontainer: {
        width: 200,
        height: 60,
        left: 20,
        top: 12
    },
    subprofilecontainer1: {
        width: 200,
        height: 60,
        flexDirection: 'row-reverse',
        top: 12,
    },
    profileimg: {
        resizeMode: 'stretch',
        height: 50,
        width: 50,
        borderRadius: 40,
        position: "absolute",
        top: 5
    },
    profileimg1: {
        resizeMode: 'stretch',
        height: 50,
        width: 50,
        borderRadius: 40,
        position: "absolute",
        right: 130,
        top: 5
    },

    profiletitle1: {
        alignSelf: "center",
        fontSize: 13,
        position: "absolute",
        right: 85,
        top: 12,
        color: "#E0E0E0"
    },

    profiletitle2: {
        left: 56,
        fontSize: 16,
        right: 85,
        top: 30,
        color: "white"
    },

    profiletitle3: {
        alignSelf: "center",
        fontSize: 13,
        position: "absolute",
        paddingHorizontal: 100,
        top: 12,
        color: "#E0E0E0"
    },

    profiletitle4: {
        left: 56,
        fontSize: 16,
        right: 85,
        top: 30,
        paddingHorizontal: 29,
        color: "white"
    },

    pinkcontainer: {
        height: 150,
        backgroundColor: "#f2c8e0",

    },


});


export default PathwaySteps;













