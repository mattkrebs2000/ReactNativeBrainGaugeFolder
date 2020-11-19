import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";


const Game = ({ score, setScore }) => {
  const [x, setX] = useState(157);
  const [y, setY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [click, setClick] = useState(0);
  const [color, setColor] = useState("");
  const [userResult, setUserResult] = useState([]);

useEffect(() => {
randoInterval()
}, []);

  const randoInterval = () => {
    const randomNumber = Math.floor(Math.random() * 4000) + 500;
    setTimeout(ReRun, randomNumber);
  };

  const ReRun = () => {
    setHidden(false);
    startedMotion = setInterval(frame, 10);
  };

  const frame = () => {
    setStartTime(startTime++);
  };

  //This function helps to control placement of the square
  const rando = () => {
    return Math.floor(Math.random() * 60) + 10;
  };



//This function helps to control placement of the square
  const rando = () => {
    return Math.floor(Math.random() * 60) + 10;
  };

  //This function creates unique colors Ex: #234432; 

  const getRandomColor = () => {
    var letters = "0123456789ABCDEF".split("");
    var colorNumbers = "#";
    for (var i = 0; i < 6; i++) {
      colorNumbers += letters[Math.round(Math.random() * 15)];
    } //ends for loop

    return colorNumbers;
  };

//This function is the OnClick function. What happens when the square appearing is clicked. 

  const move = () => {
    clearInterval(startedMotion);
    const trackScore = startTime;
    const temparray = userResult;
    temparray.push(trackScore);
    setClick(click + 1);
    setX(() => rando() + "%");
    setY(() => rando() + "%");
    setUserResult(temparray);
    setStartTime(0)
    setHidden(true);
    setScore(score + trackScore);

    randoInterval();

    // const timeout = setTimeout(() => {
    //   setHidden(false);
    //   setStartTime(moment().millisecond());
    // }, randoInterval());

    var num = score / 8;
    var SuperNumber = num.toFixed(2);
    console.log("Your score", SuperNumber);

    if (click === 8) {
      clearTimeout(timeout);
    }
    console.log(temparray, "tempArray")
  };
  console.log("Game", hidden);

  useEffect(() => {
    setColor(getRandomColor);
    console.log("this is the color", color);
  }, []);

  return (
    <SafeAreaView style={styles.contatiner2}>
      <Text style={{ color: "white", backgroundColor: "black" }}>
        score={score}
      </Text>
      <Text style={{ color: "white", backgroundColor: "black" }}>
        startTime={startTime}
      </Text>
      <Text style={{ color: "white", backgroundColor: "black" }}>
        click={click}
      </Text>
      <Text style={{ color: "white", backgroundColor: "black" }}>
        Your reaction speed:{" "}
        {!!userResult[userResult.length - 1]
          ? userResult[userResult.length - 1].toFixed(2)
          : null}{" "}
        seconds{" "}
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
              opacity: hidden ? "0%" : "100%",
              marginTop: 30,
              marginTop: y,
              marginLeft: x,
              height: hidden ? 0 : 100,
              width: 100,
              backgroundColor: getRandomColor(),
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
