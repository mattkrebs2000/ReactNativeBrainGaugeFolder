import React from "react";
import { Text, Button, StyleSheet } from "react-native";

import { AuthContext } from "../context";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    }
});


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);


export const Profile = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);

    return (
        <ScreenContainer>
            <Text>Profile Screen</Text>
            <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
            <Button title="Sign Out" onPress={() => signOut()} />
        </ScreenContainer>
    );
};


