import React from 'react'
import {StyleSheet, View} from 'react-native'
import {colors, mainTabNavigations} from "@/constants";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigatorScreenParams} from "@react-navigation/native";
import FeedStackNavigator, {FeedStackParamList} from "@/navigations/stack/FeedStackNavigator";
import QrScanScreen from "@/screens/qr/QrScanScreen";
import DiscoverStackNavigator from "@/navigations/stack/DiscoverStackNavigator";
import TabButton from "@/components/common/TabButton";


export type MainTabParamList = {
  // MainTabNavigator에서 FeedStackNavigator로 올바른 파라미터 타입을 전달할 수 있습니다.
  [mainTabNavigations.HOME]: NavigatorScreenParams<FeedStackParamList>;
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
          shadowColor: colors.BLACK,
          shadowOpacity: 0.1,
          justifyContent: 'center',
          alignItems: 'center',
        }
      }}>
      {/*Home을 누르면 항상 Home의 첫번째 화면으로 되돌아가는 기능도 있어야될듯*/}
      <Tab.Screen
        name={mainTabNavigations.HOME}
        component={FeedStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => <TabButton
            {...props}
            activeIcon={'home'}
            inActiveIcon={'home-outline'}
            color = {colors.BLACK}
          />
        }}/>
      <Tab.Screen
        name={mainTabNavigations.QR_SCAN}
        component={QrScanScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) =>
            <View style={styles.outerCircle}>
              <View style={styles.innerCircle}>
                <TabButton
                  {...props}
                  activeIcon={'stop-circle-sharp'}
                  inActiveIcon={'stop-circle-outline'}
                  size = {45}
                  color = {colors.BLACK}
                />
              </View>
            </View>
        }}
      />
      <Tab.Screen
        name={mainTabNavigations.DISCOVER}
        component={DiscoverStackNavigator}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => <TabButton
            {...props}
            activeIcon={'grid'}
            inActiveIcon={'grid-outline'}
            color = {colors.BLACK}
          />
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  outerCircle: {
    top: -20,
    width: 70,
    height: 70,
    backgroundColor: colors.BLACK,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  innerCircle: {
    width: 60, // 내부 원의 크기
    height: 60, // 내부 원의 크기
    backgroundColor: colors.WHITE,
    borderRadius: 40, // 내부 원을 위한 borderRadius
  },
})

export default MainTabNavigator
