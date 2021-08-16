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
import { StyleSheet, ScrollView, ImageBackground } from "react-native";

import HomePage from "./components/Home";
import SolarFlares from "./components/SolarFlares";
import GeoStorms from "./components/GeomagneticStorms.js";
import CME from "./components/CoronalMassEjections";
import InterplanetaryShock from "./components/InterplanetaryShock";
import SEP from "./components/SolarEnergeticParticles";
import Asteroids from "./components/Asteroids";
import SoundDisplay from "./components/SoundDisplay";
import DrawerNav from "./components/Drawer";

const Drawer = createDrawerNavigator();

////////////////////////////////////////////////////////////////////

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ffbaba",
    accent: "#3a1919",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 10,
    paddingBottom: 10,
  },
  card: {
    width: 10,
  },
});

const Stack = createStackNavigator();

//This is acting as the parent component, then HOME is the home base for everything else.

export default function App() {
  return (
    <NavigationContainer>
    
        <PaperProvider theme={theme}>
          <Stack.Navigator>
            <Stack.Screen
              name="DrawerNav"
              component={DrawerNav}
              options={{ title: "DrawerNav" }}
            />
            <Stack.Screen
              name="Soundscape"
              component={SoundDisplay}
              options={{ title: "Listen To Space!" }}
            />
            <Stack.Screen
              name="SolarFlares"
              component={SolarFlares}
              options={{ title: "Solar Flares" }}
            />
            <Stack.Screen
              name="GeoStorms"
              component={GeoStorms}
              options={{ title: "Geomagnetic Storms" }}
            />
            <Stack.Screen
              name="CME"
              component={CME}
              options={{ title: "Coronal Mass Ejections" }}
            />
            <Stack.Screen
              name="InterplanetaryShock"
              component={InterplanetaryShock}
              options={{ title: "Interplanetary Shock" }}
            />
            <Stack.Screen
              name="SEP"
              component={SEP}
              options={{ title: "Solar Energetic Particles" }}
            />
            <Stack.Screen
              name="Asteroids"
              component={Asteroids}
              options={{ title: "Asteroids" }}
            />
         
          <Stack.Screen
              name="Soundscapes"
              component={SoundDisplay}
              options={{ title: "Soundscapes" }}
            />
          </Stack.Navigator>

          <StatusBar style="auto" />
        </PaperProvider>
      
    </NavigationContainer>
  );
}
