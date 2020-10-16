import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Linking } from 'react-native';

class Welcome extends React.Component {

    render() {
        return (

            <SafeAreaView style={styles.container}>
                <Text> {'\n'} </Text>
                <Text style={styles.text}>Welcome ___</Text>
<Text style={styles.text2}>Play Game</Text>
                <View style={styles.containerofimage}>
                    <Image
                        source={{ uri: "https://media.giphy.com/media/35B3Val0pYgtpScqsz/giphy.gif" }}
                        style={styles.image}

                        onPress={() => Linking.openURL('http://google.com')}

                    ></Image>
                </View>
                <Text style={styles.text2}>See Results</Text>
                <View style={styles.containerofimage}>
                    <Image
                        source={{ uri: "https://media.giphy.com/media/35B3Val0pYgtpScqsz/giphy.gif" }}
                        style={styles.image}

                        onPress={() => Linking.openURL('http://google.com')}

                    ></Image>
                </View>
            </SafeAreaView>
        );
    }
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "black",
        color: "white",
        alignItems: "center",
        justifyContent: "center",

    },
    text: {
        color: "white",
        fontSize: 30,
        marginBottom: 30

    },
   
    text2: {
        color: "white",
        margin: "12%",
        textAlign: "center",
        justifyContent: "flex-start",

        fontSize: 15
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
    image: {
        width: 100,
        height: 120,
        borderRadius: 5,

    },
    containerofimage: {
        width: 100,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
});