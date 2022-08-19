//---------- imports

// react
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, ScrollView, View, Text, useColorScheme } from "react-native";

import ContextHelper from "../ContextHooks/ContextHelper";

//---------- main app / component

const CustomView = (props) => {

    //---------- state, veriables and hooks

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
    } = ContextHelper();

    //---------- life cycle

    useEffect(() => {

    }, []);

    //---------- return main view 

    return (
        <View
            style={[theme, props?.style]}
        >
            {
                props.children
            }
        </View>
    );
};

//---------- export component

export default CustomView;
