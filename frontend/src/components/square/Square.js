import React, { useState } from "react";
import {
    TouchableOpacity,  
  } from "react-native";

import { scale } from 'react-native-size-matters';
  
  const Square = ({setHidden, hidden, color, session}) => {
    const [x, setX] = useState(157);
    const [y, setY] = useState(0);


    function timingUsed() {
        var randomNumber = Math.floor(Math.random() * 4000) + 500;
        setTimeout(Ready, randomNumber);
      }

      const Ready = () => {
        setHidden(false);
      };
    
      const rando = () => {
        return Math.floor(Math.random() * 45) + 5;
      };
    
      const rando2 = () => {
        return Math.floor(Math.random() * 60) + 10;
      };

    const move = () => {
        console.log("session", session);
        setHidden(true);
    
        setX(() => rando2() + "%");
        setY(() => rando() + "%");
    
        if (session < 8) {
          timingUsed();
        }
      };
      
  return (
    <TouchableOpacity
      style={{
        opacity: hidden ? "0%" : "100%",
        marginTop: y,
        marginLeft: x,
        height: hidden ? 0 : scale(75),
        width: scale(75),
        backgroundColor: color,
      }}
      onPress={() => {
        move();
      }}
    ></TouchableOpacity>  
  );
  
  };
  
  
  export default Square;
  