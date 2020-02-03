import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

export default createAppContainer(
  createStackNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Home: HomeScreen,
      Links: LinksScreen,
      Settings: SettingsScreen
    },
    {
      initialRouteName: "Home"
    }
  )
);
