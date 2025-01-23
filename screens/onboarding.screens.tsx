import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OnBoardingScreen() {
  return (
    <LinearGradient colors={["#250152", "#000000"]}>
      <Text>OnBoardingScreen</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
