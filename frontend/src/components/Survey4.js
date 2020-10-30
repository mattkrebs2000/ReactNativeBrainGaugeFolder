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

class Exercise extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    value: 0,
    text: "Not Included",
  };

  handleChange = (value) =>
    this.setState({ value: value }, () => {
      this.text();
    });

  text = () => {
    switch (this.state.value) {
      case 1:
        text = "Sedentary";
        break;
      case 2:
        text = "Somewhat Active";
        break;
      case 0:
        text = "Not Included";
        break;
      case 3:
        text = "Active";
        break;
      case 4:
        text = "Very Physically Active";
        break;
    }
    return this.setState({ text: text });
  };

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
          <Text style={styles.text2}>Exercise</Text>
          <View style={styles.divider_bar}></View>

          {/* Sign Up Form */}
          <View style={styles.form}>
            <Text style={styles.text3}>
              How do you feel relative to the amount of exercise you've gotten
              recently?
            </Text>
            <Text> {"\n"} </Text>
            <Slider
              style={styles.slider}
              {...this.props}
              onValueChange={this.handleChange}
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={4}
              minimumTrackTintColor="blue"
              step="1"
              maximumTrackTintColor="red"
              value="2"
            />
            <View>
              <Text style={styles.text}>
                {this.state.value && this.state.value} : {this.state.text}
              </Text>
            </View>
          </View>

          {/* Sign Up Button */}
          <View style={styles.lower}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                this.props.navigation.navigate("Review");
              }}
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

export default Exercise;

const styles = StyleSheet.create({
  slider: {
    width: 300,
    opacity: 1,
    height: 50,
    marginTop: 50,
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
    marginBottom: 20,
  },
  text3: {
    color: "white",
    textAlign: "center",
    justifyContent: "flex-start",
    fontSize: 20,
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    width: 300,
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
    flex: 1,
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
    flex: 1,
    justifyContent: "flex-start",
  },
});
