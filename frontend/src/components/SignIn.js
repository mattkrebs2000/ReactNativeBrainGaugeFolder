import React, { useState, useContext, useEffect } from "react";
import emailContext from "../emailContext.js";
import birthdateContext from "../birthdateContext.js";

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

const SignIn = ({ navigation }) => {
  const [email2, setEmail2] = useState("");
  const [email, setEmail] = useState("");
  const { emailGlobal, setEmailGlobal } = useContext(emailContext);
  const { birthdateGlobal, setBirthdateGlobal } = useContext(birthdateContext);
  const [password, setPassword] = useState("");

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
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* App Header */}

      <SafeAreaView style={styles.container} behavior="padding">
        <TouchableOpacity style={styles.middle}>
          <Image
            source={{
              uri:
                "https://github.com/mattkrebs2000/ReactNativeBrainGaugeFolder/blob/master/frontend/assets/brain.png?raw=true",
            }}
            style={styles.img}
          />
          <Text style={styles.text2}></Text>
        </TouchableOpacity>
        <Text> {"\n"} </Text>
        <Text style={styles.text2}>Sign In</Text>
        <View style={styles.divider_bar}></View>

        {/* Sign Up Form */}
        <View style={styles.form}>
          <TextInput
            onChangeText={(text) => setEmail2(text)}
            value={email2}
            placeholder="Email"
            // value={this.state.email}

            // onChangeText={email => this.setState({ email })}

            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            // value={this.state.password}

            // onChangeText={password => this.setState({ password })}

            style={styles.input}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.btn} onPress={() => onLoginPress()}>
          <Text accessibilityLabel="Sign In" style={styles.text}>
            Sign In
          </Text>
        </TouchableOpacity>

        <View style={styles.divider_bar}></View>

        {/* Log In */}
        <Text
          accessibilityLabel="Link to Sign In page"
          style={{ color: "#167bff" }}
          onPress={() => {
            navigation.navigate("CreateAccount");
          }}
        >
          Don't have an Account? Sign Up
        </Text>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

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

  divider_bar: {
    width: 300,
    backgroundColor: "#FAD9C5",
    height: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  form: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  input: {
    borderWidth: 2,
    borderColor: "#004fff",
    padding: 10,
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
});
