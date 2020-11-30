import React, { useState }from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import emailContext from "./emailContext";
import { AuthContext } from "./context";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/SignUp";
import Mood from "./components/Mood";
import Appetite from "./components/Hunger"
import Sleep from "./components/Sleep"
import Exercise from "./components/Exercise"
import Profile from "./components/Welcome";
import Splash from "./components/Home";
import Braingauge from "./Braingauge";


import { withTheme } from "react-native-elements";



const headerStyle = {
  backgroundColor: "black",
};

const headerTitleStyle = {
  color: "white",
};


export const Navigators = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [emailGlobal, setEmailGlobal] = useState("mm"); 

  
  const setEmailFunction = (email) =>  setEmailGlobal(email);
  


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
    </AuthStack.Navigator>
  );

  const Tabs = createBottomTabNavigator();

    const Drawer = createDrawerNavigator();
    const DrawerScreen = () => (
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: "black",
          width: 240,
        }}
        drawerContentOptions={{
          inactiveTintColor: "white",
          activeTintColor: "#167bff",
          itemStyle: { marginVertical: 30 },
        }}
      >
        <Drawer.Screen name="Go Back" component={Profile} />
        <Drawer.Screen name="Mood" component={Mood} />
        <Drawer.Screen name="Appetite" component={Appetite} />
        <Drawer.Screen name="Exercise" component={Exercise} />
        <Drawer.Screen name="Sleep" component={Sleep} />
      </Drawer.Navigator>
    );


  const ProfileStack = createStackNavigator();
  const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={DrawerScreen}
        options={{
          title: "Welcome",
          headerStyle,
          headerTitleStyle,
        }}
      />
      <ProfileStack.Screen
        name="BrainGauge"
        component={Braingauge}
        options={{
          title: "Survey",
          headerStyle,
          headerTitleStyle,
        }}
      />
      <ProfileStack.Screen
        name="Results"
        component={TabsScreen}
        options={{
          title: "Results",
          headerStyle,
          headerTitleStyle,
        }}
      />
    </ProfileStack.Navigator>
  );

  function TabsScreen() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name="Appetite" component={Appetite} />
        <Tabs.Screen name="Mood" component={Mood} />
        <Tabs.Screen name="Exercise" component={Exercise} />
        <Tabs.Screen name="Sleep" component={Sleep} />
      </Tabs.Navigator>
    );
  }

  const RootStack = createStackNavigator();
  const RootStackScreen = ({ userToken }) => (
    <RootStack.Navigator headerMode="none">
      {userToken ? (
        <RootStack.Screen
          name="App"
          component={ProfileStackScreen}
          options={{
            animationEnabled: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );

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
      },
      home: () => {
        setIsLoading(false);
        setUserToken(null);
      },
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
      <emailContext.Provider
        value={{
          emailGlobal,
          setEmailGlobal,
        }}
      >
        <NavigationContainer>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </emailContext.Provider>
    </AuthContext.Provider>
  );
};
