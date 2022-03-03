import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Auth from "./src/components/screens/Auth";



export default function App() {
  return (
    <PaperProvider>
      <Auth/>
    </PaperProvider>
  );
}


