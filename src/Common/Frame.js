//---------- imports

// react
import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text, useColorScheme } from "react-native";

//---------- main app / component

const Frame = (props) => {

    //---------- state, veriables and hooks

    //---------- life cycle

    useEffect(() => {
    }, []);

    //---------- return main view

    return (
        <View
            style={
                {
                    flex: 1,
                }
            }
        >
            <ScrollView>
                {
                    props.children
                }
            </ScrollView>
        </View>
    );
};

//---------- export component

export default Frame;
