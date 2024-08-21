import React from 'react'
import {StyleSheet, View} from 'react-native'
import {mainTabNavigations} from "@/constants";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FeedStackNavigator from "@/navigations/stack/FeedStackNavigator";
import QrScanScreen from "@/screens/qr/QrScanScreen";
import DiscoverStackNavigator from "@/navigations/stack/DiscoverStackNavigator";
import TabButton from "@/components/common/TabButton";


export type MainTabParamList = {
  [mainTabNavigations.HOME]: undefined;
  [mainTabNavigations.QR_SCAN]: undefined;
  [mainTabNavigations.DISCOVER]: undefined;
}

const Tab = createBottomTabNavigator<MainTabParamList>()

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          margin: 16,
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }
      }}>
      <Tab.Screen
        name={mainTabNavigations.HOME}
        component={FeedStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => <TabButton
            {...props}
            activeIcon = {'home'}
            inActiveIcon= {'home-outline'}
          />
        }}/>
      <Tab.Screen
        name={mainTabNavigations.QR_SCAN}
        component={QrScanScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => <TabButton
            {...props}
            activeIcon = {'camera'}
            inActiveIcon= {'camera-outline'}
          />
        }}
      />
      <Tab.Screen
        name={mainTabNavigations.DISCOVER}
        component={DiscoverStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => <TabButton
            {...props}
            activeIcon = {'grid'}
            inActiveIcon= {'grid-outline'}
          />
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})

export default MainTabNavigator
