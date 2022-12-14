import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './Screens/Home'
import Navigator from './Routes'
import { GlobalVariableProvider } from './config/GlobalVariableContext';
export default function App() {
  return (

    // <Profile />
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
