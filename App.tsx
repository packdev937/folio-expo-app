import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./src/navigations/root/RootNavigator";
import "react-native-gesture-handler";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useCameraPermissions} from "expo-camera";
import {usePermissions} from "expo-media-library";
import {Alert, View, ActivityIndicator, StyleSheet} from "react-native";

function App() {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [mediaLibraryPermission, requestMediaLibraryPermission] = usePermissions();
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  useEffect(() => {
    handlePermissions().then(r =>
      console.log("Permissions granted: ", r
      ));
  }, []);

  async function handlePermissions() {
    const allPermissionsGranted = await requestAllPermissions();
    if (!allPermissionsGranted) {
      Alert.alert("앱을 계속 사용하기 위해서는 권한을 반드시 허용해야 합니다.");
    } else {
      setPermissionsGranted(true);  // 모든 권한이 허용되었음을 상태에 저장
    }
  }

  async function requestAllPermissions() {
    const cameraStatus = await requestCameraPermission();
    if (!cameraStatus.granted) {
      Alert.alert("에러", "You need to grant camera permissions to use this app");
      return false;
    }

    const mediaLibraryStatus = await requestMediaLibraryPermission();
    if (!mediaLibraryStatus.granted) {
      Alert.alert("에러", "You need to grant media library permissions to use this app");
      return false;
    }

    return true;
  }

  if (!permissionsGranted) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App;
