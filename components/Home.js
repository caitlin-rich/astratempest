///////////////////IMPORTS////////////////
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button, TouchableRipple } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerComponent } from '@react-navigation/drawer';

import ISS from "./ISS.js"
import SoundDisplay from "./SoundDisplay";

//////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#ffbaba",
    paddingBottom: 10,
  },
});

const Drawer = createDrawerNavigator();



//Known Bug: clicking on the drawer navigation persists the navigation drawer, but clicking these links does not. 



export default function HomePage({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={{width: "100%", margin: 2}}
        source={require("../images/rpw_app_header_resized.png")}
      />

      <ISS />

      

      {/* Touchable Ripples are used here as custom buttons. Currently, they don't actually ripple. :( */}
      <TouchableRipple
        onPress={() => navigation.navigate("GeoStorms")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
          style={{width: "100%", margin: 2}}
          source={require("../images/rpw_geomagnetic_storms_resized.png")}
        />
      </TouchableRipple>

      <TouchableRipple
        onPress={() => navigation.navigate("SEP")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
          style={{width: "100%", margin: 2}}
          source={require("../images/rpw_solar_energetic_particles_resized.png")}
        />
      </TouchableRipple>

      <TouchableRipple
        onPress={() => navigation.navigate("CME")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
          style={{width: "100%", margin: 2}}
          source={require("../images/rpw_coronal_mass_ejections_resized.png")}
        />
      </TouchableRipple>
      
      <TouchableRipple
        onPress={() => navigation.navigate("SolarFlares")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
          style={{width: "100%", margin: 2}}
          source={require("../images/rpw_solar_flares_resized.png")}
        />
      </TouchableRipple>



      <TouchableRipple
        onPress={() => navigation.navigate("InterplanetaryShock")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
          style={{width: "100%", margin: 2}}
          source={require("../images/rpw_interplanetary_shock_resized.png")}
        />
      </TouchableRipple>

      <TouchableRipple
        onPress={() => navigation.navigate("Asteroids")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Image
        style={{width: "100%", margin: 2}}
          source={require("../images/rpw_asteroids_resized.png")}
        />
      </TouchableRipple> 

  


    </ScrollView>
  );
}
