import React, { useEffect, useContext, useState } from "react";
import { firebase } from "../firebase/config.js";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  VictoryChart,
  VictoryScatter,
  VictoryTheme,
  VictoryAxis,
  VictoryTooltip,
} from "victory-native";
import emailContext from "../emailContext.js";

const Exercise = ({ navigation }) => {
  const { emailGlobal } = useContext(emailContext);
  const [yourData, setYourData] = useState([]);
  const [maxOfYAxis, setMaxOfYAxis] = useState(0);
  const [orderedPairArray, setOrderedPairArray] = useState([]);

  const populate = () => {
    let maximumArray = [];
    return firebase
      .firestore()
      .collection("Performance")
      .where("data.email", "==", emailGlobal)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
        
          let newData = doc.data().data;

          if (newData.text4 > 0) {
              setYourData((arr) => {
                return [...arr, newData];
              });
            maximumArray.push(newData.speed);
            let newObject = {};
            newObject.x = newData.text4;
            newObject.y = newData.speed;

            setOrderedPairArray((arr) => {
              return [...arr, newObject];
            });
          }
        });

        let maxi = Math.max(...maximumArray)/4;
        let adjustedMax = Math.ceil((maxi+(maxi*(.1)))/10)*(10);
        setMaxOfYAxis(adjustedMax);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    populate();
  }, []);
  console.log("ordered ", maxOfYAxis);
  return (
    <SafeAreaView style={styles.container2}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.middle}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            source={{
              uri:
                "/Users/matt/Desktop/HTML-JS/BootCampWork/ReactNativeBrainGaugeFolder/frontend/assets/brain.png",
            }}
            style={styles.img}
          />

          <Text> {"\n"} </Text>
          <Text style={styles.text2}>Exercise</Text>

          <View style={styles.divider_bar}></View>
        </TouchableOpacity>
        <View style={styles.chart}>
          <VictoryChart
            padding={{ left: 70, top:10, right: 50, bottom: 50 }}
            width={350}
            height={250}
            theme={VictoryTheme.material}
            domain={{ x: [0, 100], y: [0, maxOfYAxis * 4] }}
          >
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
                />
              }
            />
          </VictoryChart>
          <View style={styles.container3}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.toggleDrawer()}
              // onPress={this.signUp}
            >
              <Text accessibilityLabel="Sign In" style={styles.text}>
                Other Results
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  container3: {
    alignItems: "center",
    backgroundColor: "red"
  },

  divider_bar: {
    marginRight: 200,
    width: "100%",
    backgroundColor: "#FAD9C5",
    height: 1,
    marginTop: 20,
  },

  img: {
    width: "100%",
    height: 120,
    borderRadius: 5,
  },
  text2: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
  },
  middle: {
    width: 200,
    flex: 1,
    marginTop: 40,
  },
  chart: {
    flex: 2,
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
});
