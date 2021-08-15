//Where is the ISS "widget" for homepage! 
//ISS API URL: http://api.open-notify.org/iss-now.json
//This returns a JSON key and then we'll use a reverse geocoding API to get the location of where the ISS is over. 

//MapQuest Reverser Geocoding
//API KEY: RSGQuH2GBJFma7QGvjTVgsuVsvTCJCY6
//EXAMPLE GET REQUEST: http://www.mapquestapi.com/geocoding/v1/reverse?key=KEY&location=30.333472,-81.470448&includeRoadMetadata=true&includeNearestIntersection=true



///////////////////IMPORTS////////////////
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button, TouchableRipple } from "react-native-paper";

//////////////////////////////////////////


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffe3e3",
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
        latitude: null,
        longitude: null,
        isLoading: true,
        mapQuestData: null,
      };
    }
  
    componentDidMount() {
      const ISS_API = `http://api.open-notify.org/iss-now.json`;
      fetch(ISS_API)
        .then(res => res.json())
        .then(data => {
          console.log("Raw Date for Reference", data); //included in final code deliberately
          let latitude = data.iss_position.latitude
          let longitude = data.iss_position.longitude
          this.setState({latitude, longitude, isLoading: false})
        });
    }
  
    render() {
      return (
        <ScrollView style={styles.container}>
          <Text>Where is the ISS?</Text>
          {this.state.isLoading 
          ? <Text>Loading...</Text>
          : <Text>{this.state.latitude}, {this.state.longitude}</Text>
            }
        </ScrollView>
      );
    }
  }
  
  export default SolarFlares;
  