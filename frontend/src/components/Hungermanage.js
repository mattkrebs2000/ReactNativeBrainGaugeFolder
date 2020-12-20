import React, { useEffect, useContext, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { firebase } from "../firebase/config.js";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import emailContext from "../emailContext.js";

const Appetitemanage = ({ navigation }) => {
  const { emailGlobal } = useContext(emailContext);
  const [yourData, setYourData] = useState([]);


  const isFocused = useIsFocused();

  const populate = () => {
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

          if (newData.text3 > 0) {
            setYourData((arr) => {
              return [...arr, newData];
            });
            maximumArray.push(newData.speed);
            selfAssessArray.push(newData.text3);
            let newObject = {};
            newObject.x = newData.text3;
            newObject.y = newData.speed;

           
          }
        });
        let totalSpeed = maximumArray.length;
        let totalAssess = selfAssessArray.length;
        let sumSpeed = maximumArray.reduce((a, b) => a + b);
        let sumSelfAssess = selfAssessArray.reduce((a, b) => a + b);
        let aveSpeed = sumSpeed / totalSpeed;
        let aveSelfAssess = sumSelfAssess / totalAssess;

 

        console.log(
          "MaximumArray",
          maximumArray,
          "SelfAssessArray",
          selfAssessArray,
          "TotalSpeed",
          totalSpeed,
          "TotalAssess",
          totalAssess,
          "SumSpeed",
          sumSpeed,
          "sumSelfAssess",
          sumSelfAssess,
          "aveSpeed",
          aveSpeed,
          "aveSelfAssess",
          aveSelfAssess,
        );

      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    console.log("UseEffect");
    populate();
  }, [isFocused]);
  console.log(yourData);
  return (
    <SafeAreaView style={styles.container2}>
      <View style={styles.center}>
        <TouchableOpacity style={styles.middle}>
          <Text style={styles.text2}>Appetite Manage</Text>
          <Text style={styles.text5}>_________________________</Text>

          <Text style={styles.text4}>"HEELLO</Text>
        </TouchableOpacity>
        <View style={styles.chart}>
        
         <Text>
            {yourData.map((info, i) => (
            
              <Text key={i} style={styles.text4}>
              <Text> Hello</Text>
              <Text>{info.text3}</Text>
            </Text>
            ))}
          </Text>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.toggleDrawer()}
          >
            <Text accessibilityLabel="Sign In" style={styles.text}>
              Other Data
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Appetitemanage;

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
    backgroundColor: "red",
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
