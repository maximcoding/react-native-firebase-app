import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ActivityIndicator, useColorScheme } from "react-native";
import Config from "../config";
import { navigationRef, useBackButtonHandler, useNavigationPersistence } from "./navigationUtilities";
import { AuthNavigator } from "./AuthNavigator";
import { useStore } from "../store/useStore";
import { BottomTabs } from "./BottomTabs";
import { colors } from "../theme";

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Home: undefined,
  Auth: undefined,
  Settings: undefined,
  Reports: undefined
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes;

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, T>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>();

const HomeStack = function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true, navigationBarColor: colors.background }}
      initialRouteName={"Home"}
    >
      <Stack.Screen name={"Home"} component={BottomTabs} />
    </Stack.Navigator>
  );
};

export interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {
}

const PERSISTENCE_KEY = "NAVIGATION_STATE_V1";


export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  const isAuthenticated = useStore(state => state.isAuthenticated);
  useBackButtonHandler((routeName) => exitRoutes.includes(routeName));

  const {
    initialState,
    onStateChange,
    isRestored
  } = useNavigationPersistence(PERSISTENCE_KEY);

  if (!isRestored) {
    return <ActivityIndicator />;
  }
  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={onStateChange}
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      {isAuthenticated ? <HomeStack /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
