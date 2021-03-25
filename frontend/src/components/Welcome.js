import React, { useEffect, useContext, useState } from "react";
import { ScaledSheet } from 'react-native-size-matters';
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
          {emailGlobal.length > 4 ? (
            <Text style={styles.text}>You are logged in as:</Text>
          ) : (
            <Text style={styles.text}>You are touring as a Guest</Text>
          )}
          <Text style={styles.text2}>{emailGlobal}</Text>
        </View>

        <View style={styles.flex2}>
          <Text
            style={styles.text6}
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
                    "https://github.com/mattkrebs2000/ReactNativeBrainGaugeFolder/blob/master/frontend/assets/brain.png?raw=true",
                }}
                style={styles.image2}
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

const styles = ScaledSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container2: {
    flexDirection: "column",
    flex: 1, 
    alignItems: "center",
  },
  text: {
    
    color: "white",
    fontSize: "30@s",
    
  },

  text2: {
  
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: "20@s",
    paddingBottom: "2@s",
  },
  text6: {
   
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: "20@s",
    
  },
  image: {
    width: "170@vs",
    height: "90@s",
    borderRadius: 5,
  },
  image2: {
    width: "170@vs",
    height: "90@s",
    borderRadius: 5,
  },
  containerofimage: {
 
    width: "200@s",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10%",
  },
  bottombuttons: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btn: {
    borderColor: "#167bff",
    borderWidth: "1@s",
    width: "100@s",
    height: "45@s",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: "10@s",
    shadowColor: "white",
    shadowOffset: { width: "1@s", height: "1@s" },
    shadowOpacity: "1@s",
    shadowRadius: "3@s",
    color: "white",
    margin: "5@s",
  },
  text3: {
    color: "white",
    fontSize: "15@s",
    textAlign: "center",
  },
  flex1: {
    flex: 0.5,
    marginTop: 10,
  },
  flex2: {
    flex: 1,
  },
  flex3: {
    flex: 1,
  },
  flex4: {
    flex: 0.5,
  },
});
