import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


class Home extends React.Component {
   
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Brain Gauge.</Text>
                <Image
                    style={styles.image}
                    source={{
                        uri:
                            "../../assets/brain.png",
                    }}
                ></Image>
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        color: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
       
       
        color: "white",
        
    },
    image: {


        width: 100,

    },
});