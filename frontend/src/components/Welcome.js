import React, { useEffect, useContext, useState } from "react";
import { firebase } from "../firebase/config.js";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  Button,
  TouchableOpacity,
} from "react-native";
import emailContext from "../emailContext.js";
import dataContext from "../dataContext.js";
import maxContext from "../maxOfYAxisContext.js";

const Welcome = ({ navigation }) => {
  const { emailGlobal, setEmailGlobal } = useContext(emailContext);
  const [change, setChange] = useState("");

  useEffect(() => {
    if (change.length > 3) {
      setEmailGlobal("");
      setTimeout(() => {
        navigation.navigate("Home");
      }, 100);
    } else {
      console.log("Do Nothing");
    }
  }, [change]);

  console.log("Welcome", emailGlobal);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.flex1}>
          <Text style={styles.text}>You are logged in as:</Text>
          <Text style={styles.text2}>{emailGlobal}</Text>
        </View>
        <View style={styles.flex2}>
          <Text
            style={styles.text2}
            onPress={() => navigation.navigate("BrainGauge")}
          >
            Play Game
          </Text>
          <TouchableOpacity
            style={styles.containerofimage}
            onPress={() => navigation.navigate("BrainGauge")}
          >
            <Image
              source={{
                uri:
                  "https://media.giphy.com/media/35B3Val0pYgtpScqsz/giphy.gif",
              }}
              style={styles.image}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.flex3}>
          <Text style={styles.text2} onPress={() => navigation.toggleDrawer()}>
            See Results
          </Text>
          <TouchableOpacity
            style={styles.containerofimage}
            onPress={() => navigation.toggleDrawer()}
          >
            <Image
              source={{
                uri:
                  "https://i.pinimg.com/originals/c9/91/72/c99172c17b83d3c620b997858351b2a5.gif",
              }}
              style={styles.image}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.flex4}>
          <TouchableOpacity style={styles.btn}>
            <Text
              accessibilityLabel="Sign Up"
              style={styles.text3}
              onPress={() => setChange("abcdef")}
            >
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Welcome;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container2: {
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    flex: 0.5,
    color: "white",
    fontSize: 30,
  },

  text2: {
    flex: 0.5,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  image: {
    width: "90%",
    height: "100%",

    borderRadius: 5,
  },
  containerofimage: {
    flex: 2,
    width: 200,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "10%",
  },
  bottombuttons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
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
  flex1: {
    flex: .4,
    marginTop: 10,
  },
  flex2: {
    flex: 1,
  },
  flex3: {
    flex: 1,
  },
  flex4: {
    flex: .5,
  },
});
