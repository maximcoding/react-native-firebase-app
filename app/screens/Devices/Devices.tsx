import React, { FC } from "react";
import { Text, View, ViewStyle } from "react-native";
import { BottomTabProps } from "../../navigators/BottomTabs";
import { useStore } from "../../store/useStore";


interface DevicesListScreenProps extends BottomTabProps<any> {
}


export const Devices: FC<DevicesListScreenProps> = function DevicesScreen() {

  const logout = useStore(state => state.logout);
  const onSignOut = () => logout();
  return (
    <View>
      <Text>DEVICES LIST</Text>
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1
};
