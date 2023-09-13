import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DeviceDetails, SCREENS } from "../screens"
import { Devices } from "../screens/Devices/Devices"

export type DevicesNavigatorParamList = {
  [SCREENS.DevicesList]: undefined
  [SCREENS.DeviceDetails]: undefined
}

const Stack = createNativeStackNavigator<DevicesNavigatorParamList>()
export const DevicesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SCREENS.DevicesList}>
      <Stack.Screen name={SCREENS.DevicesList} component={Devices} />
      <Stack.Screen name={SCREENS.DeviceDetails} component={DeviceDetails} />
    </Stack.Navigator>
  )
}
