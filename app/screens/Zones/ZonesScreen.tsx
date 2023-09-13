import React, { FC } from "react"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { ScreenX, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ZonesScreenProps extends AppStackScreenProps<any> {
}

export const ZonesScreen: FC<ZonesScreenProps> = function ZonesScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <ScreenX style={$root} preset="scroll">
      <Text text="zones" />
    </ScreenX>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
