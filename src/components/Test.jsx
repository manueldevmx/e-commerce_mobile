//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from 'react-native-paper';


// create a component
const Test = () => {
  return (
    <View style={styles.container}>
       <Button icon="network" mode="outlined" color="red" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
   
  },
});

//make this component available to the app
export default Test;
