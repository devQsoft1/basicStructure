// react
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";

// common componets
import CustomText from "../Common/CustomText";
import HeaderRight from "../Common/HeaderRight";
import HeaderTitle from "../Common/HeaderTitle";
import HeaderLeft from "../Common/HeaderLeft";

import { backIcon, drawerIcon } from "../constants/Images";

// styles
import AuthStyles from "../style/AuthStyles";
import SpaceStyles from "../style/SpaceStyles";
import TextStyles from "../style/TextStyles";
import Frame from "../Common/Frame";

import { AppContext } from '../ContextHooks/ThemeContext'

//---------- main component

const HomeScreen = ({ navigation }) => {

  //---------- state, veriable, context and hooks
  const {
    isDarkTheme,
    appStateObject,
    appStateArray,
    changeTheme,
    storeDataInAppState,
    removeDataInAppState,
  } = useContext(AppContext);

  console.log('------------------------------------------')
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <HeaderRight
  //         iconName1={""}
  //         iconName2={""}
  //         iconName3={drawerIcon}
  //         onPress3={() => navigation.openDrawer()}
  //       />
  //     ),
  //     headerTitle: () => <HeaderTitle title={"HomeScreen"} />,
  //     headerLeft: () => (
  //       <HeaderLeft
  //         text={""}
  //         iconName={backIcon}
  //         onPress={() => navigation.goBack()}
  //       />
  //     ),
  //   });
  // }, [navigation]);

  useEffect(() => {

    console.log('isDarkTheme', isDarkTheme)
  }, [isDarkTheme])

  //---------- main return

  return (
    <Frame>

      <CustomText
        text={"HomeScreen"}
        style={[TextStyles.textBold24Black, { alignSelf: "center" }, SpaceStyles.bottom20]}
      />

      <TouchableOpacity

        style={{
          backgroundColor: 'red',
          width: '100%',
          height: 50
        }}
        onPress={() => {
          changeTheme()
        }}
      >
        <Text>

          Click me
        </Text>
      </TouchableOpacity>


    </Frame>
  );
};

//---------- export component

export default HomeScreen;

