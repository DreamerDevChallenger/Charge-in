"use client";

import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

import App from "@/app";

const persistor = persistStore(store);

export function ReduxProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App>{children}</App>
      </PersistGate>
    </Provider>
  );
}
