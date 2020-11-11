import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AuthContext } from "./context";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/SignUp";
import Details from "./components/Home";
import Mood from "./components/Mood";
import Appetite from "./components/Hunger"
import Sleep from "./components/Sleep"
import Exercise from "./components/Exercise"
import Search2 from "./components/Home";
import Profile from "./components/Welcome";
import Splash from "./components/Home";
import Survey from "./components/Survey";
import Survey2 from "./components/Survey2";
import Survey3 from "./components/Survey3";
import Survey4 from "./components/Survey4";
import Review from "./components/Review";
import Braingauge from "./Braingauge";
import Instructions from "./components/Instructions"
import Game from "./components/Game"

const headerStyle = {
  backgroundColor: "black",
};

const headerTitleStyle = {
  color: "white",
};


export const Navigators = ({
  navigation,
  x,
  y,
  hidden,
  startTime,
  score,
  userResult,
  click,
  setClick,
  setPage,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

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
        <ProfileStack.Screen
          name="Braingauge"
          component={Braingauge}
          navigation={navigation}
        />
      </ProfileStack.Navigator>
    );
  }


  function gameSection2() {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen
          name="Braingauge2"
          component={Braingauge}
          navigation={navigation}
        />
      </ProfileStack.Navigator>
    );
  }







  function GameSection() {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen
          name="Instructions"
          component={Instructions}
          navigation={navigation}
        />
        <ProfileStack.Screen
          name="Game2"
          component={Game}
          navigation={navigation}
          x={x}
          y={y}
          hidden={hidden}
          startTime={startTime}
          score={score}
          userResult={userResult}
          click={click}
          setClick={setClick}
          setPage={setPage}
        />
      </ProfileStack.Navigator>
    );
  }

  function WelcomeBottomTab() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Welcome",
            headerStyle,
            headerTitleStyle,
          }}
        />
        <Tabs.Screen
          name="DrawerScreen"
          component={DrawerScreen}
          options={{
            title: "Results",
            headerStyle,
            headerTitleStyle,
          }}
        />
      </Tabs.Navigator>
    );
  }

  const ProfileStack = createStackNavigator();
  const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={WelcomeBottomTab}
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
      <ProfileStack.Screen
        name="gameSection2"
        component={gameSection2}
        options={{
          title: "Game",
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

  const Drawer = createDrawerNavigator();
  const DrawerScreen = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Back to Profile" component={Profile} />
      <Drawer.Screen name="Mood" component={Mood} />
      <Drawer.Screen name="Appetite" component={Appetite} />
      <Drawer.Screen name="Exercise" component={Exercise} />
      <Drawer.Screen name="Sleep" component={Sleep} />
    </Drawer.Navigator>
  );

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
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
