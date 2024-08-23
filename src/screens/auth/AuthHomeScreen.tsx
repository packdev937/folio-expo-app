import React, {useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Pressable, Animated} from 'react-native';
import {authNavigations} from "@/constants";
import Icon from "@/components/common/Icon";


function AuthHomeScreen({navigation}) {
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
        {/* Folio 텍스트에 애니메이션과 스타일 적용 */}
        <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
          Folio
        </Animated.Text>
        <Text style={styles.subtitle}>모두의 인생 네컷 서비스</Text>
        <Text style={styles.description}>폴리오와 함께 일상을 공유해보세요.</Text>
        <Pressable style={styles.appleButton} onPress={() => navigation.navigate(authNavigations.SIGNUP)}>
          <Icon name={'logo-apple'} size={24} color={'#FFFFFF'} />
          <Text style={styles.appleButtonText}>Apple로 로그인</Text>
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
  appleButton: {
    backgroundColor: '#000000',
    width: 250,
    paddingVertical: 12,
    paddingHorizontal: 12,
    gap: 10,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appleButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AuthHomeScreen;
