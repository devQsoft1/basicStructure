//---------- imports

// react
import React, { useEffect, useState, createContext, useContext } from "react";

//---------- context

import { AppContext } from './ThemeContext'


const ContextHelper = () => {

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
    } = useContext(AppContext);

    //---------- main app / component

    return {
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
    }

}

//---------- export component

export default ContextHelper;
