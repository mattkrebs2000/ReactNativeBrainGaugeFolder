import React, { useEffect, useContext } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, Linking, Button, TouchableOpacity} from 'react-native';
import { DrawerActions } from "@react-navigation/native";
import emailContext from "../emailContext.js";


import { AuthContext } from "../context";

const Welcome = ({navigation}) => {

  console.log("navigation", navigation)

const { signOut } = React.useContext(AuthContext);
const { emailGlobal } = useContext(emailContext);





// useEffect(() => {

//   console.log("LLL", navigation);
// navigation.dispatch(DrawerActions.toggleDrawer());
// }, []);

        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.container2}>
              <Text> {"\n"} </Text>
              <Text style={styles.text}>You are logged in as:</Text>
              <Text style={styles.text2}>{emailGlobal}</Text>
              <Text
                style={styles.text2}
                onPress={() => navigation.navigate("BrainGauge")}
              >
                Play Game
              </Text>
              <TouchableOpacity
                style={styles.containerofimage}
                onPress={() => navigation.navigate("BrainGauge")}
              >
                <Image
                  source={{
                    uri:
                      "https://media.giphy.com/media/35B3Val0pYgtpScqsz/giphy.gif",
                  }}
                  style={styles.image}
                ></Image>
              </TouchableOpacity>
              <Text
                style={styles.text2}
                onPress={() => navigation.toggleDrawer()}
              >
                See Results
              </Text>
              <TouchableOpacity
                style={styles.containerofimage}
                onPress={() => navigation.toggleDrawer()}
              >
                <Image
                  source={{
                    uri:
                      "https://i.pinimg.com/originals/c9/91/72/c99172c17b83d3c620b997858351b2a5.gif",
                  }}
                  style={styles.image}
                  onPress={() => {
                    Linking.openURL(`mailto:${email}`);
                  }}
                ></Image>
              </TouchableOpacity>
              <View style={styles.bottombuttons}>
                <Button title="Sign Out" onPress={() => signOut()} />
              </View>
            </View>
          </SafeAreaView>
        );
    }

export default Welcome;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    
  
  },
  container2: {

flexDirection: "column",
alignItems: "center",


  },
  text: {
    flex: .5,
    color: "white",
    fontSize: 30,
  },

  text2: {
    flex: .5,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  image: {
    width: 180,
    height: 200,
    borderRadius: 5,
  },
  containerofimage: {
    flex: 2,
    width: 200,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "10%",
  },
  bottombuttons: {

    flex:2,
    alignItems:"center",
    justifyContent:"flex-start",
  }
});