import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRouter from './Stack.router';

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}
