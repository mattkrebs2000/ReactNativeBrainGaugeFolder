import React from "react";
import { ScaledSheet } from 'react-native-size-matters';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";

const Exercise = ({ setPage, setValue4, texts4, value4 }) => {
  console.log("Welcome");


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
      <Text style={styles.text2}>Exercise</Text>
      <View style={styles.divider_bar}></View>
      </View>

      {/* Sign Up Form */}
      <View style={styles.section3}>
      <Text style={styles.text3}>
How would you describe {"\n"}yourself relative to your recent level
of physical activity?
</Text>
       
        <Slider
          style={styles.slider}
          value={50}
          onValueChange={(event) => {
            setValue4(event);
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
            {value4 && value4} : {texts4}
          </Text>
        </View>
      </View>

      {/* Sign Up Button */}
      <View style={styles.section4}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setPage(5);
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

export default Exercise;

const styles = ScaledSheet.create({
  slider: {
    width: "300@s",
    opacity: 1,
  },
  text: {
    fontSize: "14@s",
    textAlign: "center",
    fontWeight: "500@s",
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
    marginTop: "10@s",
  },
  text3: {
    color: "white",
    textAlign: "center",
    fontSize: "20@s",
    marginBottom: "25@s",
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
section1: {
    width: "150@s",
    alignItems: "center",
    flex: 0.7,
    justifyContent: "center",
   
  },
  section2: {
    width: "150@s",
    alignItems: "center",
    flex: 0.5,
  },

  section3: {
    flex: 1.2,
    alignItems: "center",
    justifyContent: "flex-start",
    color: "white",
    width: "300@s",
  
  },

  section4: {
    flex: .5,
    justifyContent: "center",
  
  },
  img: {
    width: "170@vs",
    height: "90@s",
    borderRadius: 5,
  },
  text2: {
    color: "white",
    fontSize: "35@s",
 justifyContent:"flex-start",
    
  },

  text5: {
    fontSize: "10@s",
    color: "white",
    marginLeft: 10,
  },
  text6: {
    fontSize: "10@s",
    color: "white",
    marginRight: 10,
  },
});
