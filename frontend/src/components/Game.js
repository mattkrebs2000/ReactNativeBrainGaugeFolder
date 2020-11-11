import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const Game = () => {
  const navigation = useNavigation();

  console.log("Game");
  return (
    <SafeAreaView style={styles.container2}>
      <View style={styles.container}>
        <Text style={styles.text}>Brain Gauge</Text>

        <View style={styles.middle}>
          <Image
            source={{
              uri:
                "/Users/matt/Desktop/HTML-JS/BootCampWork/ReactNativeBrainGaugeFolder/frontend/assets/brain.png",
            }}
            style={styles.img}
          />
        </View>
        <Text style={styles.text2}>
          This is the App that measures your mental responsiveness and tells you
          when you are at your best.
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Results")}
            // onPress={this.signUp}
          >
            <Text
              accessibilityLabel="See Results"
              style={styles.text3}
              onPress={() => {
                navigation.navigate("Results");
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}

            // onPress={this.signUp}
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

export default Game;

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
    height: 45,
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
