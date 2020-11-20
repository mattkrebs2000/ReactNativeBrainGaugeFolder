import React, {useState, useRef, useEffect} from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

const Game = () => {

    const [seconds, setSeconds] = useState(0);

    const interval = useRef(null);

    useEffect(() => {
      if (seconds === 60) stopCounter();
    }, [seconds]);

    const startCounter = () =>
      (interval.current = setInterval(() => {
        setSeconds((prevState) => prevState + 1);
      }, 10));

    const stopCounter = () => clearInterval(interval.current);









  //    constructor(props){
//         super(props) 
//                 this.state = {
//                     break : 5,
//                     session : 25,
//                     count : 1,
//                 }
       
//         this.handleStartStop = this.handleStartStop.bind(this);
//     }
    
 


//     handleStartStop() {
//     this.timer = setInterval(() => this.setState(prevState => {
       
//         if (prevState.count === 0) return null;

//         return {
//             count: prevState.count + 1,
           

//         };
//       }), 10);
//       console.log(this.timer);
      
// }
   

// Stop() {
//  console.log(this.timer)
// };

//     handleReset(){
        
//     }
//     render(){
//         let count; 
//         if(this.state.count) {
//             count = this.state.count
//           }
        return (
          <View>
            <View>
              <Text id="time-left">{seconds}</Text>
            </View>
            <View>
              <Button
                title="Start"
                id="start_stop"
                onPress={startCounter}
              >
                Start/Stop
              </Button>
              <Button
                title="Stop"
                id="stop"
                onPress={stopCounter}
              >
                Stop
              </Button>
            </View>
          </View>
        );
    
}



export default Game;




// import React, { useEffect, useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   TouchableOpacity,
//   Text,
// } from "react-native";


// const Game = ({ score, setScore }) => {
//   const [x, setX] = useState(157);
//   const [y, setY] = useState(0);
//   const [hidden, setHidden] = useState(false);
//   const [startTime, setStartTime] = useState(1000);
//   const [click, setClick] = useState(0);
//   const [color, setColor] = useState("");
//   const [userResult, setUserResult] = useState([]);
//   const [converted, setConverted] = useState(0);
//   const [pos, setPos] = useState(0);


//   useEffect(() => {
//     const interval = setInterval(() => {
//      setPos(++)
//     }, 1000);
//     return () => Clearthis(interval);
//   }, []);

//   //function establishes the time that it takes for the real timer to begin.

//   // function timingUsed() {
//   //   var randomNumber = Math.floor(Math.random() * 4000) + 500;
//   //   setTimeout(Ready, randomNumber);
//   // }

//   // Function that gets initiated by timingUsed... It is the delayed function that uses SetInterval to start function "rerun" frame.

//   // function Ready() {

//   //   startedMotion = setInterval(frame, 10);
//   // }

//   //This function gets rerun every .100th of a second.

//   // function frame() {
//   //   setPos(pos++);
//   // }

//   //This function stops the "startedMotion"

//   function Clearthis() {
//     clearInterval(startedMotion);
//     setPos(0);
//   }

//   useEffect(() => {
//     timingUsed();
//   }, []);

//   // const randoInterval = () => {
//   //   const randomNumber = Math.floor(Math.random() * 4000) + 500;
//   //   setTimeout(() => {
//   //     setHidden(false);
//   //     startedMotion = setInterval(frame, 10);
//   //   }, randomNumber);
//   // };

 
//   //This function helps to control placement of the square
//   const rando = () => {
//     return Math.floor(Math.random() * 60) + 10;
//   };

//   //This function creates unique colors Ex: #234432;

//   const getRandomColor = () => {
//     var letters = "0123456789ABCDEF".split("");
//     var colorNumbers = "#";
//     for (var i = 0; i < 6; i++) {
//       colorNumbers += letters[Math.round(Math.random() * 15)];
//     } //ends for loop

//     return colorNumbers;
//   };

//   //This function is the OnClick function. What happens when the square appearing is clicked.

//   const move = () => {
//     Clearthis();
//     // clearInterval(startedMotion);
    
//     setConverted(startTime);
//     const trackScore = converted;
//     const temparray = userResult;
//     temparray.push(trackScore);
//     setClick(click + 1);
//     setX(() => rando() + "%");
//     setY(() => rando() + "%");
//     setUserResult(temparray);
//     setStartTime(0);
//     setHidden(true);
//     setScore(score + trackScore);

//     const randomNumber = Math.floor(Math.random() * 4000) + 500;
//     // const starting = setTimeout(ReRun, randomNumber);

//     var num = score / 8;
//     var SuperNumber = num.toFixed(3);
//     console.log("Your score", SuperNumber);

//     if (click === 8) {
//       clearTimeout(starting);
//     }
//     console.log(temparray, "tempArray");
//   };
//   console.log("Game", hidden);

//   // useEffect(() => {
//   //   setColor(getRandomColor);
//   //   console.log("this is the color", color);
//   // }, []);

//   return (
//     <SafeAreaView style={styles.contatiner2}>
//       <Text style={{ color: "white", backgroundColor: "black" }}>
//         score={score}
//       </Text>
//       <Text style={{ color: "white", backgroundColor: "black" }}>
//         startTime={startTime}
//       </Text>
//       <Text style={{ color: "white", backgroundColor: "black" }}>
//         click={click}
//       </Text>
//       <Text style={{ color: "white", backgroundColor: "black" }}>
//         pos={pos}
//       </Text>
//       <Text style={{ color: "white", backgroundColor: "black" }}>
//         Your reaction speed:{" "}
//         {!!userResult[userResult.length - 1]
//           ? userResult[userResult.length - 1].toFixed(2)
//           : null}{" "}
//         seconds{" "}
//       </Text>

//       <View style={styles.container}>
//         <TouchableOpacity
//           onPress={() => {
//             console.log("ITCLICKED");
//             move();
//           }}
//         >
//           <View
//             style={{
//               opacity: hidden ? "0%" : "100%",
//               marginTop: 30,
//               marginTop: y,
//               marginLeft: x,
//               height: hidden ? 0 : 100,
//               width: 100,
//               backgroundColor: getRandomColor(),
//             }}
//           ></View>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };;

// export default Game;

// const styles = StyleSheet.create({
//   container: {
//     height: "100%",
//     backgroundColor: "black",
//   },

//   container2: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "black",
//     maxWidth: "100%",
//     margin: "auto",
//     padding: 10,
//     position: "relative",
//     height: "80%",
//   },
// });
