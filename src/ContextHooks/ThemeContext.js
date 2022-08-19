//---------- imports

// react
import React, { useEffect, useState, createContext } from "react";
import { StyleSheet, ScrollView, View, Text, useColorScheme } from "react-native";

// third party lib
import AsyncStorage from "@react-native-async-storage/async-storage";


//---------- context

const AppContext = createContext();

//---------- main app / component

const GlobalContextProvide = (props) => {

    //---------- state, veriables and hooks
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const [theme, setTheme] = useState({
        backgroundColor: '#fff',
        color: '#000'
    })
    const [appStateObject, setAppStateObject] = useState({})
    const [appStateArray, setAppStateArray] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    //---------- life cycle

    useEffect(() => {
        const setup = async () => {
            const current_theme = await getDataFromAsyncStorage('current_theme');
            // const current_user = await getDataFromAsyncStorage('current_user');
            if (current_theme) {

                setIsDarkTheme(current_theme?.isDarkTheme)
                setTheme({
                    backgroundColor: current_theme?.backgroundColor,
                    color: current_theme?.color
                })
            }

            // if (current_user) {

            //     setCurrentUser(current_user)
            // }
        }
        setup()
        return () => {
            // this now gets called when the component unmounts
        };
    }, []);

    //---------- user's action

    // change theme
    const changeTheme = () => {

        if (isDarkTheme) {

            setIsDarkTheme(false)
            setTheme({
                backgroundColor: '#fff',
                color: '#000'
            })
            storeDataInAsyncStorage({
                key: 'current_theme',
                value: {
                    isDarkTheme: false,
                    backgroundColor: '#fff',
                    color: '000'

                }
            })
        } else {

            setIsDarkTheme(true)
            setTheme({
                backgroundColor: '#000',
                color: '#fff'
            })
            storeDataInAsyncStorage({
                key: 'current_theme',
                value: {
                    isDarkTheme: true,
                    backgroundColor: '#000',
                    color: 'fff'
                }
            })
        }
    }

    // store data in state
    const storeDataInAppState = ({ data, key }) => {

        setAppStateObject({
            [key]: data,
            ...appStateObject
        })
    }

    // remove data from app state
    const removeDataFromAppState = ({ key }) => {

        setAppStateObject({
            [key]: {},
            ...appStateObject
        })
    }

    //---------- async storage

    // store
    const storeDataInAsyncStorage = async ({ key, value }) => {

        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
            return true
        } catch (e) {
            // saving error
            return false
        }
    }

    // get data
    const getDataFromAsyncStorage = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value !== null) {

                return JSON.parse(value)
            }

            return false
        } catch (e) {

            // error reading value
            return false
        }
    }

    //---------- return main view

    return (
        <AppContext.Provider
            value={{
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
