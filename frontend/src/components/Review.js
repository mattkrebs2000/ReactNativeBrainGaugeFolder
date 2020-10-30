import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../context";



class Review extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {

    return (
      <View style={styles.container} behavior="padding">
        <SafeAreaView style={styles.container} behavior="padding">
          <View style={styles.middle}>
            <Image
              source={{
                uri:
                  "/Users/matt/Desktop/HTML-JS/BootCampWork/ReactNativeBrainGaugeFolder/frontend/assets/brain.png",
              }}
              style={styles.img}
            />
          </View>
          <Text> {"\n"} </Text>
          <Text style={styles.text2}>Review</Text>
          <View style={styles.divider_bar}></View>
          <View style={styles.mid}>
            <Text style={styles.text3}>
              <Text>Exercise: Not Included</Text>
              <Text> {"\n"} </Text>
              <Text>Sleep: Not Included</Text>
              <Text> {"\n"} </Text>
              <Text>Appetite: Not Included</Text>
              <Text> {"\n"} </Text>
              <Text>Mood: Not Included</Text>
            </Text>
          </View>

          {/* Sign Up Button */}
          <View style={styles.lower}>
            <TouchableOpacity
              style={styles.btn}

              // onPress={this.signUp}
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>

            <View style={styles.divider_bar}></View>
          </View>
          {/* Log In */}
        </SafeAreaView>
      </View>
    );
  }
}

export default Review;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
    margin: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    flexDirection: "column",
  },

  divider_bar: {
    width: 300,
    backgroundColor: "#FAD9C5",
    height: 1,
    marginTop: 20,
    
  },
  text3: {
    color: "white",
    fontSize: 20, 
    textAlign: "center"
  },
  mid: {
flex: .4,
alignItems:"center",
justifyContent:"center"

  },
  btn: {
    width: 300,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004fff",
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    color: "white",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  middle: {
    width: 150,
    alignItems: "center",
    flex: 0.6,
    justifyContent: "flex-end",
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
  lower: {
    flex: 0.6,
    justifyContent: "flex-start",
  },
});
