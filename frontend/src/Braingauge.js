import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "./context";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/SignUp";
import Details from "./components/Home";
import Search from "./components/Mood";
import Search2 from "./components/Home";
import Profile from "./components/Welcome";
import Splash from "./components/Home";
import Survey from "./components/Survey";
import Survey2 from "./components/Survey2";
import Survey3 from "./components/Survey3";
import Survey4 from "./components/Survey4";
import Review from "./components/Review";

const headerStyle = {
  backgroundColor: "black",
};

const headerTitleStyle = {
  color: "white",
};

export const Braingauge = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [value1, setValue1] = useState(0);
  const [texts1, setText1] = useState("Not Included");

  useEffect(() => {
   texting();
  }, [value1]); 

texting = () => {
  switch (value1) {
    case 0:
      setText1("Not Included");
      break;
    case 1:
      setText1("Very Tired");
      break;
    case 2:
      setText1("Tired");
      break;
    case 3:
      setText1("Refreshed");
      break;
    case 4:
      setText1("Very Refreshed");
      break;
  }
  console.log("YYYYY", texts1, "YYYYYY");
};

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
  const HomeStack = createStackNavigator();
  const SearchStack = createStackNavigator();

  const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Welcome" component={Profile} />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          title: route.params.name,
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




  
  function nestedSurvey() {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name="Survey">
          {(props) => (
            <Survey
              {...props}
              value1={value1}
              setValue1={setValue1}
              texts1={texts1}
              setText1={setText1}
            />
          )}
        </ProfileStack.Screen>
        <ProfileStack.Screen name="Survey2" component={Survey2} />
        <ProfileStack.Screen name="Survey3" component={Survey3} />
        <ProfileStack.Screen name="Survey4" component={Survey4} />
        <ProfileStack.Screen name="Review">
          {(props) => (
            <Review
              {...props}
              value1={value1}
              texts1={texts1}
            />
          )}
        </ProfileStack.Screen>
      </ProfileStack.Navigator>
    );
  }

  const ProfileStack = createStackNavigator();
  const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Welcome",
          headerStyle,
          headerTitleStyle,
        }}
      />
      <ProfileStack.Screen
        name="nestedSurvey"
        component={nestedSurvey}
        options={{
          title: "Survey",
          headerStyle,
          headerTitleStyle,
        }}
      />
    </ProfileStack.Navigator>
  );

  const TabsScreen = () => (
    <Tabs.Navigator>
      <Tabs.Screen name="Welcome" component={HomeStackScreen} />
      <Tabs.Screen name="Search" component={SearchStackScreen} />
    </Tabs.Navigator>
  );

  const Drawer = createDrawerNavigator();
  const DrawerScreen = () => (
    <Drawer.Navigator initialRouteName="Profile">
      <Drawer.Screen name="Banannnnnnnnnna" component={TabsScreen} />
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
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
