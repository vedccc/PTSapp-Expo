import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Welcomescreen from './Screens/Welcomescreen.js'
import NewUserInvite from './Screens/NewUserInvite-screen1'
import Signupscreen from './Screens/Signupscreen.js'
import Signupscreen1 from './Screens/Signupscreen.js'
import Loginscreen from './Screens/Loginscreen.js'
import Resetpassword from './Screens/Forgotpassword-screen'
import Home from './Screens/Home'
import Currentsettlement from './Screens/Currentsettlement';
import Glossary from './Screens/Glossaryscreen';
import Myproperty from './Screens/Mypropertypassportscreen'
import Deposit from './Screens/MySafeDepositbox'

// const Drawer = createDrawerNavigator();
// const NavigationDrawer = () => (
//   <Drawer.Navigator drawerContent={(props) => <Deposit {...props} />}>
//     <Drawer.Screen name="HomeScreen" component={HomeScreen} />
//   </Drawer.Navigator>
// );

const screens = {

  Welcome: {
    screen: Welcomescreen,
    navigationOptions: {
      header: null,
    }
  },
  Create: {
    screen: Signupscreen,
    navigationOptions: {
      header: null,
    }
  },

  Resetpassword: {
    screen: Resetpassword,
    navigationOptions: {
      header: null,
    }
  },

  Login: {
    screen: Loginscreen,
    navigationOptions: {
      header: null,
    }
  },

  NewUserInvite: {
    screen: NewUserInvite,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  Currentsettlement: {
    screen: Currentsettlement,
    navigationOptions: {
      header: null,
    }
  },

  Glossary: {
    screen: Glossary,
    navigationOptions: {
      header: null,
    }
  },

  Myproperty: {
    screen: Myproperty,
    navigationOptions: {
      header: null,
    }
  },

  Deposit: {
    screen: Deposit,
    navigationOptions: {
      header: null,
    }
  },
};

// home stack navigator screens
const Routes = createStackNavigator(screens);

export default createAppContainer(Routes);

