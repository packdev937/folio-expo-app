import React from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import {colors, feedNavigations} from "@/constants";
import FeedHomeScreen from "@/screens/feed/FeedHomeScreen";
import FeedDetailScreen from "@/screens/feed/FeedDetailScreen";
import Icon from "@/components/common/Icon";

export type FeedStackParamList = {
  [feedNavigations.FEED_HOME]: undefined;
  [feedNavigations.FEED_DETAIL]: {id: number};
  [feedNavigations.CREATE_POST]: undefined;
  [feedNavigations.EDIT_POST]: undefined;
}

const Stack = createStackNavigator<FeedStackParamList>()

function FeedStackNavigator() {
  return (
      <Stack.Navigator
        screenOptions={{
          // 헤더를 숨긴다
          // headerShown: false

        }}>
        <Stack.Screen
          name={feedNavigations.FEED_HOME}
          component={FeedHomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={feedNavigations.FEED_DETAIL}
          component={FeedDetailScreen}
          options={{
            headerTitle: ' ',
            // 뒤로가기 버튼 옆 타이틀을 숨긴다
            headerBackTitleVisible: false,
            headerShown: false
          }}
        />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  }
})

export default FeedStackNavigator
