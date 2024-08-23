import React from 'react'
import {StyleSheet, View} from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import {discoverNavigations} from "@/constants";
import DiscoverHomeScreen from "@/screens/discover/DiscoverHomeScreen";
import UserHomeScreen from "@/screens/discover/UserHomeScreen";

export type DiscoverStackParamList = {
  [discoverNavigations.DISCOVER_HOME]: undefined,
  [discoverNavigations.USER_HOME]: { userId: number },
}

const Stack = createStackNavigator<DiscoverStackParamList>()

function DiscoverStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={discoverNavigations.DISCOVER_HOME} component={DiscoverHomeScreen}/>
      <Stack.Screen name={discoverNavigations.USER_HOME} component={UserHomeScreen}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})

export default DiscoverStackNavigator
