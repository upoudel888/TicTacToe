import React from "react";
import { View } from "react-native";

import { StyleSheet } from "react-native";
import CrosswordGrid from "./components/CrosswordGrid/TicTacToeGrid";

const YourApp = () => {
  return (
    <View style={mainStyle.main}>
      <CrosswordGrid />
    </View>
  );
};

const mainStyle = StyleSheet.create({
  main: {
    flex: 1,
    gap: 32,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#002f41",
  },
});

export default YourApp;
