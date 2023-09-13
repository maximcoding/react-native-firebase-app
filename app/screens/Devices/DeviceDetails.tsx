import React, { FC } from "react"
import { Button, ViewStyle } from "react-native"
import { ScreenX, Text } from "../../components";
import { BottomTabProps } from "../../navigators/BottomTabs"
import { SCREENS } from "../index";

interface DeviceDetailsScreenProps extends BottomTabProps<SCREENS.DeviceDetails> {
}


export const DeviceDetails: FC<DeviceDetailsScreenProps> = function DeviceDetailsScreen() {


  const onSignOut = () => {
  }

  return (
    <ScreenX style={$root} preset="scroll">
      <Button title={"Sign out"} onPress={onSignOut} />
    </ScreenX>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
