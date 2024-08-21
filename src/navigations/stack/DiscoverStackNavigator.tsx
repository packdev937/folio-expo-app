import React from 'react'
import { StyleSheet, View } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";

export type DiscoverStackParamList = {

}

const Stack = createStackNavigator<DiscoverStackParamList>()

function DiscoverStackNavigator() {
  return (<View></View>)
}

const styles = StyleSheet.create({})

export default DiscoverStackNavigator
