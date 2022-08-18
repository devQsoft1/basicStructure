import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Image, SafeAreaView } from 'react-native'

import { splashLog } from "../constants/Images";
import NavigationService from "../navigation/NavigationService";

import AuthStyles from "../style/AuthStyles";
import SpaceStyles from "../style/SpaceStyles";

const mapState = ({ localReducer }) => ({
    isLoggedIn: localReducer.isLoggedIn,
});

function SpalshScreen({ navigation }) {

    const { isLoggedIn } = useSelector(mapState);

    useEffect(() => {
        setTimeout(() => {
            !isLoggedIn ?
                navigation.replace('Route')
                :
                navigation.replace('AuthNavigator')
        }, 1000);
    }, []);

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
                    source={splashLog}
                    resizeMode='contain'
                />
            </View>
            <SafeAreaView />
        </View>
    )
}

export default SpalshScreen;