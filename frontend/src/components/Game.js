import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

const Game = ({ average, setAverage }) => {
  const [x, setX] = useState(157);
  const [y, setY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [session, setSession] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [color, setColor] = useState("");
  const [total, setTotal] = useState(0);
  const [arrayOfScores, setArrayOfScores] = useState([]);

  //function establishes the time that it takes for the real timer to begin.
  function timingUsed() {
    var randomNumber = Math.floor(Math.random() * 4000) + 500;
    setTimeout(Ready, randomNumber);
  }

  const Ready = () => {
    setHidden(false);
  };

  const interval = useRef(null);

  const startCounter = () =>
    (interval.current = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 10));

  // holds onto each score;
  const myScores = () => {

  let newState = [...arrayOfScores, seconds];
  setArrayOfScores(newState);

   setSession(session + 1);
  } 
  

  const stopCounter = () => clearInterval(interval.current);

  //startCounter on load - because hidden is set to false and on changes to "hidden";



  useEffect(() => {
    setAverage(((total / (session - 1)).toFixed(2)));
  }, [total]);

  

  useEffect(() => {
    if (hidden) {
      stopCounter();
      setTotal(total+seconds); 
      myScores();
    } else {
      setSeconds(0)
      startCounter();
      setColor(getRandomColor());
    }
  }, [hidden]);

  //This function helps to control placement of the square
  const rando = () => {
    return Math.floor(Math.random() * 60) + 30;
  };

  const rando2 = () => {
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

  //This function is the onPress function. What happens when the square appearing is clicked.

  const move = () => {
    setHidden(true);
    
    setX(() => rando2() + "%");
    setY(() => rando() + "%");

   
    if (session < 8) {
      timingUsed();
    }
  };

  return (
    <SafeAreaView style={styles.contatiner2}>
      <Text style={styles.text}>Your Reaction Time:</Text>
      <Text style={styles.text}>{seconds}</Text>

      <Text style={styles.text}>Average:</Text>
      <Text style={styles.text}>{average > 2 ? average : " "}</Text>
      <Text style={styles.text}>Total Time:</Text>
      <Text style={styles.text}>{total}</Text>
      <Text style={styles.text}>Completed {session-1}/8: </Text>
      <Text style={styles.text}>
        {arrayOfScores.map((num) => (
          <Text style={styles.text}> {num} </Text>
        ))}
      </Text>

      {session < 9 ? (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              move();
            }}
            style={{
              opacity: hidden ? "0%" : "100%",
              marginTop: y,
              marginLeft: x,
              height: hidden ? 0 : 100,
              width: 100,
              backgroundColor: color,
            }}
          ></TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}></View>
      )}
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    maxWidth: "100%",
    margin: "auto",
    padding: 10,
    position: "relative",
    height: "80%",
  },
  text: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 17,
    color: "white",
    backgroundColor: "black",
  },
});

// Basic Example:

// import React, {useState, useRef, useEffect} from "react";
// import {
//   Text,
//   View,
//   Button,
// } from "react-native";

// const Game = () => {
//     const [seconds, setSeconds] = useState(0);
//     const interval = useRef(null);

//     const startCounter = () =>
//       (interval.current = setInterval(() => {
//         setSeconds((prevState) => prevState + 1);
//       }, 10));

//     const stopCounter = () => clearInterval(interval.current);

//         return (
//           <View>
//             <View>
//               <Text id="time-left">{seconds}</Text>
//             </View>
//             <View>
//               <Button
//                 title="Start"
//                 id="start_stop"
//                 onPress={startCounter}
//               >
//                 Start/Stop
//               </Button>
//               <Button
//                 title="Stop"
//                 id="stop"
//                 onPress={stopCounter}
//               >
//                 Stop
//               </Button>
//             </View>
//           </View>
//         );

// }
// export default Game;
