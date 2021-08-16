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
          {this.state.isLoading 
          ? <Text>Loading...</Text>
          : <Text>Latitude: {this.state.latitude}, Longitude: {this.state.longitude}</Text>
            }
        </ScrollView>
      );
    }
  }
  
  export default ISS;