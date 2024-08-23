import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import useGetInfiniteTrends from "@/hooks/queries/useGetInfiniteTrends";
import TrendItem from "@/components/discover/TrendItem";

interface TrendListProps {
}

function TrendList({}: TrendListProps) {
  const trends = useGetInfiniteTrends()

  return <FlatList
    data={trends.flat()}
    renderItem={({item}) =>
      <TrendItem trend={item}/>
  }
    keyExtractor={item => String(item.trendId)}
    numColumns={1} // 열 하나에 두 개의 데이터를 표시
  />
}

const styles = StyleSheet.create({
})

export default TrendList
