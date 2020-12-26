import React, { useEffect, useState, useRef, useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import emailContext from "../emailContext.js";
import birthdateContext from "../birthdateContext.js";
import { firebase } from "../firebase/config.js";

const Game = ({
  average,
  setAverage,
  navigation,
  value1,
  value2,
  value3,
  value4,
}) => {
  const { emailGlobal, setEmailGlobal } = useContext(emailContext);
  const { birthdateGlobal } = useContext(birthdateContext);

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
    if (session < 9) {
      let newState = [...arrayOfScores, seconds];
      setArrayOfScores(newState);
      setSession(session + 1);
    }
  };

  const stopCounter = () => clearInterval(interval.current);

  //startCounter on load - because hidden is set to false and on changes to "hidden";

  useEffect(() => {
    setAverage((total / (session - 1)).toFixed(2));
  }, [total]);

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

  //This function helps to control placement of the square
  const rando = () => {
    return Math.floor(Math.random() * 60) + 30;
  };

  const rando2 = () => {
    return Math.floor(Math.random() * 60) + 10;
  };

  //This function creates unique colors Ex: #234432;

  const getRandomColor = () => {
    var letters = "3456789AB".split("");
    var colorNumbers = "#";
    for (var i = 0; i < 6; i++) {
      colorNumbers += letters[Math.round(Math.random() * 8)];
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

  const minutess = () => {
    let check = new Date();

    if (check.getMinutes() > 10) {
      return check.getMinutes();
    } else {
      return "0" + check.getMinutes();
    }
  };

  const pmoram = () => {
    let check = new Date();
    if (check.getHours() < 12) {
      return "am";
    } else {
      return "pm";
    }
  };

  const regTime = () => {
    let check = new Date();
    let newnumber = check.getHours();
    if (check.getHours() < 13) {
      return newnumber;
    } else {
      return newnumber - 12;
    }
  };

  const dayOfWeek = () => {
    const check = new Date();
    const dayInWeek = check.getDay();

    switch (true) {
      case dayInWeek === 0:
        return "Sunday";
      case dayInWeek === 1:
        return "Monday";
      case dayInWeek === 2:
        return "Tuesday";
      case dayInWeek === 3:
        return "Wednesday";
      case dayInWeek === 4:
        return "Thursday";
      case dayInWeek === 5:
        return "Friday";
      case dayInWeek === 6:
        return "Saturday";
    }
  };

  const ageOfGame = () => {
    const object = new Object();
    const birth = new Date(birthdateGlobal);
    const check = new Date();
    const dayInWeek = check.getDay();
    const day = check.getDate();
    const month = check.getMonth();
    const year = check.getFullYear();
    const hours = regTime();
    const minutes = minutess();
    const pmam = pmoram();
    object.Time = hours + ":" + minutes + " " + pmam;
    object.Today = month + "/" + day + "/" + year;

    const milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;
    const ageInDays = (check - birth) / milliDay;
    object.age = Math.round((ageInDays / 365) * 100000) / 100000;
    object.Day =
      ((check.getHours() * 60 + check.getMinutes()) * 60 + check.getSeconds()) /
      86400;
    object.Week =
      (dayInWeek +
        ((check.getHours() * 60 + check.getMinutes()) * 60 +
          check.getSeconds()) /
          86400) /
      7;

    return object;
  };

  const Submit = () => {
    const data = {
      currentTime: ageOfGame().Time,
      currentDate: ageOfGame().Today,
      currentAge: ageOfGame().age,
      timeElapsedInADay: ageOfGame().Day,
      timeElapsedInAWeek: ageOfGame().Week,
      DayOfWeek:dayOfWeek(),
      birthdate: birthdateGlobal,
      email: emailGlobal,
      speed: Number(average),
      text1: value1,
      text2: value2,
      text3: value3,
      text4: value4,
      id: firebase.firestore().collection("Performance").doc().id,
    };

    return firebase
      .firestore()
      .collection("Performance")
      .doc(data.id)
      .set({ data })
      .then((docRef) => {
        // console.log("Document written with Id: ", docRef.id);
        navigation.navigate("Profile");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView style={styles.contatiner2}>
      <Text style={styles.top}>Your Reaction Time:</Text>
      <Text style={styles.text}>{seconds}</Text>

      <Text style={styles.text}>Average:</Text>
      <Text style={styles.text}>{average > 2 ? average : " "}</Text>
      <Text style={styles.text}>Total Time:</Text>
      <Text style={styles.text}>{total}</Text>
      <Text style={styles.text}>Completed {session - 1}/8: </Text>
      <Text style={styles.text}>
        {arrayOfScores.map((num, i) => (
          <Text key={i} style={styles.text}>
            {" "}
            {num}{" "}
          </Text>
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
        <View style={styles.container3}>
          <View style={styles.container4}>
            <Text style={styles.text2}>
              {" "}
              Click Red Button to log this entry and see how these results
              compare with your previous entries.{" "}
            </Text>
            <TouchableOpacity onPress={() => Submit()}>
              <Image
                id="resultspage"
                source={{
                  uri:
                    "https://www.freepnglogos.com/uploads/button-png/red-button-circle-image-pixabay-20.png",
                }}
                alt="description of image"
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.text3}>
                Click Here if you do not want to include these results and To
                Log Out.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  text2: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 17,
    color: "white",
    backgroundColor: "black",
    paddingTop: 50,
    padding: 20,
  },
  text3: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 17,
    color: "white",
    backgroundColor: "black",
    paddingTop: 20,
    padding: 40,
  },
  top: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 17,
    color: "white",
    backgroundColor: "black",
    paddingTop: 10,
  },
  image: {
    width: 200,
    height: 200,
  },

  container3: {
    height: "100%",
    backgroundColor: "black",
    alignItems: "center",
  },
  container4: {
    alignItems: "center",
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
