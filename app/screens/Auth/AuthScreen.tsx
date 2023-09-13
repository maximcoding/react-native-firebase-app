import React, { FC } from "react";
import { Text, ViewStyle } from "react-native";
import { AppStackScreenProps } from "app/navigators";
import { ScreenX } from "../../components";
import { useNavigation } from "@react-navigation/native";


interface AuthScreenProps extends AppStackScreenProps<"Auth"> {
}

export const AuthScreen: FC<AuthScreenProps> = function AuthScreen() {

  const navigation = useNavigation();
  return (
    <ScreenX style={$root} preset="scroll">
      <Text>Authentication Screen</Text>
    </ScreenX>
  );
};

const $root: ViewStyle = {
  flex: 1
};
