//---------- imports

// react
import React, { useEffect, useState } from "react";

// navigations
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import AuthNavigation from "./AuthNavigator/AuthNavigation";
import AdminTabNavigation from "./AdminTabNavigation/AdminTabNavigation";
import UserTabNavigation from './UserTabNavigation/UserTabNavigation'

import SplashScreen from '../Common/SplashScreen';

// global stack veriable
const Stack = createStackNavigator();

//---------- main app / component

function StackNaviagtion(props) {

  //---------- state, redux state, veriable and hooks


  //---------- life cycle

  useEffect(() => {
  }, []);

  //---------- return main view

  return (
    <Stack.Navigator initialRouteName="SplashScreen">

      <Stack.Screen
        options={{ headerShown: false }}

        name="SplashScreen"
        component={SplashScreen} />

      <Stack.Screen
        options={{ headerShown: false }}
        name="AuthNavigator"
        component={AuthNavigation}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="UserNavigator"
        component={UserTabNavigation}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="AdminNavigator"
        component={AdminTabNavigation}
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
