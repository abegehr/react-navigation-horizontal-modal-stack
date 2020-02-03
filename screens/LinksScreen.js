import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LinksScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Links</Text>

      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text style={styles.link}>Go Back</Text>
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
