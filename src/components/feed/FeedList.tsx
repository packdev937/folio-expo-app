import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import useGetInfinitePosts from "@/hooks/queries/useGetInfinitePosts";
import FeedItem from "@/components/feed/FeedItem";

function FeedList() {
  const feeds = useGetInfinitePosts()

  return <FlatList
    data={feeds.flat()}
    renderItem={({item}) => <FeedItem feed={item}/>}
    keyExtractor={item => String(item.id)}
    numColumns={2} // 열 하나에 두 개의 데이터를 표시
  />
}

const styles = StyleSheet.create({})

export default FeedList
