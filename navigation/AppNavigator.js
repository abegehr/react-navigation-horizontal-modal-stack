import React from "react";
import { Animated } from "react-native";
import { createAppContainer } from "react-navigation";
import {
  createStackNavigator,
  TransitionPresets
} from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

const { multiply } = Animated;

export function forHorizontalModal({
  current,
  next,
  inverted,
  layouts: { screen }
}: StackCardInterpolationProps): StackCardInterpolatedStyle {
  const translateFocused = multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.width, 0],
      extrapolate: "clamp"
    }),
    inverted
  );

  const overlayOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.07],
    extrapolate: "clamp"
  });

  const shadowOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.3],
    extrapolate: "clamp"
  });

  return {
    cardStyle: {
      transform: [
        // Translation for the animation of the current card
        { translateX: translateFocused },
        // Translation for the animation of the card in back
        { translateX: 0 }
      ]
    },
    overlayStyle: { opacity: overlayOpacity },
    shadowStyle: { shadowOpacity }
  };
}

export default createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen,
      Links: {
        screen: LinksScreen,
        navigationOptions: {
          gestureDirection: "horizontal",
          cardStyleInterpolator: forHorizontalModal
        }
      },
      Settings: {
        screen: SettingsScreen,
        navigationOptions: {
          gestureDirection: "horizontal-inverted",
          cardStyleInterpolator: forHorizontalModal
        }
      }
    },
    {
      initialRouteName: "Home",
      mode: "modal",
      headerMode: "none",
      defaultNavigationOptions: {
        cardStyle: {
          backgroundColor: "rgba(0, 0, 0, 0)"
        }
      }
    }
  )
);
