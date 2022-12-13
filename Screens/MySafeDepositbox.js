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
 
 const App: () => Node = ({navigation}) => {
  const back = () => {
    navigation.push('Home')
}
   return (
 
     <View>
 
       <Topbar title={"My Safe Deposit "} mb={40} onPress={back} />
       <View style={styles.profilecontainer}>
 
       <Text style={{top:"25%",left:"4%",color:"white"}}>{` I am submitting banking details for the
 settlement of`}</Text>


       </View>
       <Text style={{marginLeft:15,marginTop:20,fontWeight:"400",fontSize:15}}>Select Property</Text>

       <View>
         <View style={styles.txt1Container} >
           <Text style={styles.txt1}>Properties i have</Text>
           <Text style={{ fontWeight: "bold" }}> Purchased</Text>
         </View>
 
         <View style={styles.RedtxtContainer} >
           <Text style={styles.txt2}>No Properties Found</Text>
         </View>
 
         <View style={styles.txt1Container} >
           <Text style={styles.txt1}>Properties i have</Text>
           <Text style={{ fontWeight: "bold" }}> Sold</Text>
         </View>
 
         <View style={styles.RedtxtContainer} >
           <Text style={styles.txt2}>No Properties Found</Text>
         </View>
 
         
 
         
       </View>
 
     </View>
 
   );
 };
 
 const styles = StyleSheet.create({
   txt1Container: {
     flexDirection: "row",
     marginTop: 20,
     marginLeft:15
   },
   RedtxtContainer: {
     color: 'red',
     marginTop: 20,
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
 
 
 
 