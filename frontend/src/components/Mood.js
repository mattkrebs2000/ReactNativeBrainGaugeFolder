import React from "react";


import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { VictoryContainer, VictoryChart, VictoryScatter, VictoryTheme, VictoryAxis, VictoryLegend } from "victory-native";

const Mood = () => {

// const [options, setOptions] = useState({
//   grid: {
//     padding: {
//       left: 10,
//     },
//   },
//   chart: {
//     height: 350,
//     type: "line",
//     toolbar: {
//       show: true,

//       offsetX: 0,
//       offsetY: 0,
//       tools: {
//         download: false,

//         selection: true,
//         zoom: true,
//         zoomin: true,
//         zoomout: true,
//         pan: true,
//         reset: true | '<img src="/static/icons/reset.png" width="20">',
//         customIcons: [],
//       },
//       autoSelected: "zoom",
//     },
//   },
//   fill: {
//     type: "solid",
//   },
//   markers: {
//     size: [6, 0],
//   },
//   tooltip: {
//     shared: false,
//     intersect: true,
//     fillSeriesColor: true,
//     theme: true,
//     style: {
//       fontSize: "20px",
//       colors: "#000",
//     },
//   },
//   legend: {
//     show: true,
//     labels: {
//       colors: "white",
//       useSeriesColors: true,
//     },
//     fontSize: "20",
//   },
//   xaxis: {
//     axisTicks: {
//       show: true,
//       height: 5,
//       width: "100%",
//       offsetX: 0,
//       offsetY: 0,
//     },
//     labels: {
//       offsetY: -3,
//       style: {
//         fontSize: "15",
//         colors: "white",
//         padding: "50",
//       },
//     },

//     type: "numeric",
//     min: 0,
//     max: 5,
//     tickAmount: 5,
//     title: {
//       text: "1.0 = Very Tired; 5.0 = Wide Awake",
//       margin: 100,
//       floating: false,
//       style: {
//         color: "#FFF",
//         fontSize: window.innerWidth > 540 ? 20 : 15,
//         cssClass: "animal",
//       },
//     },
//   },
//   yaxis: {
//     labels: {
//       style: {
//         fontSize: "15",
//         colors: "white",
//       },
//     },
//     title: {
//       text: "Reaction Time",
//       style: {
//         color: "white",
//         fontSize: "20",
//         cssClass: "animal",
//       },
//     },

//     type: "numeric",
//     min: 0,

//     tickAmount: window.innerWidth > 640 ? 5 : 4,
//   },
// }); 

// const [series, setSeries] = useState([
//   {
//     name: "Reaction Time",
//     type: "scatter",
//     //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
//     data: [],
//   },
// ]);



//   const navigation = useNavigation();

  console.log("Mood");
  return (
    <SafeAreaView style={styles.container2}>
      <View style={styles.container}>
        <Text style={styles.text}>Mood</Text>

        <View style={styles.middle}>
        

            <VictoryChart
              width={350}
              theme={VictoryTheme.material}
              domain={{ x: [0, 100], y: [0, 7] }}
            >
              <VictoryAxis
                orientation="bottom"
                label="more upset -------- not upset"
                offsetY={50}
                scale="time"
                standalone={false}
                style={{
                  axisLabel: {
                    fill: "#004fff",
                    fontSize: 18,
                    padding: 30,
                    margin: 20,
                  },
                  tickLabels: {
                    fill: "#004fff",
                    fontSize: 18,
                  },
                }}
              />

              <VictoryAxis
                dependentAxis
                offsetX={55}
                label="Reaction Time"
                standalone={false}
                style={{
                  axisLabel: { fill: "#004fff", fontSize: 18, padding: 40 },
                  tickLabels: {
                    fill: "#004fff",
                    fontSize: 18,
                  },
                }}
               
              />

              <VictoryScatter
                style={{ data: { fill: "red" } }}
                size={7}
                data={[
                  { x: 90, y: 2 },
                  { x: 36, y: 3 },
                  { x: 32, y: 5 },
                  { x: 48, y: 4 },
                  { x: 89, y: 7 },
                ]}
              />
            </VictoryChart>
    
        </View>

        <Text style={styles.text2}>
          This is the App that measures your mental responsiveness and tells you
          when you are at your best.
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("CreateAccount")}
            // onPress={this.signUp}
          >
            <Text
              accessibilityLabel="Sign In"
              style={styles.text3}
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}

            // onPress={this.signUp}
          >
            <Text
              accessibilityLabel="Sign Up"
              style={styles.text3}
              onPress={() => {
                navigation.navigate("CreateAccount");
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Mood;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 40,
    marginBottom: 30,
  },
  img: {
    width: "100%",
    height: 150,
    borderRadius: 5,
  },
  text2: {
    color: "white",
    margin: "12%",
    textAlign: "center",
    justifyContent: "flex-start",

    fontSize: 15,
  },
  middle: {
  
  width: 350,
  padding:10,
  },
  btn: {
    borderColor: "#167bff",
    borderWidth: 1,
    width: 100,
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
  text3: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
