import React, { useState } from "react";
import { Button, Text } from "react-native";
import {

  useNavigation,
  NavigationContainer,
  DrawerActions,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import birthdateContext from "./birthdateContext";
import dataContext from "./dataContext";
import emailContext from "./emailContext";
import maxContext from "./maxOfYAxisContext";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/SignUp";
import Mood from "./components/Mood";
import Appetite from "./components/Hunger";
import Appetitemanage from "./components/Hungermanage";
import Sleep from "./components/Sleep";
import Age from "./components/Age";
import Exercise from "./components/Exercise";
import Profile from "./components/Welcome";
import Braingauge from "./Braingauge";
import { DrawerContent } from "./components/DrawerContent";

const headerStyle = {
  backgroundColor: "black",
};
const headerTitleStyle = {
  color: "white",
};

const IconBar = () => {
  
  <View style={{ backgroundColor: "red"}}>
    <Icon name="add" />
  </View>
}

export const Navigators = ({ navigation }) => {
  const [emailGlobal, setEmailGlobal] = useState("");
  const [birthdateGlobal, setBirthdateGlobal] = useState("");
  const [yourData, setYourData] = useState([]);
  const [maxOfYAxis, setMaxOfYAxis] = useState(0);

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
        itemStyle: { marginVertical: 20 },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Return" component={Profile} />
      <Drawer.Screen name="Age" component={Age} />
      <Drawer.Screen name="Mood" component={Mood} />
      <Drawer.Screen name="Appetite" component={Appetite} />
      <Drawer.Screen name="Appetitemanage" component={Appetitemanage} />

      <Drawer.Screen name="Exercise" component={Exercise} />
      <Drawer.Screen name="Sleep" component={Sleep} />
    </Drawer.Navigator>
  );





  // const DrawerScreen = () => (
  //   <Drawer.Navigator
  //     drawerStyle={{
  //       backgroundColor: "black",
  //       width: 240,
  //       opacity: 0.95,
  //     }}
  //     drawerContentOptions={{
  //       inactiveTintColor: "white",
  //       activeTintColor: "#167bff",
  //       itemStyle: { marginVertical: 20 },
  //     }}
  //   >
  //     <Drawer.Screen name="Return" component={Profile} 
    
  //     />
  //     <Drawer.Screen name="Age" component={Age} />
  //     <Drawer.Screen name="Mood" component={Mood} />
  //     <Drawer.Screen name="Appetite" component={Appetite}/>
      

  //     <Drawer.Screen name="Exercise" component={Exercise} />
  //     <Drawer.Screen name="Sleep" component={Sleep} />
  //   </Drawer.Navigator>
  // );

  return (
    <birthdateContext.Provider
      value={{
        birthdateGlobal,
        setBirthdateGlobal,
      }}
    >
      <maxContext.Provider
        value={{
          maxOfYAxis,
          setMaxOfYAxis,
        }}
      >
        <emailContext.Provider
          value={{
            emailGlobal,
            setEmailGlobal,
          }}
        >
          <dataContext.Provider
            value={{
              yourData,
              setYourData,
            }}
          >
            <NavigationContainer>
              <AuthStackScreen emailGlobal={emailGlobal} />
            </NavigationContainer>
          </dataContext.Provider>
        </emailContext.Provider>
      </maxContext.Provider>
    </birthdateContext.Provider>
  );
};