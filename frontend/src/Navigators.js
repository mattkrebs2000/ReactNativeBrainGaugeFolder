import React, { useState } from "react";
import { Button } from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
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

export const Navigators = () => {
  const [emailGlobal, setEmailGlobal] = useState("");

  const AuthStack = createStackNavigator();
  const AuthStackScreen = ({navigation}) => (
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
          title: "Welcome",
          headerStyle,
          headerTitleStyle,
          headerLeft: () => (
            <Button
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              title="Results Drawer"
            />
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

  return (
    <emailContext.Provider value={{
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
