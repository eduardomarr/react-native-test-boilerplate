import React from "react";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Header from "../components/Header";
import Home from "../flows/repositories/home";
import Favorites from "../flows/favorites";
import { useRepository } from "../hooks/useRepository";

const Tab = createBottomTabNavigator();

export default function BottomRouter() {
  const theme = useTheme();
  const { toggleUserSelectionModal } = useRepository();

  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <Header title="WeFit" onPress={toggleUserSelectionModal} />,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.MEDIUM,
        },
      }}
    >
      <Tab.Screen
        name="Tela 1"
        component={Home}
      />
      <Tab.Screen
        name="Tela 2"
        component={Favorites}
      />
    </Tab.Navigator>
  );
}
