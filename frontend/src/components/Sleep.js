import React, { useEffect, useContext, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
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

const Sleep = ({ navigation }) => {
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

          if (newData.text1 > 0) {
            setYourData((arr) => {
              return [...arr, newData];
            });
            maximumArray.push(newData.speed);
            selfAssessArray.push(newData.text1);
            let newObject = {};
            newObject.x = newData.text1;
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
              ") the data could be suggesting a positive correlation between the time it takes you to react and how active you've been."
          );
        } else if (slopeRound < 0) {
          setExplanation(
            "Because the Blue Line has a negative slope (" +
              slopeRound +
              ") the data could be suggesting a negative correlation between the time it takes you to react and how active you've been."
          );
        } else {
          setExplanation(
            "Because the Blue Line has a zero slope (" +
              slopeRound +
              ") the data could be suggesting that there is no correlation between the time it takes you to react and how active you've been."
          );
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    populate();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container2}>
      <View style={styles.center}>
        <TouchableOpacity style={styles.middle}>
          <Text style={styles.text2}>Sleep</Text>
          <Text style={styles.text5}>_________________________</Text>
          {orderedPairArray.length > 1 && yForHundred ? (
            <Text style={styles.text4}>{explanation}</Text>
          ) : (
            <Text style={styles.text4}>
              {" "}
              "To this point you have not provided enough data for us to see if
              we can conclude connections between the given factors and Reaction
              Time. Click 'Other Results', 'Return', and 'Play Game' to begin
              the process."
            </Text>
          )}
        </TouchableOpacity>
        <View style={styles.chart}>
          <VictoryChart
            padding={{ left: 70, top: 10, right: 50, bottom: 50 }}
            width={350}
            height={250}
            theme={VictoryTheme.material}
            domain={{ x: [0, 100], y: [0, maxOfYAxis * 4] }}
          >
            {orderedPairArray.length > 1 && yForHundred ? (
              <VictoryLine
                width={400}
                style={{
                  data: { stroke: "#004fff", strokeWidth: 5 },
                  parent: { border: "2px solid #ccc" },
                  labels: { fontSize: 22, fill: "#004fff" },
                }}
                data={[
                  { x: 2, y: yForTwo },
                  { x: 100, y: yForHundred },
                ]}
              />
            ) : null}
            <VictoryAxis
              orientation="bottom"
              offsetY={50}
              scale="time"
              standalone={false}
              style={{
                axisLabel: {
                  fill: "white",
                  fontSize: 18,
                  padding: 30,
                  margin: 20,
                },
                tickLabels: {
                  fill: "white",
                  fontSize: 15,
                },
              }}
              tickValues={[2, 25, 50, 75, 100]}
              tickFormat={["Not Active", "", "", "", "Very Active"]}
            />

            <VictoryAxis
              dependentAxis
              offsetX={75}
              label="Reaction Time"
              standalone={false}
              tickValues={[
                maxOfYAxis,
                maxOfYAxis * 2,
                maxOfYAxis * 3,
                maxOfYAxis * 4,
              ]}
              style={{
                axisLabel: { fill: "white", fontSize: 18, padding: 55 },
                tickLabels: {
                  fill: "white",
                  fontSize: 18,
                },
              }}
            />

            <VictoryScatter
              style={{ data: { fill: "#004fff" } }}
              size={7}
              data={orderedPairArray}
              labels={({ datum }) =>
                `Self Rating: ${datum.x}, Speed: ${datum.y}`
              }
              labelComponent={
                <VictoryTooltip
                  style={{
                    fontSize: 20,
                  }}
                  constrainToVisibleArea
                  dy={0}
                  centerOffset={{ y: -80 }}
                  renderInPortal={false}
                />
              }
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
      </View>
    </SafeAreaView>
  );
};

export default Sleep;

const styles = StyleSheet.create({
  container3: {
    alignItems: "center",
    backgroundColor: "black",
    flex: 0.27,
  },

  text2: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
    marginRight: 0,
    marginLeft: 0,
    backgroundColor: "black",
  },
  middle: {
    alignItems: "center",
    flex: 0.8,
    marginTop: 40,
    backgroundColor: "black",
    marginLeft: 20,
    marginRight: 20,
  },
  chart: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    flexDirection: "column",
  },
  btn: {
    borderColor: "#167bff",
    borderWidth: 1,
    width: 150,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    color: "white",
    margin: 5,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  text4: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  text5: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
});
