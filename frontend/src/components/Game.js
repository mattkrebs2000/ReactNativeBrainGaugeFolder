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
  const [click, setClick] = useState(1);
  const [seconds, setSeconds] = useState(0);
   const [color, setColor] = useState("");


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPos(+1);
  //   }, 1000);
  //   return () => Clearthis(interval);
  // }, []);

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
      setSeconds((prevState) => prevState + 1)
    }, 10));

  const stopCounter = () => clearInterval(interval.current);

  //startCounter on load;

  useEffect(() => {
    if (hidden) {
      
      stopCounter();
    } else {
      startCounter();
      setColor(getRandomColor());
    }
  }, [hidden]);

  //This function stops the "startedMotion"

  //

  // useEffect(() => {
  //   timingUsed();
  // }, []);

  // const randoInterval = () => {
  //   const randomNumber = Math.floor(Math.random() * 4000) + 500;
  //   setTimeout(() => {
  //     setHidden(false);
  //     startedMotion = setInterval(frame, 10);
  //   }, randomNumber);
  // };

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
return colorNumbers
  };

  //This function is the OnClick function. What happens when the square appearing is clicked.

  const move = () => {
    setHidden(true);
    setClick(click + 1);
    setX(() => rando() + "%");
    setY(() => rando() + "%");
    setAverage(seconds / click);
    if (click < 8) {
      timingUsed();
    }
  };
 

  return (
    <SafeAreaView style={styles.contatiner2}>
      <Text style={{ color: "white", backgroundColor: "black" }}>
        click={click}
      </Text>
      <Text style={{ color: "white", backgroundColor: "black" }}>
        seconds={seconds}
      </Text>
      <Text style={{ color: "white", backgroundColor: "black" }}>
        average={average}
      </Text>
      <Text style={{ color: "white", backgroundColor: "black" }}>color={color}</Text>

      {click < 9 ? (
        <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                move();
              }}
              style={{
                opacity: hidden ? "0%" : "100%",
                marginTop: 30,
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
