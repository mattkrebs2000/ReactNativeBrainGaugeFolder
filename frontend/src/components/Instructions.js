import React, { useEffect } from "react";
import { ScaledSheet } from 'react-native-size-matters';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import { AuthContext } from "../context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Instructions = ({navigation, setPage
}) => {

  console.log("Instructions")

 useEffect(() => {
   navigation.setOptions({
     title: "Survey",
     headerLeft: () => (
       <TouchableOpacity
         icon={() => <Icon name="arrow-left" color="#167bff" size={45} />}
         label="Return"
         labelStyle={{ color: "white", fontSize: 30, marginLeft: 20 }}
        
         onPress={() => setPage(1)}
       >
         <Text accessibilityLabel="Back" style={styles.text5}>
          
         </Text>
       </TouchableOpacity>
     ),
     headerRight: () => (
       <TouchableOpacity onPress={() => setPage(6)}>
         <Text accessibilityLabel="Skip" style={styles.text6}></Text>
       </TouchableOpacity>
     ),
     title: "",
   });
 }, []);








  return (
    
      <SafeAreaView style={styles.container} behavior="padding">
       <View style={styles.section1}>
        <Text style={styles.text2}>Instructions</Text>
        <View style={styles.divider_bar}></View>
        </View>
        <View style={styles.section2}>
          <Text style={styles.text3}>
            This game is designed to test your reaction speed by measuring the
            time it takes you to touch the boxes that appear on the page.
            {"\n"}
            {"\n"}
            After you click the "Begin" button below you will be taken to a new
            screen on which colored squares will appear one after another. You should try to touch each square as quickly as you can. As you touch each one your reaction time will be recorded and a new round will begin until the end of the game. When you are ready to begin press the button below. 
          </Text>
        </View>

        {/* Sign Up Button */}
        <View style={styles.section3}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
             setPage(7)
            }}
          >
            <Text style={styles.text}>Begin</Text>
          </TouchableOpacity>

          <View style={styles.divider_bar}></View>
        </View>
        {/* Log In */}
      </SafeAreaView>
    
  );
};

export default Instructions;

const styles = ScaledSheet.create({
  text: {
    fontSize: "14@s",
    textAlign: "center",
    fontWeight: "500",
    margin: "10@s",
  },

  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    flexDirection: "column",
  },

  divider_bar: {
    width: "300@s",
    backgroundColor: "#FAD9C5",
    height: 1,
    marginTop: "20@s",
  },
  text3: {
    color: "white",
    fontSize: "16@s",
    textAlign: "center",
  },
 
  btn: {
    width: "300@s",
    height: "45@s",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004fff",
    borderRadius: "10@s",
    shadowColor: "white",
    shadowOffset: { width: "1@s", height: "1@s" },
    shadowOpacity: "1@s",
    shadowRadius: "3@s",
    color: "white",
  },
  text: {
    color: "white",
    fontSize: "20@s",
    textAlign: "center",
  },

  text2: {
    color: "white",
    fontSize: "35@s",
    textAlign: "center",
  },
  section1: {
    flex: 0.30,
    justifyContent: "center",
  },
  section2: {
    flex: 1.1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "300@s",
  },
  section3: {
    flex: 0.25,
    justifyContent: "flex-start",
  },


  text5: {
    fontSize: "12@s",
    color: "white",
    marginLeft: 10,
  },
  text6: {
    fontSize: "12@s",
    color: "white",
    marginRight: 10,
  },
});
