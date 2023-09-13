import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReportsScreen, SCREENS } from "../screens";

export type ReportsNavigatorParamList = {
  Reports: undefined,
  ReportDetails: undefined
}

const Stack = createNativeStackNavigator<ReportsNavigatorParamList>();
export const ReportsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SCREENS.Reports}>
      <Stack.Screen name={SCREENS.Reports} component={ReportsScreen} />
    </Stack.Navigator>
  );
};
