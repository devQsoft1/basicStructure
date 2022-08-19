//----------- imports 

// react
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Image, SafeAreaView } from 'react-native'

// context 
import ContextHelper from "../ContextHooks/ContextHelper";

// style and image
import { darkSplash, lightSplash } from "../constants/Images";
import AuthStyles from "../style/AuthStyles";
import SpaceStyles from "../style/SpaceStyles";

//---------- main component

function SplashScreen({ navigation }) {

    //---------- context and state

    const [isSetupDone, setIssetupDone] = useState(false)
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


    useEffect(() => {

        const setup = async () => {
            const current_user = await getDataFromAsyncStorage('current_user');

            if (current_user) {

                setCurrentUser(current_user)
            } else {

                setCurrentUser({
                    user_type: 'none'
                })
            }
        }
        setup()


        setTimeout(() => {
            setIssetupDone(true)
        }, 3000);

        return () => {
            // this now gets called when the component unmounts
        };
    }, []);

    useEffect(() => {

        if (currentUser?.user_type && isSetupDone) {

            navigateHelper()
        }
    }, [currentUser, isSetupDone])

    const navigateHelper = () => {

    console.log('-------------------currentUser------, currentUser', currentUser)


        currentUser?.user_type === 'business_owner' ?
            navigation.replace('AdminNavigator')
            :
            currentUser?.user_type === 'patron' ?
                navigation.replace('UserNavigator')
                :
                navigation.replace('AuthNavigator')
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <SafeAreaView />

            <View
                style={SpaceStyles.flexCenter}
            >
                <Image
                    source={isDarkTheme ? darkSplash : lightSplash}
                    resizeMode='contain'
                />
            </View>
            <SafeAreaView />
        </View>
    )
}

export default SplashScreen;