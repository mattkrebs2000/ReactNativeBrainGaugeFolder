import React, { useState, useContext, useEffect } from 'react';
import emailContext from "../emailContext.js";

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
} from 'react-native';

import { firebase } from "../firebase/config.js";





const SignIn = ({ navigation }) => {
      const [email, setEmail] = useState("");

       const { emailGlobal, setEmailGlobal } = useContext(emailContext);

      const [password, setPassword] = useState("");
  
  

    const onLoginPress = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
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
              // signIn({ user: user });
              
              setEmailGlobal(email),
              console.log(emailGlobal)
            
              // AsyncStorage.setItem("passwordGlobal", password);
              
            })
            .catch((error) => {
              alert(error);
            });
        })
        .catch((error) => {
          alert(error);
        });
          navigation.navigate("Profile");
    };

  
 

    //  const [email, setEmail] = useState("");
    //  const [password, setPassword] = useState("");



    // const [state, setState] = React.UseState({email: '',
    //     username: '',
    //     password: '',
    //     rePassword: '',
    //     fontLoaded: false})
       
           
    

    // Make sure the font loaded before using
    // componentDidMount = async () => {
    //     await Font.loadAsync({
    //         'Pacifico-Reg': require('../../../assets/fonts/Pacifico-Regular.ttf'),
    //     });

    //     this.setState({ fontLoaded: true });
    // }

    // signUp = () => {
    //     if (!this.state.email || !this.state.password || !this.state.rePassword) {
    //         alert('All fields are required');
    //         return;
    //     }

    //     if (this.state.password !== this.state.rePassword) {
    //         alert('Passwords do not match. Please try again');
    //     } else {
    //         const user = {
    //             email: this.state.email,
    //             username: this.state.username,
    //             password: this.state.password,
    //         };

    //         axios
    //             .post('http://192.168.0.107:5000/signup', user)
    //             .then(result => {
    //                 this.navigateToSignin();
    //             })
    //             .catch(err => {
    //                 alert('Failed to sign you up! If you already have an account, log in directly!');
    //                 console.log(err);
    //             });
    //     }
    // }

    // navigateToSignin = () => {
    //     this.props.navigation.navigate('SignIn');
    // }

    

       
        return (
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            {/* App Header */}

            <SafeAreaView style={styles.container} behavior="padding">
              <TouchableOpacity
                style={styles.middle}
               
              >
                <Image
                  source={{
                    uri:
                      "/Users/matt/Desktop/HTML-JS/BootCampWork/ReactNativeBrainGaugeFolder/frontend/assets/brain.png",
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

                  onChangeText={(text) => setEmail(text)}

                  value={email}
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
              <TouchableOpacity
                style={styles.btn}
                onPress={() => onLoginPress()}
                // onPress={this.signUp}
              >
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
    
}

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
