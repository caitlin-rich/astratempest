///////////////////IMPORTS////////////////
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Audio } from "expo-av";

//////////////////////////////////////////

//For ScrollView
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffbaba",
    paddingBottom: 10,
  },
});

export default function Soundscape(props) {


  

  return (
    <View style={styles.container}>
      <Text>Listen to Space! </Text>
    <Text>This will someday be a Button!</Text>
    <Text>It's here for learning how to do a drawer!</Text>
     
    </View>
  );
}
