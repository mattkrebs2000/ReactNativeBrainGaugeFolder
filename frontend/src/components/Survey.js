import React, { useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import Slider from "@react-native-community/slider";

const Sleep = ({ navigation, setPage, setValue1, texts1, value1 }) => {
  console.log("Sleep");

  useEffect(() => {
    navigation.setOptions({
      title: "Survey",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text accessibilityLabel="Back" style={styles.text5}>
            Go Back
          </Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => setPage(6)}>
          <Text accessibilityLabel="Skip" style={styles.text6}>
            Skip
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.container} behavior="padding">
      <SafeAreaView style={styles.container} behavior="padding">
        <View style={styles.middle}>
          <Image
            source={{
              uri:
                "https://github.com/mattkrebs2000/ReactNativeBrainGaugeFolder/blob/master/frontend/assets/brain.png?raw=true",
            }}
            style={styles.img}
          />
        </View>
        <Text> {"\n"} </Text>
        <Text style={styles.text2}>Sleep</Text>
        <View style={styles.divider_bar}></View>

        {/* Sign Up Form */}
        <View style={styles.form}>
          <Text style={styles.text3}>
            How do you feel relative {"\n"}to the amount of sleep you've gotten
            recently?
          </Text>
          <Text> {"\n"} </Text>
          <Slider
            style={styles.slider}
            value={50}
            onValueChange={(event) => {
              setValue1(event);
            }}
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#004fff"
            step={1}
            maximumTrackTintColor="red"
          />
          <View>
            <Text style={styles.text}>
              {value1 && value1} : {texts1}
            </Text>
          </View>
        </View>

        {/* Sign Up Button */}
        <View style={styles.lower}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setPage(2);
            }}
            // onPress={this.signUp}
          >
            <Text style={styles.text}> Submit</Text>
          </TouchableOpacity>

          <View style={styles.divider_bar}></View>
        </View>
        {/* Log In */}
      </SafeAreaView>
    </View>
  );
};

export default Sleep;

const styles = StyleSheet.create({
  slider: {
    width: 300,
    opacity: 1,
    height: 50,
    marginTop: 50,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
    margin: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    flexDirection: "column",
  },

  divider_bar: {
    width: 300,
    backgroundColor: "#FAD9C5",
    height: 1,
    marginTop: 20,
  },
  text3: {
    color: "white",
    textAlign: "center",
    justifyContent: "flex-start",
    fontSize: 20,
  },
  form: {
    flex: 1.1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    width: 300,
    marginTop: 30,
  },
  btn: {
    width: 300,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004fff",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    color: "white",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  middle: {
    width: 150,
    alignItems: "center",
    flex: 0.6,
    justifyContent: "flex-end",
  },

  img: {
    width: "90%",
    height: 90,
    borderRadius: 5,
  },
  text2: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
  },
  lower: {
    flex: 1,
    justifyContent: "center",
  },
  text5: {
    fontSize: 17,
    color: "white",
    marginLeft: 10,
  },
  text6: {
    fontSize: 17,
    color: "white",
    marginRight: 10,
  },
});
