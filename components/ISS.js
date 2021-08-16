///////////////////IMPORTS////////////////

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Button, TouchableRipple } from "react-native-paper";

//////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
    width: "100%",
    height: "10%",
    margin: 10,
  },
});

class ISS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      isLoading: true,
      location: null,
      isLocationLoading: true,
    };
  }

  componentDidMount() {
    const ISS_API = `http://api.open-notify.org/iss-now.json`;
    fetch(ISS_API)
      .then(res => res.json())
      .then(data => {
        console.log("Raw Data for Reference", data); //included in final code deliberately
        let latitude = data.iss_position.latitude;
        let longitude = data.iss_position.longitude;
        this.setState({ latitude, longitude, });
        if (this.state.isLocationLoading){
          let API_KEY = "2f4cef923734433286237b0d86511558";
          let API_URL = `https://api.opencagedata.com/geocode/v1/json?q=${data.iss_position.latitude}+${data.iss_position.longitude}&key=${API_KEY}`;
      
          fetch(API_URL)
            .then(res => res.json())
            .then(data => {
              console.log("Raw Data for Reference", data); //included in final code deliberately
              this.setState({
                location: data.results.map(info => info.formatted),
                isLoading: false,
                isLocationLoading: false,
              });
            });
          }
      }); 
  }



  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <Text>
              Latitude: {this.state.latitude}, Longitude: {this.state.longitude}
            </Text>
            <Text>
              The International Space Station is over{" "}
              {this.state.isLocationLoading
                ? "these coordinates"
                : this.state.location}
              !
            </Text>
          </View>
        )}
      </ScrollView>
    );
  }
}

export default ISS;
