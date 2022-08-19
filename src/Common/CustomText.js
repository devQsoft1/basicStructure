import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { BLACK } from "../constants/Colors";

import ContextHelper from "../ContextHooks/ContextHelper";

const CustomText = (props) => {

  const { numberOfLines, text, style } = props;

  const {
    isDarkTheme,
    theme,
    appStateObject,
    appStateArray,
    currentUser,

    changeTheme,
    storeDataInAppState,
    removeDataFromAppState,
    storeDataInAsyncStorage,
    getDataFromAsyncStorage,
    setCurrentUser,
  } = ContextHelper()

  return (
    <Text numberOfLines={numberOfLines} style={[{color:theme?.color}, style,]}>
      {text}
    </Text>
  );
};

export default CustomText;
