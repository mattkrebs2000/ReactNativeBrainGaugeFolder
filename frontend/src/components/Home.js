import React, { useEffect, useContext } from "react";

import { ScaledSheet } from 'react-native-size-matters';

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
const styles = ScaledSheet.create({
  container: {
    height: "100@s",
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: "40@s",
    marginBottom: "30@s",
  },
  img: {
    width: "170@vs",
    height: "90@s",
   
    borderRadius: 5,
  },
  text2: {
    color: "white",
    margin: "28@s",
    textAlign: "center",
    justifyContent: "flex-start",
    fontSize: 15,
  },
  middle: {
    width: "100%",
  },
  btn: {
    borderColor: "#167bff",
    borderWidth: 1,
    width: "100@s",
    height: "35@s",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: "1@s", height: "1@s" },
    shadowOpacity: 1,
    shadowRadius: 3,
    color: "white",
    margin: "5@s",
  },
  text3: {
    color: "white",
    fontSize: "20@ms",
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
