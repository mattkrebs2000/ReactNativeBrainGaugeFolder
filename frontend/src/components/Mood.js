import React, { useEffect, useContext, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { scale, ScaledSheet } from 'react-native-size-matters';

import { firebase } from "../firebase/config.js";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  VictoryChart,
  VictoryScatter,
  VictoryTheme,
  VictoryAxis,
  VictoryTooltip,
  VictoryLine,
} from "victory-native";
import emailContext from "../emailContext.js";
import Spinner from "react-native-loading-spinner-overlay";

const Mood = ({ navigation }) => {
  const [spinning, setSpinning] = useState(false);
  const { emailGlobal } = useContext(emailContext);
  const [yourData, setYourData] = useState([]);

  const [maxOfYAxis, setMaxOfYAxis] = useState(25);
  const [orderedPairArray, setOrderedPairArray] = useState([]);
  const [yForTwo, setYForTwo] = useState(0);
  const [yForHundred, setYForHundred] = useState(0);
  const [explanation, setExplanation] = useState("");

  const isFocused = useIsFocused();

  const populate = () => {
    setOrderedPairArray([]);
    let maximumArray = [];
    let selfAssessArray = [];
    return firebase
      .firestore()
      .collection("Performance")
      .where("data.email", "==", emailGlobal)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let newData = doc.data().data;

          if (newData.text2 > 0) {
            setYourData((arr) => {
              return [...arr, newData];
            });
            maximumArray.push(newData.speed);
            selfAssessArray.push(newData.text2);
            let newObject = {};
            newObject.x = newData.text2;
            newObject.y = newData.speed;

            setOrderedPairArray((arr) => {
              return [...arr, newObject];
            });
          }
        });

        setYourData([]);

        let totalSpeed = maximumArray.length;
        let totalAssess = selfAssessArray.length;
        let sumSpeed = maximumArray.reduce((a, b) => a + b);
        let sumSelfAssess = selfAssessArray.reduce((a, b) => a + b);
        let aveSpeed = sumSpeed / totalSpeed;
        let aveSelfAssess = sumSelfAssess / totalAssess;
        let sumOfXDiff = [];
        let sumOfYDiff = [];
        let sumOfProducts = [];
        let sumOfSquares = [];

        maximumArray.forEach((pieceofdata) => {
          let yData = pieceofdata - aveSpeed;
          sumOfYDiff.push(yData);
        });
        selfAssessArray.forEach((pieceofdata) => {
          let xData = pieceofdata - aveSelfAssess;
          sumOfXDiff.push(xData);
        });

        for (var i = 0; i < maximumArray.length; i++) {
          let products = sumOfYDiff[i] * sumOfXDiff[i];
          sumOfProducts.push(products);
          let squares = sumOfXDiff[i] * sumOfXDiff[i];
          sumOfSquares.push(squares);
        }
        let ySum = sumOfSquares.reduce((a, b) => a + b);
        let xSum = sumOfProducts.reduce((a, b) => a + b);
        let slope = xSum / ySum;
        let slopeRound = Math.round(slope * 1000) / 1000;
        let Yint = aveSpeed - slope * aveSelfAssess;
        setYForTwo(slope * 2 + Yint);
        setYForHundred(slope * 100 + Yint);

        let maxi = Math.max(...maximumArray) / 4;
        let adjustedMax = Math.ceil((maxi + maxi * 0.1) / 10) * 10;
        setMaxOfYAxis(adjustedMax);

        if (slopeRound > 0) {
          setExplanation(
            "Because the Blue Line has a positive slope (" +
              slopeRound +
              ") the data could be suggesting a positive correlation between the time it takes you to react and your mood."
          );
        } else if (slopeRound < 0) {
          setExplanation(
            "Because the Blue Line has a negative slope (" +
              slopeRound +
              ") the data could be suggesting a negative correlation between the time it takes you to react and your mood."
          );
        } else {
          setExplanation(
            "Because the Blue Line has a zero slope (" +
              slopeRound +
              ") the data could be suggesting that there is no correlation between the time it takes you to react and your mood."
          );
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    populate();
  }, [isFocused]);
  useEffect(() => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  }, [explanation]);

  return (
    <SafeAreaView style={styles.container2}>
      <Spinner visible={spinning} textStyle={styles.spinnerTextStyle} />
      <View style={styles.center}>
        <TouchableOpacity style={styles.middle}>
          <Text style={styles.text2}>Mood</Text>
          <Text style={styles.text5}>_________________________</Text>
        </TouchableOpacity>
        <View style={styles.section2}>
          <Text style={styles.text4}>{explanation}</Text>
        </View>
        </View>
        <View style={styles.chart}>
          <VictoryChart
            padding={{ left: scale(70), top: scale(10), right: scale(50), bottom: scale(50) }}
            width={scale(350)}
            height={scale(250)}
            theme={VictoryTheme.material}
            domain={{ x: [0, 100], y: [0, maxOfYAxis * 4] }}
          >
            {orderedPairArray.length > 1 && yForHundred ? (
              <VictoryLine
                width={scale(400)}
                style={{
                  data: { stroke: "#004fff", strokeWidth: scale(5) },
                  parent: { border: "2px solid #ccc" },
                  labels: { fontSize: scale(22), fill: "#004fff" },
                }}
                data={[
                  { x: 2, y: yForTwo },
                  { x: 100, y: yForHundred },
                ]}
              />
            ) : null}
            <VictoryAxis
              orientation="bottom"
              offsetY={scale(50)}
              scale="time"
              standalone={false}
              style={{
                axisLabel: {
                  fill: "white",
                  fontSize: scale(18),
                  padding: scale(30),
                  margin: scale(20),
                },
                tickLabels: {
                  fill: "white",
                  fontSize: scale(15),
                },
              }}
              tickValues={[2, 25, 50, 75, 100]}
              tickFormat={["Very Upset", "", "", "", "Very \r\n Happy"]}
            />

            <VictoryAxis
              dependentAxis
              offsetX={scale(75)}
              label="Reaction Time"
              standalone={false}
              tickValues={[
                maxOfYAxis,
                maxOfYAxis * 2,
                maxOfYAxis * 3,
                maxOfYAxis * 4,
              ]}
              style={{
                axisLabel: { fill: "white", fontSize: scale(18), padding: scale(45) },
                tickLabels: {
                  fill: "white",
                  fontSize: scale(18),
                },
              }}
            />

            <VictoryScatter
              style={{ data: { fill: "#004fff" } }}
              size={scale(7)}
              data={orderedPairArray}
            />
          </VictoryChart>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.toggleDrawer()}
          >
            <Text accessibilityLabel="Sign In" style={styles.text}>
              Other Results
            </Text>
          </TouchableOpacity>
        </View>
      
    </SafeAreaView>
  );
};

export default Mood;

const styles = ScaledSheet.create({
  container3: {
    alignItems: "center",
    backgroundColor: "black",
    flex: 0.20,
  },

  text2: {
    color: "white",
    fontSize: "35@s",
    textAlign: "center",
    marginRight: 0,
    marginLeft: 0,
    backgroundColor: "black",
  },
  middle: {
    alignItems: "center",
    marginTop: "5@s",
    backgroundColor: "black",
    marginLeft: "20@s",
    marginRight: "20@s",
  },
  chart: {
    backgroundColor: "black",
    flex: .9,
    alignItems: "center",
  },
  

  container2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    flexDirection: "column",
    flex:1,
  },
  btn: {
    borderColor: "#167bff",
    borderWidth: "1@s",
    width: "150@s",
    height: "45@s",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: "10@s",
    shadowColor: "white",
    shadowOffset: { width: "1@s", height: "1@s" },
    shadowOpacity: "1@s",
    shadowRadius: "3@s",
    color: "white",
    margin: "5@s",
  },
  text: {
    color: "white",
    fontSize: "20@s",
    textAlign: "center",
  },
  text4: {
    color: "white",
    fontSize: "16@s",
    textAlign: "center",
    justifyContent: "center",
    marginLeft: "5@s",
    marginRight: "5@s",
  },
  text5: {
    color: "white",
    fontSize: "10@s",
    textAlign: "center",
    marginBottom: "5@s",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
  center: {
flex: .7,
width: "100%",
justifyContent: "center",

  },
      spinnerTextStyle: {
        color: "#FFF",
      },
});
