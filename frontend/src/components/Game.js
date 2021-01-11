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
import emailContext from "../emailContext.js";
import Timer from "./gameTimer/Timer";
import birthdateContext from "../birthdateContext.js";
import { firebase } from "../firebase/config.js";
const currentDayNumber = require("current-day-number");

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

  useEffect(() => {
    setAverage((total / (session - 1)).toFixed(2));
  }, [total]);

  //This function helps to control placement of the square
  const rando = () => {
    return Math.floor(Math.random() * 45) + 5;
  };

  const rando2 = () => {
    return Math.floor(Math.random() * 60) + 10;
  };

  const move = () => {
    console.log("session", session)
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

const getDaysInAYear = () => {

  if (emailGlobal.length>3){


  const check = new Date();
  const dayInYear = check.getFullYear();
  
		if( (0 == dayInYear % 4) && (0 != dayInYear % 100) || (0 == dayInYear % 400) )
		{
		return 366;
		}
		else
		{
		return 365;
    }
  } else {
    return 365; 
  }
  }

  const ageOfGame = () => {
    const timeofgame = new Date() / 1000;
    const object = new Object();
    const birth = new Date(birthdateGlobal);
    const check = new Date();
    const dayInWeek = check.getDay();
    const day = check.getDate();
    const month = check.getMonth() + 1;
    const year = check.getFullYear();
    const hours = regTime();
    const minutes = minutess();
    const pmam = pmoram();
    object.Timestamp = timeofgame;
    object.Time = hours + ":" + minutes + " " + pmam;
    object.Today = month + "/" + day + "/" + year;

    const milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;
    const ageInDays = (check - birth) / milliDay;
    object.age = Math.round((ageInDays / 365) * 100000) / 100000;
    object.Day =
      ((check.getHours() * 60 + check.getMinutes()) * 60 + check.getSeconds()) / 86400;
    object.Week =
      (dayInWeek +
        ((check.getHours() * 60 + check.getMinutes()) * 60 +
          check.getSeconds()) /
          86400) / 7;

           object.Year =
        ((currentDayNumber() +
          ((check.getHours() * 60 + check.getMinutes()) * 60 +
            check.getSeconds()) /
            86400) / getDaysInAYear());

    return object;
  };

  const Submit = () => {
    const data = {
      timestamp: ageOfGame().Timestamp,
      currentTime: ageOfGame().Time,
      currentDate: ageOfGame().Today,
      currentAge: ageOfGame().age,
      timeElapsedInADay: ageOfGame().Day,
      timeElapsedInAWeek: ageOfGame().Week,
       timeElapsedInAYear: ageOfGame().Year,
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
if (emailGlobal.length>3){
    return firebase
      .firestore()
      .collection("Performance")
      .doc(data.id)
      .set({ data })
      .then((docRef) => {
           navigation.navigate("Profile");
      })
      .catch((error) => {
        alert(error);
      });
    } else {

      alert(
        "Your results will not be appearing because you are touring as a 'guest'. To begin recording data, create an account then sign in."
      ),
        navigation.navigate("CreateAccount");
    }
  };

  return (
    <SafeAreaView style={styles.contatiner2}>
      <Text style={styles.top}>Your Reaction Time:</Text>
      <Text style={styles.text}>{seconds}</Text>

      <Text style={styles.text}><Timer hidden={hidden} setTotal={setTotal} total={total} session={session} arrayOfScores={arrayOfScores} setArrayOfScores={setArrayOfScores} setSession={setSession} setColor={setColor}/></Text>

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
            style={{
              opacity: hidden ? "0%" : "100%",
              marginTop: y,
              marginLeft: x,
              height: hidden ? 0 : 100,
              width: 100,
              backgroundColor: color,
            }}
            onPress={() => {
              move();
            }}
          ></TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container3}>
          <View style={styles.container4}>
            <Text style={styles.text2}>
              {" "}
              Click Brain Gauge logo to log this entry and see how these results
              compare with your previous entries.{" "}
            </Text>
            <TouchableOpacity onPress={() => Submit()}>
              <Image
                id="resultspage"
                source={{
                  uri:
                    "https://github.com/mattkrebs2000/ReactNativeBrainGaugeFolder/blob/master/frontend/assets/brain.png?raw=true",
                }}
                alt="description of image"
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Text style={styles.text3}>
                Click Here if you do not want to include these results.
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
    width: 115,
    height: 90,
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
