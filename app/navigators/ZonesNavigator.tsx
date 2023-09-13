import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS, ZonesScreen } from "../screens";

export type ZonesNavigatorParamList = {
  Zones: undefined
}

const Stack = createNativeStackNavigator<ZonesNavigatorParamList>();
export const ZonesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SCREENS.Zones}>
      <Stack.Screen name="Zones" component={ZonesScreen} />
    </Stack.Navigator>
  );
};
