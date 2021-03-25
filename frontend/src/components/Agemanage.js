import React, { useEffect, useContext, useState } from "react";
import { ListItem } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

import { scale, ScaledSheet } from 'react-native-size-matters';

import { firebase } from "../firebase/config.js";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";

import emailContext from "../emailContext.js";

const Agemanage = ({ navigation }) => {
  const { emailGlobal } = useContext(emailContext);
  const [yourData, setYourData] = useState([]);
  const [iddelete, setiddelete] = useState("2");
  const isFocused = useIsFocused();

  useEffect(() => {
    populate();
    setYourData([]);
  }, [isFocused]);

  const deleteItem = () => {
    if (firebase.firestore().collection("Performance").doc(iddelete)) {
      setYourData([]);

      var deleteitem = firebase
        .firestore()
        .collection("Performance")
        .doc(iddelete);

      return deleteitem
        .update({
          "data.currentAge": 0,
        })
        .then(function () {
          populate();
        })
        .catch(function (error) {
          console.error("Error updating document: ", error);
        });
    } else {
      null;
    }
  };

  useEffect(() => {
    if (iddelete.length > 2) {
      deleteItem();
    } else {
      null;
    }
  }, [iddelete]);

  const populate = () => {
    return firebase
      .firestore()
      .collection("Performance")
      .where("data.email", "==", emailGlobal)
      .orderBy("data.timestamp")

      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let newData = doc.data().data;

          if (newData.currentAge > 0 && yourData.indexOf(newData.id) == -1) {
            setYourData((arr) => {
              return [...arr, newData];
            });
          } else {
            console.log("duplicate found", yourData.length);
          }
        });
        console.log("2 YourData-Length", yourData.length);
      })
      .catch((e) => console.log(e));
  };

  return (
    <SafeAreaView style={styles.container2}>
      <View>
        <TouchableOpacity style={styles.middle}>
          <Text style={styles.text2}>Age Data</Text>
          <Text style={styles.text5}>_________________________</Text>
        </TouchableOpacity>

        <View style={styles.chart}>
          <ScrollView>
            {yourData.map((info, i) => (
              <ListItem key={i} style={styles.text6}>
                <TouchableOpacity
                  onPress={() =>
                    alert(
                      "This data was recorded on \r\n" +
                        info.currentDate +
                        " at " +
                        info.currentTime
                    )
                  }
                  style={styles.divide}
                >
                  <Text style={{ fontSize: scale(16) }}>
                    {i + 1}. Age: {info.currentAge}
                  </Text>
                  <Text style={{ fontSize: scale(16) }}>
                    {" "}
                    Speed Recorded: {info.speed}
                  </Text>
                </TouchableOpacity>

                <View style={styles.new2}>
                  <TouchableOpacity style={styles.btn} id={info.id}>
                    <Text
                      id={info.id}
                      accessibilityLabel="Sign In"
                      style={styles.text11}
                      title="Delete"
                      onPress={() => setiddelete(info.id)}
                    >Delete</Text>
                  </TouchableOpacity>
                </View>
              </ListItem>
            ))}
          </ScrollView>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity
            style={styles.btn9}
            onPress={() => navigation.toggleDrawer()}
          >
            <Text accessibilityLabel="Sign In" style={styles.text9}>
              Other Data
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Agemanage;

const styles = ScaledSheet.create({
  container3: {
    alignItems: "center",
    backgroundColor: "black",
    flex: 0.45,
    justifyContent: "center",
  },
  new: {
    color: "red",
    textAlign: "right",
  },
  new2: {
    flex: 1.5,
  },
  divide: {
    flex: 5,
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
    flex: 0.33,
    marginTop: "5@s",
    backgroundColor: "black",
    marginLeft: "20@s",
    marginRight: "20@s",
  },
  chart: {
    backgroundColor: "black",
    flex: 2,
    flexDirection: "row",
    padding: "10@s",
    width: "340@s",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  btn: {
    borderColor: "#167bff",
    borderWidth: "2@s",
    width: "75@s",
    height: "40@s",
    backgroundColor: "black",
    borderRadius: "10@s",
    shadowColor: "white",
    shadowOffset: { width: "1@s", height: "1@s" },
    shadowOpacity: 1,
    shadowRadius: 3,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: "16@s",
    textAlign: "center",
  },
  text11: {
    color: "white",
    fontSize: "14@s",
    textAlign: "right",
  },
  text4: {
    color: "white",
    fontSize: "18@s",
    textAlign: "center",
    backgroundColor: "green",
  },
  text5: {
    color: "white",
    fontSize: "10@s",
    textAlign: "center",
    marginBottom: "5@s",
  },
  text6: {
    color: "white",
    fontSize: "18@s",
    flex: 1,
    marginBottom: "20@s",
  },
  text9: {
    color: "white",
    fontSize: "20@s",
    textAlign: "center",
    width: "100@s",
    borderRadius: 50,
  },
  btn9: {
    borderColor: "#167bff",
    borderWidth: "2@s",
    width: "130@s",
    height: "40@s",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: "1@s", height: "1@s" },
    shadowOpacity: 1,
    shadowRadius: 3,
    color: "red",
  },
});
