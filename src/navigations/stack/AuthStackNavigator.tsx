import React from 'react'
import {StyleSheet, View} from 'react-native'
import {authNavigations} from "@/constants";
import SignupScreen from "@/screens/auth/SignupScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import TermOfServiceScreen from "@/screens/auth/TermOfServiceScreen";
import AuthHomeScreen from "@/screens/auth/AuthHomeScreen";

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGNUP]: undefined;
  [authNavigations.TERM]: undefined;
}
const Stack = createStackNavigator<AuthStackParamList>()

function AuthStackNavigator() {
  return (
    <BottomSheetModalProvider>
      <Stack.Navigator>
        <Stack.Screen
          name={authNavigations.AUTH_HOME}
          component={AuthHomeScreen}
          options={{
            headerShown: false,
            headerTitle: ''
          }}
        />
        <Stack.Screen
          name={authNavigations.SIGNUP}
          component={SignupScreen} options={{
          headerTitle: '회원가입',
          headerBackTitleVisible: false
        }}
        />
        <Stack.Screen
          name={authNavigations.TERM}
          component={TermOfServiceScreen}
          options={{
            headerTitle: '서비스 이용약관'
          }}/>
      </Stack.Navigator>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({})

export default AuthStackNavigator
