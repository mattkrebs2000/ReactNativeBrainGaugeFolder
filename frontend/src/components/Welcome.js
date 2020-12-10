import React, { useEffect, useContext, useState } from "react";
import { firebase } from "../firebase/config.js";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  Button,
  TouchableOpacity,
} from "react-native";
import emailContext from "../emailContext.js";
import dataContext from "../dataContext.js";

const Welcome = ({ navigation }) => {
  console.log("Welcome");
  const { emailGlobal } = useContext(emailContext);
  const {yourData, setYourData} = useContext(dataContext);
  





  const populate = () => {
    let newArray = [];
    return firebase
      .firestore()
      .collection("Performance")
      .where("data.email", "==", emailGlobal)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
        let newData = doc.data().data;
        

// setYourData([...yourData,{newData}])


          setYourData(yourData.push({newData}))
          newArray.push(newData.speed)
          
        });
        let max = Math.max(...newArray)
         console.log("here is the data", yourData, newArray, max);

      });
      
  };

  useEffect(() => {
    populate();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Text> {"\n"} </Text>
        <Text style={styles.text}>You are logged in as:</Text>
        <Text style={styles.text2}>{emailGlobal}</Text>
        <Text
          style={styles.text2}
          onPress={() => navigation.navigate("BrainGauge")}
        >
          Play Game
        </Text>
        <TouchableOpacity
          style={styles.containerofimage}
          onPress={() => navigation.navigate("BrainGauge")}
        >
          <Image
            source={{
              uri: "https://media.giphy.com/media/35B3Val0pYgtpScqsz/giphy.gif",
            }}
            style={styles.image}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.text2} onPress={() => navigation.toggleDrawer()}>
          See Results
        </Text>
        <TouchableOpacity
          style={styles.containerofimage}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image
            source={{
              uri:
                "https://i.pinimg.com/originals/c9/91/72/c99172c17b83d3c620b997858351b2a5.gif",
            }}
            style={styles.image}
            onPress={() => {
              Linking.openURL(`mailto:${email}`);
            }}
          ></Image>
        </TouchableOpacity>
        <View style={styles.bottombuttons}>
          <Button
            title="Sign Out"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container2: {
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    flex: 0.5,
    color: "white",
    fontSize: 30,
  },

  text2: {
    flex: 0.5,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  image: {
    width: 180,
    height: 200,
    borderRadius: 5,
  },
  containerofimage: {
    flex: 2,
    width: 200,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "10%",
  },
  bottombuttons: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
