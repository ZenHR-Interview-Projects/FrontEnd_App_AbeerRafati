import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons'
// import * as Splash from "./assets/splash.gif";


SplashScreen.preventAutoHideAsync();


export default function Splash() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(MaterialCommunityIcons.font);

        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {

      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (


    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Movies App 🎥</Text>
      <br />
      <Text>SplashScreen 😅</Text>
      <br />
      <MaterialCommunityIcons name="movie-open" size={100} color="blue" />

      {/* <Image source={Splash}  /> */}

    </View>

    



  );
}


