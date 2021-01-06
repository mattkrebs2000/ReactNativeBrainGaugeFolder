import React, { useState, useEffect } from "react";
import DatePicker from "react-native-datepicker";
import DateTimeModal from "react-native-modal-datetime-picker";

import {
  View,
  Text,
  Button,
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

const SignUp = ({ navigation }) => {
  console.log("SignUp");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [encrypt, setEncrypt] = useState("");
  const [birthyear, setBirthyear] = useState("YYYY");
  const [birthdate, setBirthdate] = useState("DD");
  const [birthmonth, setBirthmonth] = useState("MM");
  const [visibility, setVisibility] = useState(false);
  const [age, setAge] = useState(0);

  useEffect(() => {
    setEncrypt(CryptoES.AES.encrypt(password, "Your Password").toString());
  }, [password]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            navigation.navigate("Profile");
          }}
          title="Guest Entry"
        />
      ),
    });
  }, []);

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
                "https://github.com/mattkrebs2000/ReactNativeBrainGaugeFolder/blob/master/frontend/assets/brain.png?raw=true",
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
          <View style={styles.input2}>
            <Text style={styles.input3}>
              <Text
                title="BirthDate: "
                onPress={() => {
                  setVisibility(true);
                }}
              >
                Your Birthdate:
                {birthmonth}/{birthdate}/{birthyear}
              </Text>
            </Text>

            <DateTimeModal
              isVisible={visibility}
              format="DD/MM/YYYY"
              onConfirm={(date) => {
                setBirthyear(date.getYear() + 1900);
                setBirthdate(date.getDate());
                setBirthmonth(date.getMonth() + 1);
              }}
              onCancel={() => {
                setVisibility(false);
              }}
              mode="date"
            />
          </View>
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
  input2: {
    borderWidth: 2,
    borderColor: "#004fff",
    padding: 7,
    width: 300,
    marginBottom: 25,
    borderRadius: 10,

    shadowOpacity: 1,
    shadowRadius: 0.5,
    color: "white",
    height: 43,
  },
  input3: {
    fontSize: 20,
    color: "gray",
    opacity: 0.4,
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
    textAlign: "center",
  },

  modal: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
    backgroundColor: "red",
    width: 20,
  },
});
