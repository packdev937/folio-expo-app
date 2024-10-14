import React, {useEffect, useRef} from 'react';
import {ActivityIndicator, Animated, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import {AppleAuthenticationScope} from 'expo-apple-authentication';
import Icon from "@/components/common/Icon";
import {authNavigations} from "@/constants";
import {useFonts} from "expo-font";


function AuthHomeScreen({navigation}) {
  // todo : 폰트 로딩 상태를 커스텀 훅으로 리팩토링
  const [isFontLoaded] = useFonts({
    Pretendard: require('@/../assets/fonts/Pretendard-Medium.otf'),
  })

  if(!isFontLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const fadeAnim = useRef(new Animated.Value(0)).current; // 초기 opacity 값

  useEffect(() => {
    const loopAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1, // opacity를 1로
          duration: 1000, // 1초 동안 애니메이션
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.5, // opacity를 0.5로 낮춤
          duration: 5000, // 1초 동안 애니메이션
          useNativeDriver: true,
        }),
      ])
    );

    loopAnimation.start();

    return () => loopAnimation.stop(); // 컴포넌트 언마운트 시 애니메이션 정지
  }, [fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.Text style={[styles.title, {opacity: fadeAnim}]}>
          Folio
        </Animated.Text>
        <Text style={styles.subtitle}>모두의 인생 네컷 서비스</Text>
        <Text style={styles.description}>폴리오와 함께 일상을 공유해보세요.</Text>
      </View>
      <View style = {styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={async () => {
            try {
              const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                  AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                  AppleAuthenticationScope.EMAIL,
                ],
              });
              // crendential을 서버로 전송하여 로그인 여부 확인

              const isRegistered = true;
              if(isRegistered) {
                navigation.navigate(authNavigations.SIGNUP);
              }
            } catch (exception) {
              if (exception.code === 'ERR_REQUEST_CANCELED') {
                console.log('Apple 로그인이 취소되었습니다.');
              } else {

              }
            }
          }}
        >
          <Icon name={'logo-apple'} size={18} color={'#FFFFFF'}/>
          <Text style={styles.buttonText}>Apple로 시작하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333333',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666666',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {

  },
  button: {
    backgroundColor: '#000000',
    width: 350,
    height: 55,
    gap: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Pretendard'
  },
});

export default AuthHomeScreen;
