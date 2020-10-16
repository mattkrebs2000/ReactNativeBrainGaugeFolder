import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';

class Home extends React.Component {
   
    render() {
        return (
          
            <SafeAreaView style={styles.container}>
           
                <Text style={styles.text}>Brain Gauge</Text>
           
                <View style={styles.middle}>
                <Image
                        source={{ uri: "/Users/matt/Desktop/HTML-JS/BootCampWork/ReactNativeBrainGaugeFolder/frontend/assets/brain.png" }}
                    style={styles.img}
                />
            </View>
                <Text style={styles.text2}>This is the App that measures your mental responsiveness and tells you when you are at your best.</Text>
            </SafeAreaView>          
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
       height:"100%",
        backgroundColor: "black",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        
    },
    text: {   
        color: "white",
        fontSize:40,
        marginBottom:30
       
    },
    img: {
        width: "100%",
        height: 150,
        borderRadius: 5,
    },
    text2: {
        color: "white",
        margin: "12%",
        textAlign: "center",
        justifyContent:"flex-start",
       
        fontSize:15
    },
    middle: {
      width: 200, 
      
    },
});