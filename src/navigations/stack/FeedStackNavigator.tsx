import React from 'react'
import { StyleSheet, View } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import {feedNavigations} from "@/constants";

export type FeedStackParamList = {
  [feedNavigations.FEED_HOME]: undefined;
  [feedNavigations.FEED_DETAIL]: undefined;
  [feedNavigations.CREATE_POST]: undefined;
  [feedNavigations.EDIT_POST]: undefined;
}

const Stack = createStackNavigator<FeedStackParamList>()

function FeedStackNavigator() {
  return (<View></View>)
}

const styles = StyleSheet.create({})

export default FeedStackNavigator
