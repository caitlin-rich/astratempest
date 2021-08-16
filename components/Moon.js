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
    backgroundColor: "#E6E6FA",
    height: "10%",
    margin: 10,
  },
});

class MoonPhase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moonPhase: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const MOON_API =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Herndon,VA?unitGroup=us&key=2FMJBN7V7ATZUHUDN6R2JKF4L&include=days&elements=datetime,moonphase,sunrise,sunset";

    fetch(MOON_API)
      .then(res => res.json())
      .then(data => {
        console.log("Raw Data for Reference", data.days); //included in final code deliberately
        let moonPhase = data.days.map(day => day);
        this.setState({ moonPhase, isLoading: false });
      });
  }

  render() {
    return (
      <ScrollView style={styles.container} horizontal={true}>
        {this.state.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          this.state.moonPhase.map((day, idx) => {
            return (
              <Card key={idx} style={{ marginTop: 10, width: 80, height: 80, marginRight: 5, }}>
                <Text>{day.datetime}:</Text>
                {day.moon === 0 ? (
                  <Image
                    source={require("../images/moon_phases/new_moon.png")}
                  />
                ) : 0 < day.moon < 0.25 ? (
                  <Image
                    source={require("../images/moon_phases/waxing_cresent.png")}
                  />
                ) : day.moon === 0.25 ? (
                  <Image
                    source={require("../images/moon_phases/first_quarter.png")}
                  />
                ) : 0.25 < day.moon < 0.5 ? (
                  <Image
                    source={require("../images/moon_phases/waxing_gibbous.png")}
                  />
                ) : day.moon === 0.5 ? (
                  <Image
                    source={require("../images/moon_phases/full_moon.png")}
                  />
                ) : 0.5 < day.moon < 0.75 ? (
                  <Image
                    source={require("../images/moon_phases/waning_gibbous.png")}
                  />

                ) : day.moon === 0.75 ? (
                  <Image
                    source={require("../images/moon_phases/last_quarter.png")}
                  />
                ) : 0.75 < day.moon < 1.1 ? (
                  <Image
                    source={require("../images/moon_phases/waning_cresent.png")}
                  />
                ) : (
                  <Text>Moon Phase Data Not Available</Text>
                )}
              </Card>
            );
          })
        )}
      </ScrollView>
    );
  }
}

export default MoonPhase;
