import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SCREENS } from "../screens";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { useStore } from "../store/useStore";
import React from "react";
import { palette } from "../theme/themes";
import { SettingsNavigator } from "./SettingsNavigator";
import { DevicesNavigator } from "./DevicesNavigator";
import { ReportsNavigator } from "./ReportsNavigator";
import { ZonesNavigator } from "./ZonesNavigator";

export type HomeTabParamList = {
  Devices: undefined
  DevicesNavigator: undefined
  SettingsNavigator: undefined
  ReportsNavigator: undefined
  ZonesNavigator: undefined
  DeviceDetails: undefined
  AuthNavigator: undefined
}

export type BottomTabProps<T extends keyof HomeTabParamList> = NativeStackScreenProps<HomeTabParamList, T>

const Tab = createBottomTabNavigator<HomeTabParamList>();
const renderTabIcon = (route: any, focused: boolean, color: string, size: number) => {
  let iconName = "home";
  switch (route.name) {
    case SCREENS.Devices:
      iconName = focused ? "home" : "home-outline";
      break;
    case SCREENS.Zones:
      iconName = focused ? "search" : "search-outline";
      break;
    case SCREENS.Reports:
      iconName = focused ? "notifications" : "notifications-outline";
      break;
    case SCREENS.Settings:
      iconName = focused ? "person" : "person-outline";
      break;
    default:
      iconName = focused ? "home" : "home-outline";
      break;
  }
  return (
    <Icon
      name={iconName}
      type={IconType.Ionicons}
      size={size}
      color={color}
    />
  );
};
export const BottomTabs = () => {
  const isDarkMode = useStore(state => state.isDarkMode);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) =>
          renderTabIcon(route, focused, color, size),
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: isDarkMode ? palette.black : palette.white
        }
      })}
      initialRouteName={"DevicesNavigator"}>
      <Tab.Screen name={"DevicesNavigator"} component={DevicesNavigator} />
      <Tab.Screen name={"SettingsNavigator"} component={SettingsNavigator} />
      <Tab.Screen name={"ReportsNavigator"} component={ReportsNavigator} />
      <Tab.Screen name={"ZonesNavigator"} component={ZonesNavigator} />
    </Tab.Navigator>
  );
};
