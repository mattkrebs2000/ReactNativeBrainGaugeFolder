import React, { useEffect, useContext, useState } from "react";
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
      <Drawer.Section style={styles.drawerSection2}>
        <DrawerItem
          icon={() => <Icon name="arrow-left" color="#167bff" size={45} />}
          label="Return"
          labelStyle={{ color: "white", fontSize: 30, marginLeft: 20 }}
          onPress={() => {
            props.navigation.navigate("Return");
          }}
        />
      </Drawer.Section>

      <DrawerContentScrollView {...props}>
        <View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Age");
                  }}
                >
                  <Icon name="chart-scatter-plot" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Age"
              labelStyle={{ color: "white", fontSize: 30, marginLeft: 20 }}
              onPress={() => {
                props.navigation.navigate("Age");
              }}
            />

            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Agemanage");
                  }}
                >
                  <Icon name="database-edit" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Manage Age Data"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Agemanage");
              }}
            />

            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Appetite");
                  }}
                >
                  <Icon name="chart-scatter-plot" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Appetite"
              labelStyle={{ color: "white", fontSize: 30, marginLeft: 20 }}
              onPress={() => {
                props.navigation.navigate("Appetite");
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
              label="Manage Appetite Data"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Appetitemanage");
              }}
            />

            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Exercise");
                  }}
                >
                  <Icon name="chart-scatter-plot" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Exercise"
              labelStyle={{ color: "white", fontSize: 30, marginLeft: 20 }}
              onPress={() => {
                props.navigation.navigate("Exercise");
              }}
            />

            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Exercisemanage");
                  }}
                >
                  <Icon name="database-edit" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Manage Exercise Data"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Exercisemanage");
              }}
            />

            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Mood");
                  }}
                >
                  <Icon name="chart-scatter-plot" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Mood"
              labelStyle={{ color: "white", fontSize: 30, marginLeft: 20 }}
              onPress={() => {
                props.navigation.navigate("Mood");
              }}
            />
            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Moodmanage");
                  }}
                >
                  <Icon name="database-edit" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Manage Mood Data"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Moodmanage");
              }}
            />

            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Sleep");
                  }}
                >
                  <Icon name="chart-scatter-plot" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Sleep"
              labelStyle={{ color: "white", fontSize: 30, marginLeft: 20 }}
              onPress={() => {
                props.navigation.navigate("Sleep");
              }}
            />

            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Sleepmanage");
                  }}
                >
                  <Icon name="database-edit" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Manage Sleep Data"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Sleepmanage");
              }}
            />
            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("TimeOfDay");
                  }}
                >
                  <Icon name="chart-scatter-plot" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Time-Day"
              labelStyle={{ color: "white", fontSize: 30, marginLeft: 10 }}
              onPress={() => {
                props.navigation.navigate("TimeOfDay");
              }}
            />
            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("TimeOfDayManage");
                  }}
                >
                  <Icon name="database-edit" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Manage Time-Day Data"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("TimeOfDayManage");
              }}
            />
            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("TimeOfWeek");
                  }}
                >
                  <Icon name="chart-scatter-plot" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Time-Week"
              labelStyle={{ color: "white", fontSize: 30, marginLeft: 10 }}
              onPress={() => {
                props.navigation.navigate("TimeOfWeek");
              }}
            />
            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("TimeOfWeekManage");
                  }}
                >
                  <Icon name="database-edit" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Manage Time-Week Data"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("TimeOfWeekManage");
              }}
            />
            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("TimeOfYear");
                  }}
                >
                  <Icon name="chart-scatter-plot" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Time-Year"
              labelStyle={{ color: "white", fontSize: 30, marginLeft: 10 }}
              onPress={() => {
                props.navigation.navigate("TimeOfYear");
              }}
            />
            <DrawerItem
              icon={() => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("TimeOfYearManage");
                  }}
                >
                  <Icon name="database-edit" color="#167bff" size={45} />
                </TouchableOpacity>
              )}
              label="Manage Time-Year Data"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("TimeOfYearManage");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label=""
          labelStyle={{ color: "white", fontSize: 30, marginLeft: 20 }}
          onPress={() => {
            props.navigation.navigate("Return");
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
    color: "#167bff"
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
   drawerSection2: {
    marginTop: 15,
    color: "#167bff",
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1,
    color: "#167bff"
   }
}
);
