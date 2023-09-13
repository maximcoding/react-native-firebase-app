import { FlexStyle } from "react-native";
import { Edge, useSafeAreaInsets } from "react-native-safe-area-context";

export type ExtendedEdge = Edge | "start" | "end"

// Note: "start" maps to the "left" value. "end" maps to "right.

const propertySuffixMap = {
  top: "Top",
  bottom: "Bottom",
  left: "Start",
  right: "End",
  start: "Start",
  end: "End"
};

const edgeInsetMap = {
  start: "left",
  end: "right"
};

/**
 * A hook that can be used to create a safe-area-aware style object that can be passed directly to a View.
 */

// The useSafeAreaInsetsStyle() hook can be used to create a safe-area-aware style object that can be passed directly to a View.
export function useSafeAreaInsetsStyle(
  safeAreaEdges: ExtendedEdge[] = [],
  property: "padding" | "margin" = "padding"
): Pick<
  FlexStyle,
  | "marginBottom"
  | "marginEnd"
  | "marginStart"
  | "marginTop"
  | "paddingBottom"
  | "paddingEnd"
  | "paddingStart"
  | "paddingTop"
> {
  const insets = useSafeAreaInsets();

  return safeAreaEdges.reduce((acc, e) => {
    return { ...acc, [`${property}${propertySuffixMap[e]}`]: insets[edgeInsetMap[e] ?? e] };
  }, {});
}


// Example of use
// <View style={useSafeAreaInsetsStyle(["top"], "padding")} />


// safeAreaEdges: ExtendedEdge[]
// The first parameter is a list of edges that need to be safe-area-aware. In order for the hook to return an object with values, at least one edge needs to be provided. Default is [].

// const $insetsStyle = useSafeAreaInsetsStyle(["top", "left"])
// console.log($insetsStyle) // { paddingTop: 47, paddingStart: 0 }


// property: "padding" | "margin"
// The second parameter specifies the property prefix that will be used to compose the style object. Default is padding.


// const $insetsPaddingStyle = useSafeAreaInsetsStyle(["bottom"], "padding")
// const $insetsMarginStyle = useSafeAreaInsetsStyle(["bottom"], "margin")
// console.log($insetsPaddingStyle) // { paddingBottom: 28 }
// console.log($insetsMarginStyle) // { marginBottom: 28 }
