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
    // alignItems: "center",
    //justifyContent: "flex-start",
    width: "100%",
    height: "10%",
    margin: 10,
  },
});

class GeomagneticStorms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asteroids: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const API_KEY = "c2r0C21lzWwgnuSDxr1TeWnDgrPyVilfALUPtWbg";
    const API_URL = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`;
    //This has SO much asteroid data!! This should probably be a way more complex component!
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log("Raw Data for Reference", data); //included in final code deliberately
        let asteroids = data.near_earth_objects.map(info => info);
        this.setState({ asteroids, isLoading: false });
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          this.state.asteroids.map((i, idx) => {
            return (
              // <View key={idx}>

              <Card style={{ margin: 5, width: "94%" }} key={idx}>
                <Card.Title title={i.name_limited} />
                <Card.Content key={idx}>
                  <Text>Name: {i.name} </Text>
                  <Text>
                    This asteroid is{i.is_potentially_hazardous_asteroid === false ? " NOT " : ' '}potentially hazardous to Earth.
                  </Text>
                  <Text>
                    Date First Observed: {i.orbital_data.first_observation_date}
                  </Text>
                  <Text>
                    Most Recently Observed:{" "}
                    {i.orbital_data.last_observation_date}
                  </Text>
                  <Text>NASA JPL ID: {i.id}</Text>
                  <Text>
                    Estimated Max Diameter:{" "}
                    {i.estimated_diameter.feet.estimated_diameter_max} ft /{" "}
                    {i.estimated_diameter.kilometers.estimated_diameter_max} km
                  </Text>
                </Card.Content>
              </Card>
            );
          })
        )}
      </ScrollView>
    );
  }
}

export default GeomagneticStorms;
