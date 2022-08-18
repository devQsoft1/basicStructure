import { combineReducers } from "redux";

import reducer from "./User/Reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import localReducer from "./Local/local.reducer";

import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // whitelist: ['bookmarks'],
};

export default combineReducers({
  redux_state: reducer,
  localReducer: persistReducer(persistConfig, localReducer),
});
