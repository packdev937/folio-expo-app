import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import useGetInfiniteStories from "@/hooks/queries/useGetInfiniteStories";
import StoryItem from "@/components/discover/StoryItem";

function StoryList() {
  const stories = useGetInfiniteStories()
  return (<FlatList
    data={stories.flat()}
    renderItem={({item}) =>
      <StoryItem story={item}/>
    }
    keyExtractor={item => String(item.storyId)}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({}
)

export default StoryList
