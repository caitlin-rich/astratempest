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
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, ScrollView } from "react-native";

import {
  KeplerStar,
  SaturnRadioWaves,
  Stardust,
  LightningOnJupiter,
  EmfisisChorus,
  EnceladusHiss,
  InterstellarRadioWaves,
  WhistlerWaves,
} from "./Soundscape";

export default function SoundDisplay() {
  return (
    <ScrollView style={{ height: 0 }}>
      <Card>
        <Card.Content>
          <KeplerStar />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <SaturnRadioWaves />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <LightningOnJupiter />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <EmfisisChorus />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <EnceladusHiss />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <InterstellarRadioWaves />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <WhistlerWaves />
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Stardust />
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
