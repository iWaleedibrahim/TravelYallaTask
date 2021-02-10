

import React from "react";
import Navigation from "./navigation";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";
import COLORS from "./common/colors";
import store from './store'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.MAINBLUE }}>
      <StatusBar color={COLORS.MAINBLUE} />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
}

