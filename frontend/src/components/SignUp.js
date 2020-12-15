import React, { useState, useEffect } from "react";
import DatePicker from "react-native-datepicker";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
} from "react-native";
import { firebase } from "../firebase/config.js";
import CryptoES from "crypto-es";



const SignUp = ({navigation}) => {

    console.log("SignUp");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [encrypt, setEncrypt] = useState("");
  const [birthdate, setBirthdate] = useState('09-10-1950');

useEffect(() => {
setEncrypt(CryptoES.AES.encrypt(password, "Your Password").toString())
}, [password]);


  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
      
        const data = {
          id: uid,
          email,
          userName,
          password: encrypt,
          birthdate,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("SignIn", { user: data });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };



  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* App Header */}

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

        {/* Sign Up Form */}
        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            style={styles.input}
          />

          <TextInput
            placeholder="UserName"
            onChangeText={(text) => setUserName(text)}
            value={userName}
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            style={styles.input}
          />

          <TextInput
            placeholder="Re-enter password"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            style={styles.input}
          />

          <DatePicker
            style={styles.input}
            date={birthdate} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-1916"
            maxDate="01-01-2020"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
                color: "red",
                
              },
            }}
            onChangeText={(date) => {
              setBirthdate(date);
            }}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.btn} onPress={() => onRegisterPress()}>
          <Text accessibilityLabel="Sign up" style={styles.text}>
            Sign Up
          </Text>
        </TouchableOpacity>

        {/* Log In */}
        <Text
          accessibilityLabel="Link to Sign In page"
          style={{ color: "#167bff", padding: 20 }}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          Already have an account? Sign In
        </Text>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
  },
  form: {
    height: "54%",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  input: {
    borderWidth: 2,
    borderColor: "#004fff",
    padding: 7,
    width: 300,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "white",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 1,
    shadowRadius: 0.5,
    color: "white",
    lineHeight: 24,
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
  middle: {
    width: 150,
    alignItems: "center",
    paddingBottom: 40, 
 
  },

  img: {
    width: "100%",
    height: 90,
    borderRadius: 5,
    
  },
  text2: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
  },
});
