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

import ContextHelper from '../ContextHooks/ContextHelper'
import CustomView from "../Common/CustomView";

//---------- main component

const HomeScreen = ({ navigation }) => {

  //---------- state, veriable, context and hooks

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

  //---------- life cycles

  useEffect(() => {

  }, [])

  //---------- main return

  return (
    <Frame>



      <CustomView>
        <CustomText
          text={"HomeScreen"}
          style={{
            color: isDarkTheme ? '#fff' : 'gray'
          }}
        />
      </CustomView>

      <CustomView
        style={{
          flexDirection: 'row', justifyContent: 'center', backgroundColor: isDarkTheme ? 'red' : 'green', alignSelf: 'center', padding: 10
        }}
      >

        <TouchableOpacity
          onPress={() => {
            changeTheme()
          }}
        >
          <CustomText
            text={"change theme"}
          />
        </TouchableOpacity>

      </CustomView>


    </Frame>
  );
};

//---------- export component

export default HomeScreen;



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
