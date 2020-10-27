import React from 'react';
import { Slider, Icon } from "react-native-elements";
import {
  SafeAreaView,
StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Value } from 'react-native-reanimated';


const Survey = () => {

    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{ flex: 1, alignItems: "stretch", justifyContent: "center" }}
        >
          <Slider
            style={{
              color: "white",
              width: 200,
              maximumValue: 5,
              minimumValue: 1,
            }}

            // value={this.state.value}

            // onValueChange={(value) => this.setState({ value })}
          />

          <Text
            style={{ color: "white"}}
          >
            6
          </Text>
        </View>

        <View
          style={{ flex: 1, alignItems: "stretch", justifyContent: "center" }}
        >
          <Slider
            // value={this.state.value}
            // onValueChange={(value) => this.setState({ value })}
            thumbStyle={{
              height: 40,
              width: 100,
              backgroundColor: "transparent",
            }}
            thumbProps={{
              Component: Animated.Image,
              source: {
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              },
            }}
          />
          <Text>Value: 5</Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "stretch", justifyContent: "center" }}
        >
          <Slider
            // value={value}
            // onValueChange={setValue}
            maximumValue={50}
            minimumValue={20}
            step={1}
            trackStyle={{ height: 10, backgroundColor: "transparent" }}
            thumbStyle={{
              height: 20,
              width: 200,
              backgroundColor: "transparent",
            }}
            thumbProps={{
              children: (
                <Icon
                  name="heartbeat"
                  type="font-awesome"
                  size={20}
                  reverse
                  containerStyle={{ bottom: 20, right: 20 }}
                  color="#f50"
                />
              ),
            }}
          />
          <Text>Value: 40</Text>
        </View>
      </SafeAreaView>
    );
};
export default Survey;

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
    width: 200,
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
});
