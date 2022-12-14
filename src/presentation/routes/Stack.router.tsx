import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';
import BottomRouter from './Bottom.router';

import { Splash } from '../flows/splash';
import Details from '../flows/repositories/details';
import { RepositoryTypes } from '../context/repository';

export type StackRootParamList = {
  Splash: undefined;
  BottomRouter: undefined;
  Details: {
    repository: RepositoryTypes
  } | undefined;

};

const Stack = createStackNavigator<StackRootParamList>();

export default function StackRouter() {
  const theme = useTheme();

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomRouter"
        component={BottomRouter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerBackTitleVisible: false,
          title: 'Detalhes',
          headerStyle: {
            backgroundColor: theme.colors.BLACK,
          },
          headerTintColor: theme.colors.WHITE,
          headerTitleStyle: {
            fontFamily: theme.fonts.MEDIUM,
            fontSize: 20,
          },
          headerTitleAlign: 'left',
        }}
      />
    </Stack.Navigator>
  );
}
