// import React, { useState } from "react";

// import { Button } from "react-native";

// import { NavigationContainer, DrawerActions } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// import emailContext from "./emailContext";
// // import { AuthContext } from "./context";
// import Home from "./components/Home";
// import SignIn from "./components/SignIn";
// import CreateAccount from "./components/SignUp";
// import Mood from "./components/Mood";
// import Appetite from "./components/Hunger";
// import Sleep from "./components/Sleep";
// import Exercise from "./components/Exercise";
// import Profile from "./components/Welcome";
// import Splash from "./components/Home";
// import Braingauge from "./Braingauge";

// import Icon from "react-native-vector-icons/Ionicons";

// import { withTheme } from "react-native-elements";

// const headerStyle = {
//   backgroundColor: "black",
// };

// const headerTitleStyle = {
//   color: "white",
// };

// export const Navigators = ({ navigation }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   // const [userToken, setUserToken] = useState(null);
//   const [emailGlobal, setEmailGlobal] = useState("");

//   const setEmailFunction = (email) => setEmailGlobal(email);

//   const AuthStack = createStackNavigator();
//   const AuthStackScreen = ({ navigation }) => (
//     <AuthStack.Navigator>
//       <AuthStack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           title: "Home",
//           headerStyle,
//           headerTitleStyle,
//         }}
//       />

//       <AuthStack.Screen
//         name="SignIn"
//         component={SignIn}
//         options={{
//           title: "Sign In",
//           headerStyle,
//           headerTitleStyle,
//         }}
//       />
//       <AuthStack.Screen
//         name="CreateAccount"
//         component={CreateAccount}
//         options={{
//           title: "Create Account",
//           headerStyle,
//           headerTitleStyle,
//         }}
//       />
//       <AuthStack.Screen
//         name="Profile"
//         component={DrawerScreen}
//         options={{
//           title: "Welcome",
//           headerStyle,
//           headerTitleStyle,
//           headerLeft: () => (
//             <Button
//               onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
//               title="Results Drawer"
//             />
//           ),
//         }}
//       />
//       <AuthStack.Screen
//         name="BrainGauge"
//         component={Braingauge}
//         options={{
//           title: "Survey",
//           headerStyle,
//           headerTitleStyle,
//         }}
//       />
//     </AuthStack.Navigator>
//   );

//   const Tabs = createBottomTabNavigator();

//   const Drawer = createDrawerNavigator();
//   const DrawerScreen = () => (
//     <Drawer.Navigator
//       drawerStyle={{
//         backgroundColor: "black",
//         width: 240,
//         opacity: 0.95,
//       }}
//       drawerContentOptions={{
//         inactiveTintColor: "white",
//         activeTintColor: "#167bff",
//         itemStyle: { marginVertical: 30 },
//       }}
//     >
//       <Drawer.Screen name="Return" component={Profile} />
//       <Drawer.Screen name="Mood" component={Mood} />
//       <Drawer.Screen name="Appetite" component={Appetite} />
//       <Drawer.Screen name="Exercise" component={Exercise} />
//       <Drawer.Screen name="Sleep" component={Sleep} />
//     </Drawer.Navigator>
//   );

//   const ProfileStack = createStackNavigator();
//   const ProfileStackScreen = ({ navigation }) => (
//     <ProfileStack.Navigator>
//       <ProfileStack.Screen
//         name="Profile"
//         component={DrawerScreen}
//         options={{
//           title: "Welcome",
//           headerStyle,
//           headerTitleStyle,
//           headerLeft: () => (
//             console.log("HEYYO", navigation),
//             <Button
//               onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
//               title="Results Drawer"
//             />
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name="BrainGauge"
//         component={Braingauge}
//         options={{
//           title: "Survey",
//           headerStyle,
//           headerTitleStyle,
//         }}
//       />
//       <ProfileStack.Screen
//         name="Results"
//         component={TabsScreen}
//         options={{
//           title: "Results",
//           headerStyle,
//           headerTitleStyle,
//         }}
//       />
//     </ProfileStack.Navigator>
//   );
//   function TabsScreen() {
//     return (
//       <Tabs.Navigator>
//         <Tabs.Screen name="Appetite" component={Appetite} />
//         <Tabs.Screen name="Mood" component={Mood} />
//         <Tabs.Screen name="Exercise" component={Exercise} />
//         <Tabs.Screen name="Sleep" component={Sleep} />
//       </Tabs.Navigator>
//     );
//   }

//   const RootStack = createStackNavigator();
//   const RootStackScreen = ({ emailGlobal }) => (
//     <RootStack.Navigator headerMode="none">
//       <RootStack.Screen
//         name="Auth"
//         component={AuthStackScreen}
//         options={{
//           animationEnabled: false,
//         }}
//       />
//     </RootStack.Navigator>
//   );

//   // const authContext = React.useMemo(() => {
//   //   return {
//   //     signIn: () => {
//   //       setIsLoading(false);
//   //       setUserToken("asdf");
//   //     },
//   //     signUp: () => {
//   //       setIsLoading(false);
//   //       setUserToken("asdf");
//   //     },
//   //     signOut: () => {
//   //       setIsLoading(false);
//   //       setUserToken(null);
//   //     },
//   //     home: () => {
//   //       setIsLoading(false);
//   //       setUserToken(null);
//   //     },
//   //   };
//   // }, []);

//   // React.useEffect(() => {
//   //   setTimeout(() => {
//   //     setIsLoading(false);
//   //   }, 1000);
//   // }, []);

//   // if (isLoading) {
//   //   return <Splash />;
//   // }

//   return (
//     // <AuthContext.Provider value={authContext}>
//     <emailContext.Provider
//       value={{
//         emailGlobal,
//         setEmailGlobal,
//       }}
//     >
//       <NavigationContainer>
//         <AuthStackScreen emailGlobal={emailGlobal} />
//       </NavigationContainer>
//     </emailContext.Provider>
//     // </AuthContext.Provider>
//   );
// };

import React, { useState } from "react";
import { Button } from "react-native";
import { useNavigation, NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import emailContext from "./emailContext";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/SignUp";
import Mood from "./components/Mood";
import Appetite from "./components/Hunger";
import Sleep from "./components/Sleep";
import Exercise from "./components/Exercise";
import Profile from "./components/Welcome";
import Braingauge from "./Braingauge";

const headerStyle = {
  backgroundColor: "black",
};
const headerTitleStyle = {
  color: "white",
};



export const Navigators = ({navigation}) => {
  const [emailGlobal, setEmailGlobal] = useState("");


   
  
  console.log("hellooooo", navigation)

  const AuthStack = createStackNavigator();
  const AuthStackScreen = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerStyle,
          headerTitleStyle,
        }}
      />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "Sign In",
          headerStyle,
          headerTitleStyle,
        }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          title: "Create Account",
          headerStyle,
          headerTitleStyle,
        }}
      />
      <AuthStack.Screen
        name="Profile"
        component={DrawerScreen}
        options={{
          animationEnabled: false,
          title: "Welcome",
          headerStyle,
          headerTitleStyle,
          headerLeft: () => (
            console.log("Hi") 
          ),
        }}
      />
      <AuthStack.Screen
        name="BrainGauge"
        component={Braingauge}
        options={{
          title: "Survey",
          headerStyle,
          headerTitleStyle,
        }}
      />
    </AuthStack.Navigator>
  );

  const Drawer = createDrawerNavigator();
  const DrawerScreen = () => (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: "black",
        width: 240,
        opacity: 0.95,
      }}
      drawerContentOptions={{
        inactiveTintColor: "white",
        activeTintColor: "#167bff",
        itemStyle: { marginVertical: 30 },
      }}
    >
      <Drawer.Screen name="Return" component={Profile} />
      <Drawer.Screen name="Mood" component={Mood} />
      <Drawer.Screen name="Appetite" component={Appetite} />
      <Drawer.Screen name="Exercise" component={Exercise} />
      <Drawer.Screen name="Sleep" component={Sleep} />
    </Drawer.Navigator>
  );

  // const RootStack = createStackNavigator();
  // const RootStackScreen = ({ emailGlobal }) => (
  //   <RootStack.Navigator headerMode="none">
  //     <RootStack.Screen
  //       name="Auth"
  //       component={AuthStackScreen}
  //       options={{
  //         animationEnabled: false,
  //       }}
  //     />
  //   </RootStack.Navigator>
  // );

  return (
    <emailContext.Provider
      value={{
        emailGlobal,
        setEmailGlobal,
      }}
    >
      <NavigationContainer>
        <AuthStackScreen emailGlobal={emailGlobal}/>
      </NavigationContainer>
    </emailContext.Provider>
  );
};
