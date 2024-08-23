import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import useGetInfiniteFeeds from "@/hooks/queries/useGetInfiniteFeeds";
import FeedItem from "@/components/feed/FeedItem";

interface FeedListProps {
  userId?: number,
}

function FeedList({userId}: FeedListProps) {
  let feeds = null
  let editable = false

  if (userId) {
    feeds = useGetInfiniteFeeds(userId)
  } else {
    feeds = useGetInfiniteFeeds()
    editable = true
  }

  return <FlatList
    data={feeds.flat()}
    renderItem={({item}) => <FeedItem feed={item} editable={editable}/>}
    keyExtractor={item => String(item.id)}
    numColumns={2} // 열 하나에 두 개의 데이터를 표시
  />
}

const styles = StyleSheet.create({})

export default FeedList
