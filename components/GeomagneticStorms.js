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
    backgroundColor: "#ebf5c9",
    //alignItems: "center",
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
      geoStorms: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const API_KEY = "c2r0C21lzWwgnuSDxr1TeWnDgrPyVilfALUPtWbg";
    const SOLAR_FLARES_API = `https://api.nasa.gov/DONKI/GST?startDate=2016-01-01&endDate=2016-01-30&api_key=${API_KEY}`;
    fetch(SOLAR_FLARES_API)
      .then(res => res.json())
      .then(data => {
        console.log("Raw Data for Reference", data); //included in final code deliberately
        let geoStorms = data.map(info => info);
        this.setState({ geoStorms, isLoading: false });
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
        style={{width: "100%", margin: 2}}
        source={require("../images/rwp_geostorms_header.png")}
      />
        <Text>A geomagnetic storm is a major disturbance of Earth's magnetosphere that occurs when there is a very efficient exchange of energy from the solar wind into the space environment surrounding Earth. These storms result from variations in the solar wind that produces major changes in the currents, plasmas, and fields in Earth’s magnetosphere. The solar wind conditions that are effective for creating geomagnetic storms are sustained (for several to many hours) periods of high-speed solar wind, and most importantly, a southward directed solar wind magnetic field (opposite the direction of Earth’s field) at the dayside of the magnetosphere. This condition is effective for transferring energy from the solar wind into Earth’s magnetosphere.</Text>
        <Text>RECENT EVENTS: </Text>
        {this.state.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          this.state.geoStorms.map((i, idx) => {
            return (
              <Card style={{ margin: 5, width: "94%" }} key={idx}>
                <Card.Content>
                  <Text>Start Time: {i.startTime}</Text>
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
