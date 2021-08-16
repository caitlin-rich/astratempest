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
    backgroundColor: "#ffe3e3",
    //alignItems: "center",
    //justifyContent: "flex-start",
    width: "98%",
    height: "10%",
    margin: 10,
  },
});

class CoronalMassEjections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coronalMassEjections: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const API_KEY = "c2r0C21lzWwgnuSDxr1TeWnDgrPyVilfALUPtWbg";
    const SOLAR_FLARES_API = `https://api.nasa.gov/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${API_KEY}`;
    fetch(SOLAR_FLARES_API)
      .then(res => res.json())
      .then(data => {
        console.log("Raw Data for Reference", data); //included in final code deliberately
        let coronalMassEjections = data.map(info => info);
        this.setState({ coronalMassEjections, isLoading: false });
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
        style={{width: "100%", margin: 2}}
        source={require("../images/rwp_CME_header.png")}
      />
        <Text>Coronal Mass Ejections (CMEs) are large expulsions of plasma and magnetic field from the Sun’s corona. They can eject billions of tons of coronal material and carry an embedded magnetic field (frozen in flux) that is stronger than the background solar wind interplanetary magnetic field (IMF) strength. CMEs travel outward from the Sun at speeds ranging from slower than 250 kilometers per second (km/s) to as fast as near 3000 km/s. The fastest Earth-directed CMEs can reach our planet in as little as 15-18 hours. Slower CMEs can take several days to arrive. They expand in size as they propagate away from the Sun and larger CMEs can reach a size comprising nearly a quarter of the space between Earth and the Sun by the time it reaches our planet.</Text>
        <Text>RECENT EVENTS: </Text>
        {this.state.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          this.state.coronalMassEjections.map((i, idx) => {
            return (
              <Card style={{ margin: 5, width: "94%" }} key={idx}>
              <Card.Content key={idx}>
              <Text>Start Time: {i.startTime}</Text>
                <Text>Source Location: {i.sourceLocation ? i.sourceLocation : "Unavailable"}</Text>
                <Text>Notes: {i.note}</Text>
              </Card.Content>
            </Card>

            );
          })
        )}
      </ScrollView>
    );
  }
}

export default CoronalMassEjections;
