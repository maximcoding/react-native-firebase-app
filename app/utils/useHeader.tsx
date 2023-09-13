import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Header, HeaderProps } from "../components/Header";

/**
 * A hook that can be used to easily set the Header of a react-navigation screen from within the screen's component.
 */
export function useHeader(
  headerProps: HeaderProps,
  deps: Parameters<typeof useLayoutEffect>[1] = []
) {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header {...headerProps} />
    });
  }, [...deps, navigation]);
}


// Example of use

// useHeader({
//   rightTx: "common.logOut",
//   leftTx: "common.back",
//   onRightPress: logout,
//   onLeftPress: goBack,
// })

// function AccountScreen() {
//   useHeader({
//     rightTx: "common.logOut",
//     onRightPress: logout,
//   })
//
//   return <ScreenX />
// }


// const [count, setCount] = useState(1)
// useEffect(() => {
//   setTimeout(() => setCount(count + 1), 1000)
// }, [count])
//
// useHeader(
//   {
//     title: `Count: ${count}`,
//   },
//   [count],
// )
