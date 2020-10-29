import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Slider from "@react-native-community/slider";

const Sleep = () => {

    const [value, setValue] = useState(0)
    const [texts, setText] = useState(" ")

   handleChange = (e) =>  setValue(e.target.value);

  text = () => {
switch (value) {
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
return setText({text})
  }
    
    return (
      <View>

      <Text>{value}Hello</Text>
      <Text>{texts}</Text>

        <Text style={styles.text}>{value && value}oh</Text>
        <Slider
          style={styles.slider}
        

        //   onValueChange={handleChange}   
          
          onValueChange = {function (event) {
              return setValue(event.target.value);
          }}
          style={{ width: 200, height: 40 }}
          minimumValue={1}
          maximumValue={5}
          minimumTrackTintColor="red"
          step="1"
          maximumTrackTintColor="blue"
          value="3"
        />
       <Text>{texts}</Text>
      </View>
    );

}

export default Sleep;


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


// import React from "react";
// import { Text, StyleSheet, View } from "react-native";
// import Slider from "@react-native-community/slider";

// class Sleep extends React.Component {
//   state = {
//     value: 3,
//     text: "",
//   };

//   handleChange = (value) =>
//     this.setState({ value: value }, () => {
//       this.text();
//     });

//   text = () => {
//     switch (this.state.value) {
//       case 1:
//         text = "Very Tired";
//         break;
//       case 2:
//         text = "Tired";
//         break;
//       case 3:
//         text = "Not Tired but Not Refreshed";
//         break;
//       case 4:
//         text = "Refreshed";
//         break;
//       case 5:
//         text = "Very Refreshed";
//         break;
//     }
//     return this.setState({ text: text });
//   };

//   render() {
//     return (
//       <View>
//         <Text>{this.state.value}</Text>
//         <Text>{this.state.text}</Text>

//         <Text style={styles.text}>{this.state.value && this.state.value}</Text>
//         <Slider
//           style={styles.slider}
//           {...this.props}
//           onValueChange={this.handleChange}
//           style={{ width: 200, height: 40 }}
//           minimumValue={1}
//           maximumValue={5}
//           minimumTrackTintColor="red"
//           step="1"
//           maximumTrackTintColor="blue"
//           value="3"
//         />
//         <Text>{this.state.text}</Text>
//       </View>
//     );
//   }
// }

// export default Sleep;

// const styles = StyleSheet.create({
//   slider: {
//     width: 300,
//     opacity: 1,
//     height: 50,
//     marginTop: 50,
//   },
//   text: {
//     fontSize: 14,
//     textAlign: "center",
//     fontWeight: "500",
//     margin: 10,
//   },
// });








