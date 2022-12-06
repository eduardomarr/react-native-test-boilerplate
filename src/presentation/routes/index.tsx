import React from "react";
import StackRouter from "./Stack.router";
import { NavigationContainer } from "@react-navigation/native";

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}
