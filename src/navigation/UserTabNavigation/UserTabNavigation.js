//---------- imports

// react
import * as React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

// navigations
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icons
import HomeIcon from "../../Assets/Icons/HomeIcon";
import SearchIcon from "../../Assets/Icons/SearchIcon";
import UserIcon from "../../Assets/Icons/UserIcon";
import MenuIcon from "../../Assets/Icons/MenuIcon";
import SaveIcon from "../../Assets/Icons/SaveIcon";

// components
import SearchScreen from "../../Components/SearchScreen";
import FavoriteScreen from "../../Components/FavoriteScreen";
import UserScreen from "../../Components/UserScreen";
import MenuScreen from "../../Components/MenuScreen";
import HomeScreen from "../../Components/HomeScreen";

// drawer contents
import DrawerContent from "../../Common/DrawerContent";

// global stack veriable
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//---------- main app / component

function HomeNavigation(props) {

  //---------- return main view

  return (
    <Stack.Navigator
      initialRouteName={"Home"}
    >

      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={Home}
      />

    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function UserTabNavigation() {

  console.log('-------------------------, admin')

  //---------- return main view of drawer

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          let Icon
          if (route.name === 'HomeScreen') {

            Icon = <HomeIcon fill={focused ? '#42AEEC' : '#000'} />
          } else if (route.name === 'SearchScreen') {

            Icon = <SearchIcon fill={focused ? '#42AEEC' : '#000'} />
          } else if (route.name === 'favoriteScreen') {

            Icon = <SaveIcon fill={focused ? '#42AEEC' : '#000'} />
          } else if (route.name === 'UserScreen') {

            Icon = <UserIcon fill={focused ? '#42AEEC' : '#000'} />
          } else if (route.name === 'MenuScreen') {

            Icon = <MenuIcon fill={focused ? '#42AEEC' : '#000'} />
          }

          // You can return any component that you like here!
          return <View>
            {
              Icon
            }
          </View>

        },
        tabBarLabel: () => { return null },

      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="SearchScreen"
        component={SearchScreen}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="favoriteScreen"
        component={FavoriteScreen}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="UserScreen"
        component={UserScreen}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="MenuScreen"
        component={MenuScreen}
      />

    </Tab.Navigator>
  );
}






// function drawerNAvigation() {
//   //---------- return main view of drawer

//   return (
//     <Drawer.Navigator
//       drawerContent={(props) =>
//         <DrawerContent {...props} />}
//     >

//       <Drawer.Screen
//         options={{ headerShown: false }}
//         name="HomeNavigation"
//         component={HomeNavigation}
//       />

//     </Drawer.Navigator>
//   );
// }

//---------- export component

export default UserTabNavigation;
