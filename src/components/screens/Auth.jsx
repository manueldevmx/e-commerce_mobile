//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { TextInput, Button } from "react-native-paper";
import { layoutStyles } from "../../styles";
import RegisterForm from "../Auth/RegisterForm";



// create a component
const Auth = () => {
  const [text, setText] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  return (
    <View style={styles.container}>
    {showLogin ? <Text>Form Login</Text> : <Text>Form Register</Text>}
     
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDD6BC",
  },
});

//make this component available to the app
export default Auth;
