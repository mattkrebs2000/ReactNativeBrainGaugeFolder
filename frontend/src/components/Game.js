import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

const Game = ({x,y,hidden, move, color, startTime,score, userResult,click, setClick, setPage, getRandomColor}) => {
  const navigation = useNavigation();

  console.log("Game");
  return (
    <SafeAreaView style={styles.container2}>
      <View style={styles.container}>
        <TouchableOpacity>
          <View
            style={styles.box}
            style={{
              visibility: hidden ? "hidden" : "visible",
              marginTop: 200,
              top: y,
              right: x,
              backgroundColor: getRandomColor,
            }}
            onTouch={() => {
              move;
            }}
          ></View>
        </TouchableOpacity>
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

  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    maxWidth: "100%",
    margin: "auto",
    padding: 10,
    position: "relative",
    height: "80%",
  },
  box: {
   
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor:"orange",
    
  },
});
