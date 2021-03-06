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
    backgroundColor: "#8ce8eb",
    //alignItems: "center",
    //justifyContent: "flex-start",
    width: "100%",
    height: "10%",
    margin: 10,
  },
});

class InterplanetaryShock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interplanetaryShock: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const API_KEY = "c2r0C21lzWwgnuSDxr1TeWnDgrPyVilfALUPtWbg";
    const SOLAR_FLARES_API = `https://api.nasa.gov/DONKI/IPS?startDate=2016-01-01&endDate=2016-01-30&api_key=${API_KEY}`;
    fetch(SOLAR_FLARES_API)
      .then(res => res.json())
      .then(data => {
        console.log("Raw Data for Reference", data); //included in final code deliberately
        let interplanetaryShock = data.map(info => info);
        this.setState({ interplanetaryShock, isLoading: false });
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
        style={{width: "100%", margin: 2}}
        source={require("../images/rwp_ipshock_header.png")}
      />
      <Text>Interplanetary shocks occur when fast-moving solar wind overtakes slower-moving solar wind, spawning disruptions that ripple outward through our solar system. They can trigger geomagnetic storms when they touch Earth's magnetosphere. Such shocks are fairly common, but they're hard to measure.</Text>
      <Text>RECENT EVENTS: </Text>
        {this.state.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          this.state.interplanetaryShock.map((i, idx) => {
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

export default InterplanetaryShock;
