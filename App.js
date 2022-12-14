import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './Screens/MyProfile.js'
import Navigator from './Routes'
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import MeetYourConveyancer from './Screens/MeetYourConveyancer.js';
import DepositePaid from './Screens/DepositePaid.js';

export default function App() {
  return (

    <GlobalVariableProvider>
      <Navigator />
    </GlobalVariableProvider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
