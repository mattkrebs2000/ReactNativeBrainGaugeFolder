import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";

const Mood = (props) => {
  const [value, setValue] = useState(0);
  const [texts, setText] = useState("Not Included");

  useEffect(() => {
    texting();
  }, [value]);

  texting = () => {
    switch (value) {
      case 0:
        setText("Not Included");
        break;
      case 1:
        setText("Upset");
        break;
      case 2:
        setText("Mildly Upset");
        break;
      case 3:
        setText("Content");
        break;
      case 4:
        setText("Happy");
        break;
    }
  };
  return (
    <View style={styles.container} behavior="padding">
      <SafeAreaView style={styles.container} behavior="padding">
        <View style={styles.middle}>
          <Image
            source={{
              uri:
                "/Users/matt/Desktop/HTML-JS/BootCampWork/ReactNativeBrainGaugeFolder/frontend/assets/brain.png",
            }}
            style={styles.img}
          />
        </View>
        <Text> {"\n"} </Text>
        <Text style={styles.text2}>Mood</Text>
        <View style={styles.divider_bar}></View>

        {/* Sign Up Form */}
        <View style={styles.form}>
          <Text style={styles.text3}>
            How do you feel relative to the amount of positive Or negative news
            you've gotten recently?
          </Text>
          <Text> {"\n"} </Text>
          <Slider
            style={styles.slider}
            onValueChange={function (event) {
              return setValue(event);
            }}
            Not
            Included
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={4}
            minimumTrackTintColor="#004fff"
            step="1"
            maximumTrackTintColor="red"
            value="2"
          />
          <View>
            <Text style={styles.text}>
              {value && value} : {texts}
            </Text>
          </View>
        </View>

        {/* Sign Up Button */}
        <View style={styles.lower}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              props.navigation.navigate("Survey3");
            }}
            // onPress={this.signUp}
          >
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.divider_bar}></View>
        </View>
        {/* Log In */}
      </SafeAreaView>
    </View>
  );
};

export default Mood;

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
    marginBottom: 20,
  },
  text3: {
    color: "white",
    textAlign: "center",
    justifyContent: "flex-start",
    fontSize: 20,
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    width: 300,
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
    flex: 1,
    justifyContent: "flex-end",
  },

  img: {
    width: "100%",
    height: 120,
    borderRadius: 5,
  },
  text2: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
  },
  lower: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
