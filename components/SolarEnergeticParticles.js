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
    backgroundColor: "#ffd2b5",
    //alignItems: "center",
    //justifyContent: "flex-start",
    width: "100%",
    height: "10%",
    margin: 10,
  },
});

class SolarEnergeticParticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solarEnergeticParticles: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const API_KEY = "c2r0C21lzWwgnuSDxr1TeWnDgrPyVilfALUPtWbg";
    const SOLAR_FLARES_API = `https://api.nasa.gov/DONKI/SEP?startDate=2016-01-01&endDate=2016-01-30&api_key=${API_KEY}`;
    fetch(SOLAR_FLARES_API)
      .then(res => res.json())
      .then(data => {
        console.log("Raw Data for Reference", data); //included in final code deliberately
        let solarEnergeticParticles = data.map(info => info);
        this.setState({ solarEnergeticParticles, isLoading: false });
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
        style={{width: "100%", margin: 2}}
        source={require("../images/rwp_SEP_header.png")}
      />
        <Text>Solar energetic particles are energetic charged particles (such as electrons and protons) traveling much faster than ambient particles in the space plasma, at a franction of the speed of light (relativistic!). They can travel from the Sun to the Earth in one hour or less!</Text>
        <Text>RECENT EVENTS: </Text>
        {this.state.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          this.state.solarEnergeticParticles.map((i, idx) => {
            return (
              <Card style={{ margin: 5, width: "94%" }} key={idx}>
                <Card.Content>
                  <Text>Event Time: {i.eventTime}</Text>
                </Card.Content>
              </Card>
            );
          })
        )}
      </ScrollView>
    );
  }
}

export default SolarEnergeticParticles;
