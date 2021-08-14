///////////////////////IMPORTS//////////////////////////////////////
import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import {
  NavigationContainer,
  View,
  Button,
  Text,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import Home from "./components/Home";
import SolarFlares from "./components/SolarFlares";
import GeoStorms from "./components/GeomagneticStorms.js";
import CME from "./components/CoronalMassEjections";
import InterplanetaryShock from "./components/InterplanetaryShock";
import SEP from "./components/SolarEnergeticParticles";
import Asteroids from "./components/Asteroids";
import Soundscape from "./components/Soundscape";
import TestDrawer from "./components/Drawer";

import { createDrawerNavigator, createAppContainer } from "@react-navigation/drawer";
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
});

const Stack = createStackNavigator();

//This is acting as the parent component, then HOME is the home base for everything else.

//Testing Drawer Above

export default function App() {
  return (
    <>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "AstraTempest Space Weather" }}
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
          </Stack.Navigator>


          <StatusBar style="auto" />
        </PaperProvider>
      </NavigationContainer>
    </>
  );
}
