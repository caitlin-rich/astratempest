///////////////////////IMPORTS//////////////////////////////////////
import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Card,
} from "react-native-paper";
import {
  NavigationContainer,
  View,
  Button,
  Text,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, ScrollView } from "react-native";

import HomePage from "./Home";
import SolarFlares from "./SolarFlares";
import GeoStorms from "./GeomagneticStorms.js";
import CME from "./CoronalMassEjections";
import InterplanetaryShock from "./InterplanetaryShock";
import SEP from "./SolarEnergeticParticles";
import Asteroids from "./Asteroids";
import SoundDisplay from "./SoundDisplay";


const Drawer = createDrawerNavigator();

////////////////////////////////////////////////////////////////////

export default function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Listen To Space" component={SoundDisplay} />
      <Drawer.Screen name="Solar Flares" component={SolarFlares} />
      <Drawer.Screen name="Geomagnetic Storms" component={GeoStorms} />
      <Drawer.Screen name="Coronal Mass Ejections" component={CME} />
      <Drawer.Screen name="Interplanetary Shock" component={InterplanetaryShock} />
      <Drawer.Screen name="Asteroids" component={Asteroids} />
      <Drawer.Screen name="Solar Energetic Particles" component={SEP} />
    </Drawer.Navigator>
  );
}
