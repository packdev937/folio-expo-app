import React, {useState} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import useGetInfiniteStories from "@/hooks/queries/useGetInfiniteStories";
import StoryItem from "@/components/discover/StoryItem";

function StoryList() {
  const stories = useGetInfiniteStories()

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handleNextStory = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex < stories.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (<FlatList
      data={stories.flat()}
      renderItem={({item}) =>
        <StoryItem story={item}
                   onNextStory={handleNextStory}
        />
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
