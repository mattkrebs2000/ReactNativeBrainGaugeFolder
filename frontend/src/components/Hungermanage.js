import React, { useEffect, useContext, useState } from "react";
import { ListItem } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";
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


const Appetitemanage = ({ navigation }) => {
  const { emailGlobal } = useContext(emailContext);
  const [yourData, setYourData] = useState([]);
  const [iddelete, setiddelete] = useState("2");
  
const deleteItem = () => {
firebase
var washingtonRef = firebase
  .firestore()
  .collection("Performance")
  .doc(iddelete);

return washingtonRef
  .update({
    "data.text3": 0,
  })
  .then(function () {
    console.log("Document successfully updated!");
 
  })
  .catch(function (error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
  });
 
}

  useEffect(() => {
if (iddelete.length>2) {
deleteItem();
}
else {
  null
}
  }, [iddelete]);

  const populate = () => {
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
          }
        });
        console.log(yourData.length);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (yourData.length < 1) {
      populate();
      setYourData([]);
      console.log("HIIIII", yourData);
    } else {
      console.log("already filled");
    }
  }, []);

  console.log(yourData);
  return (
    <SafeAreaView style={styles.container2}>
      <View>
        <TouchableOpacity style={styles.middle}>
          <Text style={styles.text2}>Appetite Manage</Text>
          <Text style={styles.text5}>_________________________</Text>

          <Text style={styles.text4}>"HEELLO</Text>
          <View>
            <Text style={styles.text4}>Number Speed </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.chart}>
          <ScrollView>
            {yourData.map((info, i) => (
              <ListItem key={i} style={styles.text6}>
                <TouchableOpacity
                  onPress={() =>
                    alert(
                      "From " + info.currentTime + " on " + info.currentDate
                    )
                  }
                  style={styles.divide}
                >
                  <Text style={{ fontSize: 17 }}>
                    {i + 1}. Rating: {info.text3} Speed:{info.speed}
                  </Text>
                </TouchableOpacity>

                <View style={styles.new2}>
                  <TouchableOpacity style={styles.btn} id={info.id}>
                    <Button
                      id={info.id}
                      accessibilityLabel="Sign In"
                      style={styles.text11}
                      title="Delete"
                      onPress={(() => setiddelete(info.id))}
                    ></Button>
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

export default Appetitemanage;

const styles = StyleSheet.create({
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
    fontSize: 35,
    textAlign: "center",
    marginRight: 0,
    marginLeft: 0,
    backgroundColor: "black",
  },
  middle: {
    alignItems: "center",
    flex: 0.33,
    marginTop: 40,
    backgroundColor: "black",
    marginLeft: 20,
    marginRight: 20,
  },
  chart: {
    backgroundColor: "black",
    flex: 2,
    flexDirection: "row",
    padding: 10,
    width: 340,
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  btn: {
    borderColor: "#167bff",
    borderWidth: 2,
    width: 75,
    height: 40,
    backgroundColor: "black",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    color: "black",
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  text11: {
    color: "white",
    fontSize: 10,
    textAlign: "right",
  },
  text4: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "green",
  },
  text5: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  text6: {
    color: "white",
    fontSize: 18,
    flex: 1,
    marginBottom: 20,
  },
  text9: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    width: 100,
  },
  btn9: {
    borderColor: "#167bff",
    borderWidth: 2,
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    color: "red",
  },
});
