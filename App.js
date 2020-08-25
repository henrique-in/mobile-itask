// import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";


import Routes from "./src/routes/routes";


export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#000"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Routes/>
    </>
  );
}
