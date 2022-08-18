//---------- imports

// react
import React, { useEffect, useState, useContext } from "react";
import { LogBox, SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/createStore";
import { PersistGate } from "redux-persist/integration/react";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import StackNaviagtion from "./src/navigation/StackNavigation";

// context
import { GlobalContextProvide } from './src/ContextHooks/ThemeContext'

// helper
import NavigationService from "./src/navigation/NavigationService";

//---------- context

//---------- main app / component

const App = () => {

  //---------- state

  //---------- life cycle

  useEffect(() => {

    // ignore logs
    LogBox.ignoreAllLogs();
  }, []);

  //---------- user's action

  //---------- return main view

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalContextProvide>
          <NavigationContainer
            ref={(navigatorRef) => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          >

            <StatusBar />

            <StackNaviagtion />

          </NavigationContainer>
        </GlobalContextProvide>
      </PersistGate>
    </Provider>
  );
};

//---------- export component

export default App;
