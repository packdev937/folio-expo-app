import React from 'react'
import {StyleSheet, View} from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import {discoverNavigations} from "@/constants";
import DiscoverHomeScreen from "@/screens/discover/DiscoverHomeScreen";

export type DiscoverStackParamList = {
  [discoverNavigations.DISCOVER_HOME]: undefined
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
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})

export default DiscoverStackNavigator
