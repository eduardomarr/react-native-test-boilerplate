import React from 'react';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';
import { isIphoneX } from 'react-native-iphone-x-helper';
import Header from '../components/Header';
import Home from '../flows/repositories/home';
import Favorites from '../flows/favorites';
import { useRepository } from '../hooks/useRepository';

const Tab = createBottomTabNavigator();

export default function BottomRouter() {
  const theme = useTheme();
  const { toggleUserSelectionModal } = useRepository();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: theme.colors.GRAY_5,
        tabBarActiveTintColor: theme.colors.BLUE,
        header: () => (
          <Header title="WeFit" onPress={toggleUserSelectionModal} />
        ),
        tabBarStyle: {
          height: isIphoneX() ? RFValue(64) : RFValue(56),
          paddingBottom: isIphoneX() ? 20 : 4,
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.REGULAR,
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        name="Repositories"
        component={Home}
        options={{
          tabBarLabel: 'Repositórios',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="github" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <Ionicons name="star" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
