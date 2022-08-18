//---------- imports

// react
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";

// third pary lib
import {
  useTheme,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";

// common components
import NavigationService from "../navigation/NavigationService";
import CommonStyles from "../style/CommonStyles";
import {
  audioIcon,
  contactIcon,
  disclaimerIcon,
  fAQsIcon,
  homeIcon,
  howsItWorkIcon,
  instructions,
  secureIcon,
  shutdownIcon,
  subliminalsIcon,
  termsIcon,
  testimonialsIcon,
  userIcon,
  userWhiteIcon,
} from "../constants/Images";
import CustomText from "../Common/CustomText";

// styles
import TextStyles from "../style/TextStyles";
import SpaceStyles from "../style/SpaceStyles";

// redux action

//---------- redux

const mapState = ({ user, localReducer }) => ({

  userData: user.userData,
  propertySignInSuccess: user.propertySignInSuccess,
  errors: user.errors,
  isLoggedIn: localReducer.isLoggedIn,
});

//---------- export component

export default function DrawerContent(props) {

  //---------- state, veriable and hooks
  const dispatch = useDispatch();
  const { isLoggedIn, userData } = useSelector(mapState);

  //---------- life cycle

  useEffect(() => {

    props.navigation.navigate("AuthNavigator");
  }, [isLoggedIn])

  //---------- helper: user's actions

  //---------- return main view

  const handleLoggedOut = () => {
    dispatch(ResetStates())
    dispatch(removeUser());
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={CommonStyles.drawerUserIconSection}>
            <Image source={userWhiteIcon} />
          </View>
          <CustomText
            text={userData?.name ? userData?.name : "John Carter"}
            style={[TextStyles.textQuicksand14Black, SpaceStyles.textAlign]}
          />
          <View style={CommonStyles.borderView} />

          <View style={[SpaceStyles.padding10, { paddingBottom: 20 }]}>

            <TouchableOpacity
              style={SpaceStyles.rowFlex}
              onPress={() => NavigationService.navigate("HomeScreen")}
            >
              <Image source={homeIcon} />
              <CustomText
                text={"Home"}
                style={[
                  TextStyles.textQuicksandMedium18Black,
                  SpaceStyles.left10,
                ]}
              />
            </TouchableOpacity>


            <TouchableOpacity
              style={[SpaceStyles.rowFlex, SpaceStyles.top5]}
              onPress={() => {
                // NavigationService.navigate("AuthNavigator");
                handleLoggedOut();
              }}
            >
              <Image source={shutdownIcon} />
              <CustomText
                text={"Logout"}
                style={[
                  TextStyles.textQuicksandMedium18Black,
                  SpaceStyles.left10,
                ]}
              />
            </TouchableOpacity>
          </View>

        </View>
      </DrawerContentScrollView>
    </View>
  );
}

//---------- drawer style

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    color: "white",
  },
  caption: {
    fontSize: 14,
    color: "white",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 5,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    // borderTopColor: '#f4f4f4',
    // borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  linearGradient: {
    margin: 0,
    marginTop: -19,
    paddingVertical: 20,
  },
  _close_row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    paddingHorizontal: 20,
  },
});
