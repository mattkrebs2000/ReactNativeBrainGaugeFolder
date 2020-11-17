import React, {useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";
const moment = require("moment");  

const Game = ({score,setScore}) => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [startTime, setStartTime] = useState(0);

  const [click, setClick] = useState(0);

  const [color, setColor] = useState("");
  const [userResult, setUserResult] = useState([]);

  const rando = () => {
    return Math.floor(Math.random() * 60) + 10;
  };

  const randoInterval = () => {
    return Math.floor(Math.random() * 4000) + 500;
  };

  const getRandomColor = () => {
    var letters = "0123456789ABCDEF".split("");
    var colorNumbers = "#";
    for (var i = 0; i < 6; i++) {
      colorNumbers += letters[Math.round(Math.random() * 15)];
    } //ends for loop

    return (
      colorNumbers, console.log("YO", colorNumbers), setColor(colorNumbers)
    );
  };

  const move = () => {
    const trackScore = moment().millisecond();
    console.log("trackScore =", trackScore);
    const temparray = userResult;
    temparray.push(trackScore - startTime);
    setClick(click + 1);
    setX(() => rando() + "%");
    setY(() => rando() + "%");
    setUserResult(temparray);
    setHidden(true);
    setScore(score + trackScore);

    const timeout = setTimeout(() => {
      setHidden(false);
      setStartTime(moment().millisecond());
    }, randoInterval());

    var num = score / 8;
    var SuperNumber = num.toFixed(2);
    console.log("Your score", SuperNumber);

    if (click === 8) {
      clearTimeout(timeout);
    }
  };




  console.log("Game")

useEffect(() => {
  setColor(getRandomColor);
  console.log("this is the color", color)
}, []);

  
  


  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.contatiner2}>
      <Text style={{color: "white", backgroundColor: "black"}}>
        {score}
      </Text>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            console.log("ITCLICKED");
            move();
          }}
        >
          <View
            style={{
              visibility: hidden ? "hidden" : "visible",
              marginTop: 30,
              marginTop: y,
              marginLeft: x,
              height: 100,
              width: 100,
              backgroundColor: color,
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
 
});
