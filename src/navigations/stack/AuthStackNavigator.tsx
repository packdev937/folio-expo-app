import React from 'react'
import {StyleSheet, View} from 'react-native'
import {authNavigations} from "../../constants";
import SignupScreen from "../../screens/auth/SignupScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGNUP]: undefined;
}
const Stack = createStackNavigator<AuthStackParamList>()

function AuthStackNavigator() {
  return (
    <BottomSheetModalProvider>
      <Stack.Navigator>
        <Stack.Screen
          name={authNavigations.SIGNUP}
          component={SignupScreen} options={{
          headerTitle: '회원가입'
        }}
        />
      </Stack.Navigator>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({})

export default AuthStackNavigator
