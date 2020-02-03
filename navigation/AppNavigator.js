import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

export default createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen,
      Links: {
        screen: LinksScreen,
        navigationOptions: { gestureDirection: "horizontal" }
      },
      Settings: {
        screen: SettingsScreen,
        navigationOptions: { gestureDirection: "horizontal-inverted" }
      }
    },
    {
      initialRouteName: "Home",
      mode: "modal",
      headerMode: "none",
      initialRouteName: "Home",
      defaultNavigationOptions: {
        cardStyle: {
          backgroundColor: "rgba(0, 0, 0, 0)"
        }
      }
    }
  )
);
