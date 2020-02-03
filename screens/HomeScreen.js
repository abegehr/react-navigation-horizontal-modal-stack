import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate("Links")}>
        <Text style={styles.link}>Open Links</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Settings")}>
        <Text style={styles.link}>Open Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 64,
    color: "#fff",
    margin: 24
  },
  link: {
    fontSize: 36,
    color: "#fff",
    textDecorationLine: "underline"
  }
});
