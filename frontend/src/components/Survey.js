
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Slider from "@react-native-community/slider";


class SliderExample extends React.Component {
  static defaultProps = {
    value: 1,
    text: "",
  };

  state = {
    value: this.props.value,
    text: this.props.text
  };



   handleChange = (value) =>  this.setState({value: value}, () => {this.text()});

  text = () => {
switch (this.state.value) {
  case 1:
    text = "Very Tired";
    break;
  case 2:
    text = "Tired";
    break;
  case 3:
    text = "Not Tired but Not Refreshed";
    break;
  case 4:
    text = "Refreshed";
    break;
  case 5:
    text = "Very Refreshed";
    break;  
}
return this.setState({text:text})
  }


  render() {
    
    return (
      <View>
        <Text style={styles.text}>{this.state.value && this.state.value}</Text>
        <Slider
          style={styles.slider}
          {...this.props}
          onValueChange={this.handleChange}          
          style={{ width: 200, height: 40 }}
          minimumValue={1}
          maximumValue={5}
          minimumTrackTintColor="red"
          step="1"
          maximumTrackTintColor="blue"
        />
       <Text>{this.state.text}</Text>
      </View>
    );
   
  }
 

}


class Survey extends React.Component {
  state = {
    slideStartingValue: 0,
    slideStartingCount: 0,
  };

  render() {
     
    return (

      <View>
        <Text>{displayName}</Text>
        <Text>{this.state.text}</Text>
        <SliderExample
          {...this.props}
          onSlidingStart={(value) =>
            this.setState({
              slideStartingValue: value,
              slideStartingCount: this.state.slideStartingCount + 1,
            })
          }
        />
        <Text>
          Starts: {this.state.slideStartingCount} Value:{" "}
          {this.state.slideStartingValue}
        </Text>
      </View>
    );
   
  }


}

export default Survey;

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
});

export const title = "<Slider>";
export const displayName = "SliderExample";
export const description = "Slider input for numeric values";




// const styles = StyleSheet.create({
//   container: {
//     height: "100%",
//     backgroundColor: "black",
//     color: "white",
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
//   container2: {
//     flexDirection: "column",
//   },
//   text: {
//     flex: 0.5,
//     color: "white",
//     fontSize: 30,
//   },

//   text2: {
//     flex: 0.5,
//     color: "white",
//     textAlign: "center",
//     justifyContent: "center",
//     fontSize: 20,
//   },
//   image: {
//     width: 180,
//     height: 200,
//     borderRadius: 5,
//   },
//   containerofimage: {
//     flex: 2,
//     width: 200,
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     marginBottom: "10%",
//   },
//   bottombuttons: {
//     flex: 2,
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
// });
