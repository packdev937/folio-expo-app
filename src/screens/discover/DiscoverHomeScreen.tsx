import React from 'react'
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import {colors} from "@/constants";
import TrendList from "@/components/discover/TrendList";

interface DiscoverHomeScreenProps {
}

function DiscoverHomeScreen({}: DiscoverHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.storyContainer}>
      </View>
      <View style={styles.trendContainer}>
        <View style={styles.trendHeaderContainer}>
          <Text style={styles.trendTitleText}>트렌드 모아보기</Text>
          <Text style={styles.trendDescriptionText}>현재 인기 있는 인생 네컷 사진을 모아보세요.</Text>
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
  },
  storyContainer: {
    flex: 1 / 3,
    backgroundColor: 'blue',
  },
  trendContainer: {
    flex: 1,
  },
  trendHeaderContainer: {
    backgroundColor: colors.WHITE,
    padding: 10,
  },
  trendTitleText: {
    color: colors.BLACK,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 5,
  },
  trendDescriptionText: {
    color: colors.GRAY_500,
    fontSize: 14,
    margin: 5,
  },
})

export default DiscoverHomeScreen
