import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import SignUp from "./components/SignUp.js"
import SignInn from "./components/SignIn.js"
import HomeScreen from "./components/Home.js"
import Welcomee from "./components/Welcome.js"
import SurveyScreen from "./components/Survey.js"




const ScreenContainer = ({ children }) => (
    <View style={styles.container2}>{children}</View>
);

export const Home = ({ navigation }) => (
    <ScreenContainer>
        <HomeScreen navigation={navigation} title="GO BACK"/>
    </ScreenContainer>
);

export const Survey = ({ navigation }) => (
<ScreenContainer>
<SurveyScreen navigation = {navigation}/>
</ScreenContainer>
);


export const Welcome = ({ navigation }) => (
    <ScreenContainer>
        <Text>Master List Screen</Text>
        <Button
            title="React Native by Example"
            onPress={() =>
                navigation.push("Details", { name: "React Native by Example " })
            }
        />
        <Button
            title="React Native School"
            onPress={() =>
                navigation.push("Details", { name: "React Native School" })
            }
        />
        <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
    </ScreenContainer>
);

export const Details = ({ route }) => (
    
    <ScreenContainer>
        <Text>Details Screen</Text>
        {route.params.name && <Text>{route.params.name}</Text>}
    </ScreenContainer>
);

export const Search = ({ navigation }) => (
    <ScreenContainer>
        <Text>Search Screen</Text>
        <Button title="Search 2" onPress={() => navigation.push("Search2")} />
        <Button
            title="React Native School"
            onPress={() => {
                navigation.navigate("Home", {
                    screen: "Details",
                    params: { name: "React Native School" }
                });
            }}
        />
    </ScreenContainer>
);

export const Search2 = () => (
    <ScreenContainer>
        <Text>Search2 Screen</Text>
    </ScreenContainer>
);

export const Profile = ({ navigation }) => {

    return (
      <View>
        <Welcomee navigation={navigation} />
        <Text>Profile Screen</Text>
        <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />

      </View>
    );
};

export const Splash = () => (
    <ScreenContainer>
        <Text>Loading...</Text>
    </ScreenContainer>
);

export const SignIn = ({ navigation }) => {

    return (
      <ScreenContainer>
        <SignInn navigation={navigation} />
      </ScreenContainer>
    );
};

export const CreateAccount = ({ navigation }) => {

    // const { home } = React.useContext(AuthContext);

    return (
      <ScreenContainer>
        <SignUp navigation={navigation} />
      </ScreenContainer>
    );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});