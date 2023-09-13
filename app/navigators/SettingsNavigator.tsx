import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SCREENS, SettingsScreen } from "../screens"

export type SettingsNavigatorParamList = {
  Settings: undefined
}

const Stack = createNativeStackNavigator<SettingsNavigatorParamList>()
export const SettingsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SCREENS.Settings} component={SettingsScreen} />
    </Stack.Navigator>
  )
}
