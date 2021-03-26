import React, { useState, useEffect } from "react";
import { scale, ScaledSheet } from 'react-native-size-matters';
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
  Dimensions,
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
        <TouchableOpacity onPress={() => 
            navigation.navigate("Profile")}
            >
          <Text accessibilityLabel="Guest" style={styles.text5}>
            Guest
          </Text>
        </TouchableOpacity>
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
    <SafeAreaView style={styles.container}>
      {/* App Header */}

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
      <KeyboardAvoidingView style={styles.form} behavior="height">
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
          placeholderTextColor="gray"
        />

        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.input}
          placeholderTextColor="gray"
        />

        <TextInput
          placeholder="Re-enter password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          style={styles.input}
          placeholderTextColor="gray"
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
            pickerContainerStyleIOS={{backgroundColor:"white"}}
          />
        </View>
      </KeyboardAvoidingView>

      {/* Sign Up Button */}
      <KeyboardAvoidingView style={styles.btn} >
        <TouchableOpacity onPress={() => onRegisterPress()}>
          <Text accessibilityLabel="Sign up" style={styles.text}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* Log In */}
      <Text style={styles.lastsection}
        accessibilityLabel="Link to Sign In page"
        style={{ color: "#167bff", padding: scale(20), fontSize: scale(10)}}
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        Already have an account? Sign In
      </Text>
    </SafeAreaView>
  );
};

export default SignUp;
const styles = ScaledSheet.create({
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
  form: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    flex: .6,
  },
  input: {
    borderWidth: "2@s",
    borderColor: "#004fff",
    padding: "7@s",
    width: "300@s",
    marginBottom: "12@s",
    borderRadius: "10@s",
    shadowColor: "white",
    shadowOffset: { width: "0.5@s", height: "0.5@s" },
    shadowOpacity: "1@s",
    shadowRadius: "0.5@s",
    color: "white",
    lineHeight: "24@s",
    fontSize: "20@s",
  },
  input2: {
    borderWidth: "2@s",
    borderColor: "#004fff",
    padding: "7@s",
    width: "300@s",
    marginBottom: "25@s",
    borderRadius: "10@s",
    shadowOpacity: "1@s",
    shadowRadius: "0.5@s",
    color: "white",
    height: "43@s",
  },
  input3: {
    fontSize: "20@s",
    color: "white",
    opacity: "0.8@s",
  },
  btn: {
    width: "300@s",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004fff",
    borderRadius: "10@s",
    shadowColor: "white",
    shadowOffset: { width: "1@s", height: "1@s" },
    shadowOpacity: "1@s",
    shadowRadius: "3@s",
    color: "white",
    flex: .1,
  },
  text: {
    color: "white",
    fontSize: "15@s",
    textAlign: "center",
  },
  middle: {
    width: "150@s",
    alignItems: "center",
    justifyContent: "center",
  marginTop:0,
   flex: .26, 
  },

  img: {
    width: "130@vs",
    height: "100@vs",
    borderRadius: 5,
  },
  text2: {
    color: "white",
    textAlign: "center",
  },

  modal: {
    color: "white",
    fontSize: "35@s",
    textAlign: "center",
    backgroundColor: "red",
    width: "20@s",
  },
  text5: {
    color: "#004fff",
    fontSize: "12@s",
    marginRight: "5@s"
  },
  last: {
color: "#167bff", 

fontSize: "10@s", 
},
lastsection: {
  flex: .1,
  justifyContent:"center",
}, 
});
