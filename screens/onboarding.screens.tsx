import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { onBoardingData } from "@/config/constants";

export default function OnBoardingScreen() {
  return (
    <LinearGradient
      colors={["#250152", "#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      {onBoardingData.map(() => (
        <View></View>
      ))}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
