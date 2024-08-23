import React from 'react'
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import {colors} from "@/constants";
import TrendList from "@/components/discover/TrendList";
import StoryList from "@/components/discover/StoryList";

interface DiscoverHomeScreenProps {
}

function DiscoverHomeScreen({}: DiscoverHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.storyContainer}>
        <Text style={styles.storyCaptionText}> 스토리 </Text>
        <StoryList/>
      </View>
      <View style={styles.trendContainer}>
        <View style={styles.trendHeaderContainer}>
          <Text style={styles.trendCaptionText}>트렌드 모아보기</Text>
          <Text style={styles.trendDetailText}>현재 인기 있는 인생 네컷 사진을 모아보세요.</Text>
        </View>
        <View>
          <TrendList/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    margin: 5,
  },
  storyContainer: {
    flex: 1 / 3,
    gap: 5,
    marginVertical: 10,
    marginLeft: 10,
  },
  storyCaptionText: {
    color: colors.BLACK,
    fontSize: 18,
    fontWeight: '600',
  },
  trendContainer: {
    flex: 1,
  },
  trendHeaderContainer: {
    marginLeft: 10,
  },
  trendCaptionText: {
    color: colors.BLACK,
    fontSize: 18,
    fontWeight: '600',
  },
  trendDetailText: {
    color: colors.GRAY_500,
    fontSize: 14,
    marginVertical: 5,
  },
})

export default DiscoverHomeScreen
