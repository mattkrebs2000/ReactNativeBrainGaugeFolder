import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";

const Appetite = ({ setPage, setValue3, texts3, value3, page }) => {
  console.log("Appetite");

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
        <Text style={styles.text2}>Appetite</Text>
        <View style={styles.divider_bar}></View>

        {/* Sign Up Form */}
        <View style={styles.form}>
          <Text style={styles.text3}>
            How would you describe {"\n"}yourself relative to the amount {"\n"}{" "}
            of food you've eaten lately?
          </Text>
          <Text> {"\n"} </Text>
          <Slider
            style={styles.slider}
            onValueChange={(event) => {
              setValue3(event);
            }}
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#004fff"
            step={1}
            maximumTrackTintColor="red"
            value={50}
          />
          <View>
            <Text style={styles.text}>
              {value3 && value3} : {texts3}
            </Text>
          </View>
        </View>

        {/* Sign Up Button */}
        <View style={styles.lower}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setPage(4);
            }}
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

export default Appetite;

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
});
