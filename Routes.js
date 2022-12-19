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
import PathwaySteps from './Screens/PathwaySteps.js';
import PropertyUnderOffer from './Screens/PropertyUnderOffer.js';
import MeetYourConveyancer from './Screens/MeetYourConveyancer.js';
import DepositePaid from './Screens/DepositePaid.js';
import InitialDocumentsSigned from './Screens/InitialDocumentsSigned.js';
import PurchaseUnconditional from './Screens/PurchaseUnconditional.js';
import UnconditionalDocumentsSigned from './Screens/UnconditionalSigned.js';
import SettlementBooking from './Screens/SettlementBooking.js';
import SettlementEffected from './Screens/SettlementEffected.js';
import MyDocumentManagement from './Screens/MyDocumentManagement.js';

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
  DepositePaid: {
    screen: DepositePaid,
    navigationOptions: {
      header: null,
    }
  },
  PathwaySteps: {
    screen: PathwaySteps,
    navigationOptions: {
      header: null,
    }
  },
  PropertyUnderOffer: {
    screen: PropertyUnderOffer,
    navigationOptions: {
      header: null,
    }
  },
  MeetYourConveyancer: {
    screen: MeetYourConveyancer,
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
  InitialDocumentsSigned: {
    screen: InitialDocumentsSigned,
    navigationOptions: {
      header: null,
    }
  },
  PurchaseUnconditional: {
    screen: PurchaseUnconditional,
    navigationOptions: {
      header: null,
    }
  },
  UnconditionalDocumentsSigned: {
    screen: UnconditionalDocumentsSigned,
    navigationOptions: {
      header: null,
    }
  },
  SettlementBooking: {
    screen: SettlementBooking,
    navigationOptions: {
      header: null,
    }
  },
  SettlementEffected: {
    screen: SettlementEffected,
    navigationOptions: {
      header: null,
    }
  },
  MyDocumentManagement: {
    screen: MyDocumentManagement,
    navigationOptions: {
      header: null,
    }
  },
};

// home stack navigator screens
const Routes = createStackNavigator(screens);

export default createAppContainer(Routes);

