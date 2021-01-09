import React, { useEffect} from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../context";

const Review = ({
  texts1,
  texts2,
  texts3,
  texts4,
  value1,
  value2,
  value3,
  value4,
  navigation,
  setPage,
  page,
}) => {

  useEffect(() => {
    navigation.setOptions({
      title: "Survey",
      headerLeft: () => (
        <TouchableOpacity onPress={() => setPage(1)}>
          <Text accessibilityLabel="Back" style={styles.text5}>
            Back
          </Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => setPage(6)}>
          <Text accessibilityLabel="Skip" style={styles.text6}></Text>
        </TouchableOpacity>
      ),
      title: "",
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
        <Text style={styles.text2}>Review</Text>
        <View style={styles.divider_bar}></View>
        <View style={styles.mid}>
          <Text style={styles.text3}>
            {"\n"}
            Sleep: ({value1}) = {texts1}
            {"\n"}
            Mood: ({value2}) = {texts2}
            {"\n"}
            Appetite: ({value3}) = {texts3}
            {"\n"}
            Exercise: ({value4}) = {texts4}
            {"\n"}
          </Text>
        </View>

        {/* Sign Up Button */}
        <View style={styles.lower}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setPage(6);
              console.log(page);
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

export default Review;

const styles = StyleSheet.create({
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
    fontSize: 20,
    textAlign: "center",
  },
  mid: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
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
    flex: 0.25,
    justifyContent: "flex-end",
  },

  img: {
    width: "100%",
    height: 90,
    borderRadius: 5,
  },
  text2: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
  },
  lower: {
    flex: 0.38,
    justifyContent: "flex-start",
  },
  text5: {
    fontSize: 17,
    color: "white",
    marginLeft: 10,
  },
});
