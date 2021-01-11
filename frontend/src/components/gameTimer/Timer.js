import React, { useEffect, useState, useRef, useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Platform,
} from "react-native";


const Timer = ({hidden, setTotal, total, session, arrayOfScores, setArrayOfScores, setSession, setColor}) => {
 const [seconds, setSeconds] = useState(0);

   const getRandomColor = () => {
     var letters = "3456789AB".split("");
     var colorNumbers = "#";
     for (var i = 0; i < 6; i++) {
       colorNumbers += letters[Math.round(Math.random() * 8)];
     } //ends for loop
     return colorNumbers;
   };

 useEffect(() => {
   if (hidden) {
     stopCounter();
     setTotal(total + seconds);
     myScores();
   } else {
     setSeconds(0);
     startCounter();
     setColor(getRandomColor());
   }
 }, [hidden]);

 const stopCounter = () => clearInterval(interval.current);

 const interval = useRef(null);

 const startCounter = () =>
   (interval.current = setInterval(() => {
     setSeconds((prevState) => prevState + 1);
   }, 10));


 const myScores = () => {
   if (session < 9) {
     let newState = [...arrayOfScores, seconds];
     setArrayOfScores(newState);
     setSession(session + 1);
   }
 };
return (
<Text>{seconds}</Text>

);

};


export default Timer;

const styles = StyleSheet.create({
  
});
