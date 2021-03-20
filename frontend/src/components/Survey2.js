import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";

const Mood = ({ setPage, setValue2, texts2, value2 }) => {
  console.log("Mood");

  return (

  <SafeAreaView style={styles.container}>
  <View style={styles.section1}>
    <Image
      source={{
        uri:
          "https://github.com/mattkrebs2000/ReactNativeBrainGaugeFolder/blob/master/frontend/assets/brain.png?raw=true",
      }}
      style={styles.img}
    />
  </View>
  <View style={styles.section2}>
  <Text style={styles.text2}>Mood</Text>
  <View style={styles.divider_bar}></View>
  </View>

  {/* Sign Up Form */}
  <View style={styles.section3}>
  <Text style={styles.text3}>
            How would you describe your mood lately?
          </Text>
   
    <Slider
      style={styles.slider}
      value={50}
      onValueChange={(event) => {
        setValue2(event);
      }}
      style={{ width: 300, height: 40 }}
      minimumValue={0}
      maximumValue={100}
      minimumTrackTintColor="#004fff"
      step={1}
      maximumTrackTintColor="red"
    />
    <View>
      <Text style={styles.text}>
        {value2 && value2} : {texts2}
      </Text>
    </View>
  </View>

  {/* Sign Up Button */}
  <View style={styles.section4}>
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        setPage(3);
      }}
      // onPress={this.signUp}
    >
      <Text style={styles.text}> Submit</Text>
    </TouchableOpacity>

    <View style={styles.divider_bar}></View>
  </View>
  {/* Log In */}
</SafeAreaView>
);
};

export default Mood;

const styles = StyleSheet.create({
slider: {
width: 300,
opacity: 1,
},
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
marginTop: 10,
},
text3: {
color: "white",
textAlign: "center",
fontSize: 20,
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
section1: {
width: 150,
alignItems: "center",
flex: 0.7,

},
section2: {
width: 150,
alignItems: "center",
flex: 0.5,
},

section3: {
flex: 1.2,
alignItems: "center",
justifyContent: "center",
color: "white",
width: 300,
},

section4: {
flex: .5,
justifyContent: "center",

},
img: {
width: "90%",
height: 90,
borderRadius: 5,
},
text2: {
color: "white",
fontSize: 35,
justifyContent:"flex-start",

},

text5: {
fontSize: 17,
color: "white",
marginLeft: 10,
},
text6: {
fontSize: 17,
color: "white",
marginRight: 10,
},
});

