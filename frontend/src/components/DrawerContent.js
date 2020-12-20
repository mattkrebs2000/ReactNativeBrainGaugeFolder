import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  useTheme,
  Drawer,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem, DrawerActions } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";



export function DrawerContent(props) {
  const paperTheme = useTheme();



  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={() => <Icon name="arrow-left" color="#167bff" size={45} />}
              label="Return"
              labelStyle={{ color: "white", marginLeft: 30 }}
              onPress={() => {
                props.navigation.navigate("Return");
              }}
            />
            <DrawerItem
              icon={() => (
                <Icon
                  name="database-edit"
                  color="#167bff"
                  size={45}
                  onPress={() => {
                    props.navigation.navigate("Age");
                  }}
                />
              )}
              label="Age"
              labelStyle={{ color: "white", marginLeft: 30 }}
              onPress={() => {
                props.navigation.navigate("Age");
              }}
            />
            <DrawerItem
              icon={() => (
                <Icon name="database-edit" color="#167bff" size={45} />
              )}
              label="Sleep"
              labelStyle={{ color: "white", marginLeft: 30 }}
              onPress={() => {
                props.navigation.navigate("Sleep");
              }}
            />
            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Appetitemanage");
                  }}
                >
                  <Icon name="database-edit" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Appetite"
              labelStyle={{ color: "white", marginLeft: 30 }}
            />
            <DrawerItem
              icon={() => (
                <Icon name="database-edit" color="#167bff" size={45} />
              )}
              label="Mood"
              labelStyle={{ color: "white", marginLeft: 30 }}
              onPress={() => {
                props.navigation.navigate("Mood");
              }}
            />
            <DrawerItem
              icon={() => (
                <Icon name="database-edit" color="#167bff" size={45} />
              )}
              label="Exercise"
              labelStyle={{ color: "white", marginLeft: 30 }}
              onPress={() => {
                props.navigation.navigate("Exercise");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => <Icon name="exit-to-app" color="#167bff" size={45} />}
          label="Sign Out"
          labelStyle={{ color: "white", marginLeft: 30 }}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    color: "#167bff",
  },
  userInfoSection: {
    paddingLeft: 20,
    color: "#167bff",
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "#167bff",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: "#167bff",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    color: "#167bff",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    color: "#167bff",
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
    color: "#167bff",
  },
  drawerSection: {
    marginTop: 15,
    color: "#167bff",
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
    color: "#167bff",
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: "#167bff",
  },
});
