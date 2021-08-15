///////////////////IMPORTS////////////////
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef9c0",
    //alignItems: "center",
    //justifyContent: "flex-start",
    width: "100%",
    height: "10%",
    margin: 10,
  },
});

class SolarFlares extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solarFlareInfo: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const API_KEY = "c2r0C21lzWwgnuSDxr1TeWnDgrPyVilfALUPtWbg";
    const SOLAR_FLARES_API = `https://api.nasa.gov/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${API_KEY}`;
    fetch(SOLAR_FLARES_API)
      .then(res => res.json())
      .then(data => {
        console.log("Raw Date for Reference", data); //included in final code deliberately
        let solarFlareInfo = data.map(info => info);
        this.setState({ solarFlareInfo, isLoading: false });
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
        style={{width: "100%", margin: 2}}
        source={require("../images/rpw_solar_flares_header.png")}
      />
        <Text>A solar flare is an intense burst of radiation coming from the release of magnetic energy associated with sunspots. Flares are our solar system’s largest explosive events. They are seen as bright areas on the sun and they can last from minutes to hours. We typically see a solar flare by the photons (or light) it releases, at most every wavelength of the spectrum. The primary ways we monitor flares are in x-rays and optical light. Flares are also sites where particles (electrons, protons, and heavier particles) are accelerated.</Text>
        <Text>RECENT FLARES: </Text>
        {this.state.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          this.state.solarFlareInfo.map((i, idx) => {
            return (
              <Card style={{ margin: 5, width: "94%" }} key={idx}>
                <Card.Content>
                  <Text>Class Type: {i.classType}</Text>
                  <Text>Active Region: {i.activeRegionNum}</Text>
                  <Text>Begin Time:{i.beginTime}</Text>
                  <Text>Peak Time:{i.peakTime}</Text>
                  <Text>End Time:{i.endTime}</Text>
                  <Text>Source Location:{i.peakTime}</Text>
                </Card.Content>
              </Card>
            );
          })
        )}
      </ScrollView>
    );
  }
}

export default SolarFlares;
