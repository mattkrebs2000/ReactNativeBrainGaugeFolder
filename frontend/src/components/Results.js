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

const Home = () => {
  //   const navigation = useNavigation();

  console.log("Results");
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
          This is the App that measures your mental responsiveness and tells you
          when you are at your best.
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("CreateAccount")}
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

          <TouchableOpacity style={styles.btn}>
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
