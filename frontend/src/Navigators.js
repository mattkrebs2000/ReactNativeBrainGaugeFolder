import React, { useState } from "react";
import { Button, Text } from "react-native";
import { useNavigation, NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import dataContext from "./dataContext";
import emailContext from "./emailContext";
import maxContext from "./maxOfYAxisContext"
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
   const [yourData, setYourData] = useState([]);
   const [maxOfYAxis, setMaxOfYAxis] = useState(0)


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
          headerLeft: () => console.log("Hi"),
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
     
      <Drawer.Screen name="Appetite" component={Appetite}/>
      <Drawer.Screen name="Exercise" component={Exercise} />
      <Drawer.Screen name="Sleep" component={Sleep} />
     
    </Drawer.Navigator>
  );

  return (
<maxContext.Provider value={{
        maxOfYAxis,
        setMaxOfYAxis,
      }}
    >


<emailContext.Provider value={{
        emailGlobal,
        setEmailGlobal,
      }}
    >
    <dataContext.Provider
      value={{
       yourData, setYourData
      }}
    >
      <NavigationContainer>
        <AuthStackScreen emailGlobal={emailGlobal}/>
      </NavigationContainer>
      </dataContext.Provider>
    </emailContext.Provider>
    </maxContext.Provider> 
  );
};
