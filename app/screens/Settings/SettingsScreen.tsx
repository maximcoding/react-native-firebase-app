import React, { FC } from "react";
import { ViewStyle } from "react-native";
import { AppStackScreenProps } from "app/navigators";
import { SCREENS } from "../index";
import { ScreenX, Text } from "../../components";

interface SettingsScreenProps extends AppStackScreenProps<SCREENS.Settings> {
}

export const SettingsScreen: FC<SettingsScreenProps> = () => {
  return (
    <ScreenX style={$root} preset="scroll">
      <Text text="settings" />
    </ScreenX>
  );
};

const $root: ViewStyle = {
  flex: 1
};
