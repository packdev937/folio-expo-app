import React, {useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import AuthStackNavigator from "@/navigations/stack/AuthStackNavigator";
import MainTabNavigator from "@/navigations/tab/MainTabNavigator";
import useAuth from "@/hooks/useAuth";
import * as SplashScreen from 'expo-splash-screen';

function RootNavigator() {
  const {isAuthenticated, isLoading} = useAuth();

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        SplashScreen.hideAsync().then(r =>
          console.log("SplashScreen.hideAsync() result: ", r)
        ).catch(e =>
          console.log("SplashScreen.hideAsync() error: ", e)
        );
      }, 500);
    }
  }, [isLoading]);

  return <>{isAuthenticated ? <MainTabNavigator/> : <AuthStackNavigator/>}</>
}

const styles = StyleSheet.create({})

export default RootNavigator
