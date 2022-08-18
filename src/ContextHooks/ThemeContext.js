//---------- imports

// react
import React, { useEffect, useState, createContext } from "react";
import { StyleSheet, ScrollView, View, Text, useColorScheme } from "react-native";


//---------- context

const AppContext = createContext();

//---------- main app / component

const GlobalContextProvide = (props) => {

    //---------- state, veriables and hooks
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [appStateObject, setAppStateObject] = useState({})
    const [appStateArray, setAppStateArray] = useState([])

    //---------- life cycle

    useEffect(() => {
    }, []);



    //---------- user's action

    // change theme
    const changeTheme = () => {

        setIsDarkTheme(!isDarkTheme)
    }

    // store data in state
    const storeDataInAppState = ({ data, key }) => {

        setAppStateObject({
            [key]: data,
            ...appStateObject
        })
    }

    // remove data from app state
    const removeDataInAppState = ({ key }) => {

        setAppStateObject({
            [key]: {},
            ...appStateObject
        })
    }

    //---------- return main view

    return (
        <AppContext.Provider
            value={{
                isDarkTheme,
                appStateObject,
                appStateArray,

                changeTheme,
                storeDataInAppState,
                removeDataInAppState,
            }}
        >

            {
                props.children
            }
        </AppContext.Provider >

    );
};

//---------- export component

export { GlobalContextProvide, AppContext };
// export default { GlobalContextProvide, AppContext };
