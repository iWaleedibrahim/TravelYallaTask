

import React,  { useEffect } from "react";
import Navigation from "./navigation";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";
import COLORS from "./common/colors";
import store from './store'
import STORAGE_KEYS from './constants/storage_keys'
import { removeDataFromLocalStorage } from './utils/AsyncStorage'

export default function App() {

//   useEffect(() => {
//     removeDataFromLocalStorage(STORAGE_KEYS.CATEOGRIES)
// }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.MAINBLUE }}>
      <StatusBar color={COLORS.MAINBLUE} />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
}