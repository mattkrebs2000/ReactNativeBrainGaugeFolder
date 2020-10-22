import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "./src/context";
import {
  SignIn,
  CreateAccount,
  Search,
  Home,
  Details,
  Search2,
  Profile,
  Splash
} from "./src/Screens";

const headerStyle = {
  backgroundColor: "black",
};

const headerTitleStyle = {
  color: "white",
}


const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{
        title: "Create Account", headerStyle,
        headerTitleStyle,}}
    />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Search" component={SearchStackScreen} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};



















// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Ionicons } from '@expo/vector-icons';

// import ContactsList from '../screens/ContactsList';
// import ContactDetails from '../screens/ContactDetails';
// import ActionsList from '../screens/ActionsList';
// import ActionDetails from '../screens/ActionDetails';
// import Settings from '../screens/Settings';
// import SignIn from '../screens/SignIn';
// import SignUp from '../screens/SignUp';
// import Loading from '../screens/Loading';

// import Home from "./src / components / Home.js";
// import SignIn from "./src/components/SignIn.js";
// import SignUp from "./src/components/SignUp.js";
// import Welcome from "./src/components/Welcome.js";

// const ContactsStack = createStackNavigator();
// const ContactsStackScreen = () => (
//   <ContactsStack.Navigator>
//     <ContactsStack.Screen
//       name="ContactsList"
//       component={ContactsList}
//       options={{
//         headerTitle: 'Contacts',
//       }}
//     />
//     <ContactsStack.Screen
//       name="ContactDetails"
//       component={ContactDetails}
//       options={({ route }) => {
//         return {
//           headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
//         };
//       }}
//     />
//   </ContactsStack.Navigator>
// );

// const ActionsStack = createStackNavigator();
// const ActionsStackScreen = () => (
//   <ActionsStack.Navigator>
//     <ActionsStack.Screen name="ActionsList" component={ActionsList} />
//     <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
//   </ActionsStack.Navigator>
// );

// const AppTabs = createBottomTabNavigator();
// const AppTabsScreen = () => (
//   <AppTabs.Navigator>
//     <AppTabs.Screen
//       name="Contacts"
//       component={ContactsStackScreen}
//       options={{
//         tabBarIcon: props => (
//           <Ionicons name="ios-contacts" size={props.size} color={props.color} />
//         ),
//       }}
//     />
//     <AppTabs.Screen
//       name="Actions"
//       component={ActionsStackScreen}
//       options={{
//         tabBarIcon: props => (
//           <Ionicons
//             name="ios-checkmark-circle-outline"
//             size={props.size}
//             color={props.color}
//           />
//         ),
//       }}
//     />
//   </AppTabs.Navigator>
// );

// const AppDrawer = createDrawerNavigator();
// const AppDrawerScreen = () => (
//   <AppDrawer.Navigator drawerPosition="right">
//     <AppDrawer.Screen
//       name="Tabs"
//       component={AppTabsScreen}
//       options={{ drawerLabel: 'Home' }}
//     />
//     <AppDrawer.Screen
//       name="Settings"
//       component={Settings}
//       options={{
//         gestureEnabled: false,
//       }}
//     />
//   </AppDrawer.Navigator>
// );

// const AuthStack = createStackNavigator();
// const AuthStackScreen = () => (
//   <AuthStack.Navigator>
//     <AuthStack.Screen name="SignIn" component={SignIn} />
//     <AuthStack.Screen name="SignUp" component={SignUp} />
//   </AuthStack.Navigator>
// );

// export default () => {
//   const [isLoading, setIsLoading] = React.useState(true);
//   const [user, setUser] = React.useState(null);

//   React.useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(!isLoading);
//       setUser({});
//     }, 500);
//   }, []);

//   return (
//     <NavigationContainer>
//       {isLoading ? (
//         <Loading />
//       ) : user ? (
//         <AppDrawerScreen />
//       ) : (
//             <AuthStackScreen />
//           )}
//     </NavigationContainer>
//   );
// };




























































































































// import * as React from 'react';
// import { AsyncStorage, Button, Text, TextInput, View, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from "./src/components/Home.js";
// import SignIn from "./src/components/SignIn.js";
// import SignUp from "./src/components/SignUp.js";


// const AuthContext = React.createContext();

// const headerStyle = {
//   backgroundColor: "black",
// };

// const headerTitleStyle = {
//   color: "white",
// }

// function SplashScreen() {
//   return (
//     <View>
//       <Text>Loading...</Text>
//     </View>
//   );
// }

// function HomeScreen() {
//   const { signOut } = React.useContext(AuthContext);

//   return (
    
//     <View style={styles.container} >
// <Home  />
//     </View>

//     // <View>
     
//     //   <Button title="Sign out" onPress={signOut} />
//     // </View>


//   );
// }

// function SignInScreen() {
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   const { signIn } = React.useContext(AuthContext);

//   return (
//     <View style={styles.container} >
// <SignUp />
// </View>




//     // <View>
//     //   <TextInput
//     //     placeholder="Username"
//     //     value={username}
//     //     onChangeText={setUsername}
//     //   />
//     //   <TextInput
//     //     placeholder="Password"
//     //     value={password}
//     //     onChangeText={setPassword}
//     //     secureTextEntry
//     //   />
//     //   <Button title="Sign in" onPress={() => signIn({ username, password })} />
//     // </View>
//   );
// }




// const Stack = createStackNavigator();

// export default function App({ navigation }) {
//   const [state, dispatch] = React.useReducer(
//     (prevState, action) => {
//       switch (action.type) {
//         case 'RESTORE_TOKEN':
//           return {
//             ...prevState,
//             userToken: action.token,
//             isLoading: false,
//           };
//         case 'SIGN_IN':
//           return {
//             ...prevState,
//             isSignout: false,
//             userToken: action.token,
//           };
//         case 'SIGN_OUT':
//           return {
//             ...prevState,
//             isSignout: true,
//             userToken: null,
//           };
//       }
//     },
//     {
//       isLoading: true,
//       isSignout: false,
//       userToken: null,
//     }
//   );

//   React.useEffect(() => {
//     // Fetch the token from storage then navigate to our appropriate place
//     const bootstrapAsync = async () => {
//       let userToken;

//       try {
//         userToken = await AsyncStorage.getItem('userToken');
//       } catch (e) {
//         // Restoring token failed
//       }

//       // After restoring token, we may need to validate it in production apps

//       // This will switch to the App screen or Auth screen and this loading
//       // screen will be unmounted and thrown away.
//       dispatch({ type: 'RESTORE_TOKEN', token: userToken });
//     };

//     bootstrapAsync();
//   }, []);

//   const authContext = React.useMemo(
//     () => ({
//       signIn: async data => {
//         // In a production app, we need to send some data (usually username, password) to server and get a token
//         // We will also need to handle errors if sign in failed
//         // After getting token, we need to persist the token using `AsyncStorage`
//         // In the example, we'll use a dummy token

//         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//       },
//       signOut: () => dispatch({ type: 'SIGN_OUT' }),
//       signUp: async data => {
//         // In a production app, we need to send user data to server and get a token
//         // We will also need to handle errors if sign up failed
//         // After getting token, we need to persist the token using `AsyncStorage`
//         // In the example, we'll use a dummy token

//         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//       },
//     }),
//     []
//   );

//   return (
//     <AuthContext.Provider value={authContext}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           {state.isLoading ? (
//             // We haven't finished checking for the token yet
//             <Stack.Screen name="Splash" component={SplashScreen} />
//           ) : state.userToken == null ? (
//             // No token found, user isn't signed in
//             <Stack.Screen
//               name="SignIn"
//               component={SignInScreen}
//               options={{
//                 title: 'Sign in', headerStyle, headerTitleStyle,
//                 // When logging out, a pop animation feels intuitive
//                 animationTypeForReplace: state.isSignout ? 'pop' : 'push',
//               }}
//             />
//           ) : (
//                 // User is signed in
//                 <Stack.Screen name="Home" component={HomeScreen} />
//               )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     color: "white",
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
