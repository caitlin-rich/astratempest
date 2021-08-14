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
