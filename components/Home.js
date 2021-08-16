///////////////////IMPORTS////////////////
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button, TouchableRipple } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerComponent,
} from "@react-navigation/drawer";

import ISS from "./ISS.js";
import SoundDisplay from "./SoundDisplay";

//////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
    paddingBottom: 10,
  },
});

const Drawer = createDrawerNavigator();

//Known Bug: clicking on the drawer navigation persists the navigation drawer, but clicking these links does not.
//update EXCEPT WITH THE ASTEROIDS PAGE for some weird reason? what the heck it is the same as everyone else's??? 

export default function HomePage({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={{ width: "100%", margin: 2 }}
        source={require("../images/rpw_app_header_resized.png")}
      />

      <Image
        style={{ width: "100%", margin: 2 }}
        source={require("../images/betterimages/where_is_iss.png")}
      />

      <ISS />
      <TouchableRipple
        onPress={() => navigation.navigate("Soundscapes")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
          style={{ width: "100%", margin: 2, }}
          source={require("../images/betterimages/LISTEN_TO_SPACE.png")}
        />
      </TouchableRipple>

      <Image
        style={{ width: "100%", margin: 2,}}
        source={require("../images/betterimages/space_Weather.png")}
      />

      {/* Touchable Ripples are used here as custom buttons. Currently, they don't actually ripple. :( */}
      <TouchableRipple
        onPress={() => navigation.navigate("GeoStorms")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
          style={{ width: "100%", margin: 2 }}
          source={require("../images/betterimages/GEOMAGNETIC_STORMS.png")}
        />
      </TouchableRipple>

      <TouchableRipple
        onPress={() => navigation.navigate("SEP")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
          style={{ width: "100%", margin: 2 }}
          source={require("../images/betterimages/solar_energetic_particles.png")}
        />
      </TouchableRipple>

      <TouchableRipple
        onPress={() => navigation.navigate("CME")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
          style={{ width: "100%", margin: 2 }}
          source={require("../images/betterimages/coronal_mass_ejections.png")}
        />
      </TouchableRipple>

      <TouchableRipple
        onPress={() => navigation.navigate("SolarFlares")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
          style={{ width: "100%", margin: 2 }}
          source={require("../images/betterimages/solar_flares.png")}
        />
      </TouchableRipple>

      <TouchableRipple
        onPress={() => navigation.navigate("InterplanetaryShock")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
          style={{ width: "100%", margin: 2 }}
          source={require("../images/betterimages/INTERPLANETARY_SHOCK.png")}
        />
      </TouchableRipple>

      <TouchableRipple
        onPress={() => navigation.navigate("Asteroids")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
          style={{ width: "100%", margin: 2 }}
          source={require("../images/betterimages/ASTEROIDS.png")}
        />
      </TouchableRipple>
    </ScrollView>
  );
}
