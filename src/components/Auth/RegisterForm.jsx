//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const RegisterForm = () => {
  return (
    <View style={styles.container}>
      {showLogin ? <Text>Form Login</Text> : <Text>Form Register</Text>}
      <LottieView
        source={require("../../../assets/shop.json")}
        autoPlay
        loop
        style={{ margin: 33, marginBottom: 250 }}
      />
      <View>
        <Text
          style={{
            marginTop: 120,
            textAlign: "center",
            fontSize: 29,
            color: "#9119E7",
            fontFamily: "Roboto",
            fontWeight: "bold",
          }}
        >
          Iniciar sesión
        </Text>
        <TextInput
          mode="outlined"
          style={{ marginTop: 20, width: 330, backgroundColor: "#FDD6BC" }}
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          mode="outlined"
          style={{ marginTop: 20, width: 330, backgroundColor: "#FDD6BC" }}
          label="Contraseña"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <Button
        mode="contained"
        style={{
          marginTop: 90,
          fontFamily: "Roboto",
          borderBottomLeftRadius: 23,
          borderTopRightRadius: 23,
        }}
        onPress={() => console.log("Pressed")}
      >
        Iniciar sesion
      </Button>
      <Text
        style={{
          marginTop: 9,
          textAlign: "center",
          fontSize: 14,
          color: "#9119E7",
          fontFamily: "Roboto",
          fontWeight: "bold",
        }}
      >
        ¿Olvidaste tu contraseña?
      </Text>
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
export default RegisterForm;
