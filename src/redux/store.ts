import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import toggleNavbarReducer from "@/redux/reducers/toggle-navbar";
import userReducer from "@/redux/reducers/users";
import overlayReducer from "@/redux/reducers/overlay";
import currentUserReducer from "@/redux/reducers/currentUser";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const reducers = combineReducers({
  toggleNavbar: toggleNavbarReducer,
  user: userReducer,
  currentUser: currentUserReducer,
  overlay: overlayReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user", "overlay", "currentUser"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
