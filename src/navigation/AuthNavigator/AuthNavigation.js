//---------- imports

// react
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// components
import HomeScreen from "../../Components/HomeScreen";

// global stack veriable
const Stack = createStackNavigator();

//---------- main app / component

function AuthNavigation(props) {

    console.log('-------------------------, auth')
    //---------- return main view

    return (
        <Stack.Navigator
            initialRouteName={'Login'}
            options={{ headerShown: false }}
        >

            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Login" component={HomeScreen} />
          

        </Stack.Navigator>
    )
}

//---------- export component

export default AuthNavigation