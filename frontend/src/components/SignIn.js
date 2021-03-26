import React, { useState, useContext, useEffect } from "react";
import { scale, ScaledSheet } from 'react-native-size-matters';
import emailContext from "../emailContext.js";
import birthdateContext from "../birthdateContext.js";

import {
  View,
  Keyboard,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";

import { firebase } from "../firebase/config.js";

const SignIn = ({ navigation }) => {
  const [email2, setEmail2] = useState("");
  const [email, setEmail] = useState("");
  const { emailGlobal, setEmailGlobal } = useContext(emailContext);
  const { birthdateGlobal, setBirthdateGlobal } = useContext(birthdateContext);
  const [password, setPassword] = useState("");
  const [ didKeyboardShow, setKeyboardShow ] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    //  Don't forget to cleanup with remove listeners
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setKeyboardShow(true) 
  }

  const _keyboardDidHide = () => {
     setKeyboardShow(false)
  }

  console.log(emailGlobal, "ISITTHERE", email);

  useEffect(() => {
    console.log("1");
    if (email.length > 5) {
      setEmailGlobal(email);

      setTimeout(() => {
        console.log("Data Loaded for Page", emailGlobal);
        navigation.navigate("Profile");
      }, 100);
    } else {
      console.log("do nothing");
    }
  }, [email]);

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email2, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();
            setEmail(user.email);
            setBirthdateGlobal(user.birthdate);
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
    <SafeAreaView style={styles.container}>
        <View style={styles.section1}>
          <Image
            source={{
              uri:
                "https://github.com/mattkrebs2000/ReactNativeBrainGaugeFolder/blob/master/frontend/assets/brain.png?raw=true",
            }}
            style={didKeyboardShow ? styles.img2 : styles.img}
          />
        </View>
        <View style={styles.section2}>
        <Text style={didKeyboardShow ? styles.text3 : styles.text2}>Sign In</Text>
          <View style={didKeyboardShow ? styles.divider_bar2 : styles.divider_bar }></View>
        </View>

        {/* Sign Up Form */}
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.section3}>
        <View>
          <TextInput
            onChangeText={(text) => setEmail2(text)}
            value={email2}
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="gray"
          />

          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            // value={this.state.password}

            // onChangeText={password => this.setState({ password })}

            style={styles.input}
            placeholderTextColor="gray"
          />
        </View>
        </KeyboardAvoidingView>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.section4} onPress={() => onLoginPress()}>
          <Text accessibilityLabel="Sign In" style={styles.text}>
            Sign In
          </Text>
        </TouchableOpacity>
   
<View style={styles.section5}>
      <View style={styles.divider_bar}></View>
      <Text
        accessibilityLabel="Link to Sign In page"
        style={{ color: "#167bff", fontSize: scale(10)}}
        onPress={() => {
          navigation.navigate("CreateAccount");
        }}
      >
        Don't have an Account? Sign Up
      </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    width: "100%",
    color: "white",
    flexDirection: "column",
  },
  divider_bar: {
    width: "300@s",
    backgroundColor: "#FAD9C5",
    height: 1,
    marginTop: "10@s",
    marginBottom: "10@s",
  },
  divider_bar2: {
    width: 0,
    backgroundColor: "#FAD9C5",
    height: 0,
    
  },
  section1: {
    width:150,
    justifyContent: "center",
    alignItems:"center",
    flex: 0.40,
  },
  section2: {
    flex: 0.25,
    color: "white",
    
  },
  section3: {
    flex: .5,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  paddingTop:10,
  },
  section4: {
    width: "300@s",
    height: "30@s",
    flex: "0.1@s",
    minHeight: "20@s",
    maxHeight: "55@s",
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
  section5: {
    width:"100%",
    alignItems:"center",
    flex: .2,
    
  },
  text: {
    color: "white",
    fontSize: "20@s",
    textAlign: "center",
  },

  input: {
    borderWidth: "2@s",
    borderColor: "#004fff",
    padding: "10@s",
    width: "300@s",
    marginBottom: "25@s",
    borderRadius: "10@s",
    shadowColor: "white",
    shadowOffset: { width: "0.5@s", height: "0.5@s" },
    shadowOpacity: "1@s",
    shadowRadius: "0.5@s",
    color: "white",
    lineHeight: "24@s",
    fontSize: "20@s",
  },
  img: {
    width: "170@vs",
    height: "90@s",
    borderRadius: 5,
  },
  img2: {
    width: 0,
    height: 0,
    borderRadius: 5,
  },
  text2: {
    color: "white",
    fontSize: "35@s",
    textAlign: "center",
  },

  text3: {
    color: "white",
    fontSize: "35@s",
    textAlign: "center",
  },
  text6: {
    fontSize: "10@s",
    textAlign: "center",
    color: "#167bff",
  },


});
