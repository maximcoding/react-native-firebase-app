import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Screens from "../screens";
import { SCREENS } from "../screens";

export type AuthNavigatorParamList = {
  [SCREENS.Login]: undefined,
  [SCREENS.Signup]: undefined
}

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SCREENS.Login}>
      <Stack.Screen name={SCREENS.Login} component={Screens.LoginScreen} />
      <Stack.Screen name={SCREENS.Signup} component={Screens.SignupScreen} />
    </Stack.Navigator>
  );
};
