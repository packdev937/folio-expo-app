import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import AuthStackNavigator from "@/navigations/stack/AuthStackNavigator";
import MainTabNavigator from "@/navigations/tab/MainTabNavigator";

function RootNavigator() {
  const isAuthenticated = true;
  return <>{isAuthenticated ? <MainTabNavigator/> : <AuthStackNavigator/>}</>

}

const styles = StyleSheet.create({})

export default RootNavigator
