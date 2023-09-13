import React, { FC } from "react"
import { ViewStyle } from "react-native"
import { ScreenX, Text } from "../../components";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ReportsScreenProps extends BottomTabScreenProps<any> {
}

export const ReportsScreen: FC<ReportsScreenProps> = function ReportsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <ScreenX style={$root} preset="scroll">
      <Text text="reports" />
    </ScreenX>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
