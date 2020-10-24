import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Linking, Button } from 'react-native';

import { AuthContext } from "../context";

const Welcome = props => {
const { signOut } = React.useContext(AuthContext);

        return (
          <SafeAreaView style={styles.container}>
            <Text> {"\n"} </Text>
            <Text style={styles.text}>Welcome ___</Text>
            <Text style={styles.text2}>Play Game</Text>
            <View style={styles.containerofimage}>
              <Image
                source={{
                  uri:
                    "https://media.giphy.com/media/35B3Val0pYgtpScqsz/giphy.gif",
                }}
                style={styles.image}
                onPress={() =>
                  Linking.openURL(
                    "/Users/matt/Desktop/HTML-JS/BootCampWork/ReactNativeBrainGaugeFolder/frontend/src/components/SignIn.js"
                  )
                }
              ></Image>
            </View>
            <Text style={styles.text2}>See Results</Text>
            <View style={styles.containerofimage}>
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
              <View style={styles.bottombuttons}>
                <Button
                  title="Drawer"
                  onPress={() => props.navigation.toggleDrawer()}
                />
                <Text title="Sign Out" onPress={() => signOut()}>HelloHELLO
            </Text>
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
    flexDirection: "column",
  
  },
  text: {
    flex: 1.5,
    color: "white",
    fontSize: 30,
  },

  text2: {
    flex: 1,
    color: "white",
    margin: "1%",
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
    flex: 5,
    width: 200,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "10%",
  },
  bottombuttons: {
width: 200,
height: 200,
    flex:1
  }
});