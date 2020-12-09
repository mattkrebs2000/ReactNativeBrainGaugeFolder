import React, { useEffect } from "react";
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
  VictoryTooltip
} from "victory-native";

const Exercise = ({navigation}) => {
  console.log("Exercise");
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
            width={350}
            theme={VictoryTheme.material}
            domain={{ x: [0, 100], y: [0, 7] }}
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
              offsetX={55}
              label="Reaction Time"
              standalone={false}
              style={{
                axisLabel: { fill: "white", fontSize: 18, padding: 40 },
                tickLabels: {
                  fill: "white",
                  fontSize: 18,
                },
              }}
            />

            <VictoryScatter
              style={{ data: { fill: "#004fff" } }}
              size={7}
              data={[
                { x: 90, y: 2 },
                { x: 36, y: 3 },
                { x: 32, y: 5 },
                { x: 48, y: 4 },
                { x: 89, y: 7 },
              ]}
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
          <View style={styles.container}>
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
    padding: 10,
    flex: 1,
    marginTop: 40,
  },
  chart: {
    width: 330,
    padding: 10,
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
