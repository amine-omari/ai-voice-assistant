import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <LinearGradient colors={["#250152", "#000"]}>
      <Text>HomeScreen</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
