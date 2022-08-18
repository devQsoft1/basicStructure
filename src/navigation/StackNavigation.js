//---------- imports

// react
import React, { useEffect, useState } from "react";

// navigations
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import AuthNavigation from "./AuthNavigator/AuthNavigation";
import HomeNavigation from "./HomeNavigator/HomeNavigation";

import SpalshScreen from '../Common/SpalshScreen';

// global stack veriable
const Stack = createStackNavigator();

const mapState = ({ localReducer }) => ({
  isLoggedIn: localReducer.isLoggedIn,
});

//---------- main app / component

function StackNaviagtion(props) {
  
  //---------- state, redux state, veriable and hooks
  
  const { isLoggedIn } = useSelector(mapState);

  //---------- life cycle
  
  useEffect(() => {
    console.log("Is Logged In =>", isLoggedIn);
  }, [isLoggedIn]);
  
  //---------- return main view
  
  return (
    <Stack.Navigator initialRouteName="SpalshScreen">

      <Stack.Screen
        options={{ headerShown: false }}

        name="SpalshScreen"
        component={SpalshScreen} />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Route"
        component={HomeNavigation}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="AuthNavigator"
        component={AuthNavigation}
      />

      {
        //   !isLoggedIn ? (
        //     <Stack.Screen
        //       options={{ headerShown: false }}
        //       name="Route"
        //       component={Route}
        //     />
        //   ) : (
        //     <Stack.Screen
        //       options={{ headerShown: false }}
        //       name="AuthNavigator"
        //       component={AuthNavigation}
        //     />
        //   )
      }

    </Stack.Navigator>
  );
}

//---------- export component

export default StackNaviagtion;
