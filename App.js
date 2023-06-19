import React from "react";
import { View, Text } from "react-native";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Navigation } from "./src/navigation";
import store from "./src/redux/store";
import { LoaderProvider } from "./src/hooks";

export const App = () => {
  let persistor = persistStore(store);

  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <LoaderProvider >
          <Navigation />
        </LoaderProvider>
      </PersistGate>
    </Provider>
  );
};