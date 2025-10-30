import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import FeedScreen from "./screen/pantallaRecorte";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" />
      <FeedScreen />
    </SafeAreaView>
  );
}
