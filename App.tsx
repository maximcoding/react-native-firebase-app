import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppNavigator } from "./app/navigators";
import "./app/i18n";
import { withTranslation } from "react-i18next";


function App() {

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default withTranslation()(App);
