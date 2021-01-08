import React, { useEffect, useContext } from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const Home = ({ navigation }) => {
  console.log("Home");
  return (
    <SafeAreaView style={styles.container2}>
      <View style={styles.container}>
        <Text style={styles.text}>Brain Gauge</Text>

        <View style={styles.middle}>
          <Image
            source={{
              uri:
                "https://github.com/mattkrebs2000/ReactNativeBrainGaugeFolder/blob/master/frontend/assets/brain.png?raw=true",
            }}
            style={styles.img}
          />
        </View>
        <Text style={styles.text2}>
         
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text
              accessibilityLabel="Sign In"
              style={styles.text3}
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("CreateAccount")}
          >
            <Text
              accessibilityLabel="Sign Up"
              style={styles.text3}
              onPress={() => {
                navigation.navigate("CreateAccount");
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 40,
    marginBottom: 30,
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 5,
  },
  text2: {
    color: "white",
    margin: "12%",
    textAlign: "center",
    justifyContent: "flex-start",

    fontSize: 15,
  },
  middle: {
    width: 200,
  },
  btn: {
    borderColor: "#167bff",
    borderWidth: 1,
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    color: "white",
    margin: 5,
  },
  text3: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
