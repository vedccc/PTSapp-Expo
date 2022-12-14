import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './Screens/Home'
import Navigator from './Routes'
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import MeetYourConveyancer from './Screens/MeetYourConveyancer.js';
import DepositePaid from './Screens/DepositePaid.js';

export default function App() {
  return (

<<<<<<< HEAD
=======
    // <Profile />
>>>>>>> cdd8ba5cb1ca8f61a6fcccf8ead206e0fd3fad5a
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
