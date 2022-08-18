//---------- imports

// react
import React, { useEffect, useState, createContext } from "react";
import { LogBox, SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/createStore";
import { PersistGate } from "redux-persist/integration/react";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import StackNaviagtion from "./src/navigation/StackNavigation";

// helper
import NavigationService from "./src/navigation/NavigationService";

//---------- context

const AppContext = createContext();

//---------- main app / component

const App = () => {

  //---------- main app / component
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [appStateObject, setAppStateObject] = useState({})
  const [appStateArray, setAppStateArray] = useState([])


  //---------- life cycle

  useEffect(() => {

    // ignore logs
    LogBox.ignoreAllLogs();
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        >
          <StatusBar />

          <AppContext.Provider
            appState={{
              isDarkTheme,
              appStateObject,
              appStateArray,

              changeTheme,
              storeDataInAppState,
              removeDataInAppState,
            }}
          >
            <StackNaviagtion />
          </AppContext.Provider>

        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

//---------- export component

export default App;
