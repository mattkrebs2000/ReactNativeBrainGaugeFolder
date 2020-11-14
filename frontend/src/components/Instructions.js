import React, { useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import { AuthContext } from "../context";

const Instructions = ({navigation, setPage
}) => {

  console.log("Instructions", navigation.setOptions)

useEffect(() => {
  navigation.setOptions({
    title: "Game",
    headerBackTitle: "Yo",

    headerLeft: () => (
      <Button
        onPress={() => {
          setPage(1);
        }}
        title="< Survey"
      />
    ),
  });
}, []);








  return (
    <View style={styles.container} behavior="padding">
      <SafeAreaView style={styles.container} behavior="padding">
        <Text> {"\n"} </Text>
        <Text style={styles.text2}>Instructions</Text>
        <View style={styles.divider_bar}></View>
        <View style={styles.mid}>
          <Text style={styles.text3}>
            This game is designed to test your reaction speed by measuring the
            time it takes you to touch the boxes that appear on the page.
            {"\n"}
            {"\n"}
            After you click the "Begin" button below you will be taken to a new
            screen on which the square boxes will appear one after another. As you touch each one your reaction time will be recorded and a new round will begin until the end of the game. When you are ready to begin press the button below. 
          </Text>
        </View>

        {/* Sign Up Button */}
        <View style={styles.lower}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
             setPage(7)
            }}
          >
            <Text style={styles.text}>Begin</Text>
          </TouchableOpacity>

          <View style={styles.divider_bar}></View>
        </View>
        {/* Log In */}
      </SafeAreaView>
    </View>
  );
};

export default Instructions;

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
    flex: 1.1,
    alignItems: "center",
    justifyContent: "center",
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
    flex: 0.6,
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
    flex: 0.6,
    justifyContent: "flex-start",
  },
});
