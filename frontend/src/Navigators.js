import React, { useState, useEffect } from "react";
import { scale } from 'react-native-size-matters';
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
import Moodmanage from "./components/Moodmanage";
import Appetite from "./components/Hunger";
import Appetitemanage from "./components/Hungermanage";
import TimeOfWeek from "./components/TimeOfWeek";
import TimeOfWeekManage from "./components/TimeOfWeekManage";
import TimeOfYear from "./components/TimeOfYear";
import TimeOfYearManage from "./components/TimeOfYearManage";
import TimeOfDay from "./components/TimeOfDay";
import TimeOfDayManage from "./components/TimeOfDayManage";
import Sleep from "./components/Sleep";
import Sleepmanage from "./components/Sleepmanage";
import Age from "./components/Age";
import Agemanage from "./components/Agemanage";
import Exercise from "./components/Exercise";
import Exercisemanage from "./components/Exercisemanage";
import Profile from "./components/Welcome";
import Braingauge from "./Braingauge";
import { DrawerContent } from "./components/DrawerContent";

const headerStyle = {
  backgroundColor: "black",
};

const IconBar = () => {
  <View style={{ backgroundColor: "red" }}>
    <Icon name="add" />
  </View>;
};

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
          headerTitleAlign: "center",
          headerStyle,

          headerTintColor: "white",
        }}
      />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "Sign In",
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
        }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          title: "Create Account",
          headerTitleAlign: "center",
          headerStyle,

          headerTintColor: "white",
        }}
      />
      <AuthStack.Screen
        name="Profile"
        component={DrawerScreen}
        options={{
          animationEnabled: false,
          title: "Data",
          headerTitleAlign: "center",
          headerStyle,

          headerLeft: () => console.log("Hi"),
          headerTintColor: "white",
        }}
      />
      <AuthStack.Screen
        name="BrainGauge"
        component={Braingauge}
        options={{
          title: "Survey",
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
        }}
      />
    </AuthStack.Navigator>
  );

  const Drawer = createDrawerNavigator();

  const DrawerScreen = () => (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: "black",
        width: scale(320),
        opacity: 0.85,
      }}
      drawerContentOptions={{
        inactiveTintColor: "white",
        activeTintColor: "#167bff",
        itemStyle: { marginVertical: scale(20) },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Return" component={Profile} />
      <Drawer.Screen name="Age" component={Age} />
      <Drawer.Screen name="Agemanage" component={Agemanage} />
      <Drawer.Screen name="Mood" component={Mood} />
      <Drawer.Screen name="Moodmanage" component={Moodmanage} />
      <Drawer.Screen name="Appetite" component={Appetite} />
      <Drawer.Screen name="Appetitemanage" component={Appetitemanage} />

      <Drawer.Screen name="Exercise" component={Exercise} />
      <Drawer.Screen name="Exercisemanage" component={Exercisemanage} />
      <Drawer.Screen name="Sleep" component={Sleep} />
      <Drawer.Screen name="Sleepmanage" component={Sleepmanage} />
      <Drawer.Screen name="TimeOfDay" component={TimeOfDay} />
      <Drawer.Screen name="TimeOfDayManage" component={TimeOfDayManage} />
      <Drawer.Screen name="TimeOfWeek" component={TimeOfWeek} />
      <Drawer.Screen name="TimeOfWeekManage" component={TimeOfWeekManage} />
      <Drawer.Screen name="TimeOfYear" component={TimeOfYear} />
      <Drawer.Screen name="TimeOfYearManage" component={TimeOfYearManage} />
    </Drawer.Navigator>
  );

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
