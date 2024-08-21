import React from 'react'
import {Dimensions, Image, Pressable, StyleSheet, View} from 'react-native'
import {FeedResponse} from "@/api";
import {feedNavigations} from "@/constants";
import {StackNavigationProp} from "@react-navigation/stack";
import {FeedStackParamList} from "@/navigations/stack/FeedStackNavigator";
import {useNavigation} from "@react-navigation/native";

interface FeedItemProps {
  feed: FeedResponse
}

type Navigation = StackNavigationProp<FeedStackParamList>;

function FeedItem({feed}: FeedItemProps) {
  const navigation = useNavigation<Navigation>()

  const handlePressedFeed = () => {
    navigation.navigate(feedNavigations.FEED_DETAIL, {id: feed.id})
  }
  return (
    <Pressable style={styles.container} onPress={handlePressedFeed}>
      <View>
        {feed.imageUri.length > 0 && (
          <View key={feed.id} style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: feed.imageUri
              }}
            />
          </View>
        )}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 12,
    alignItems: 'center',
  },
  imageContainer: {
    width: Dimensions.get('screen').width / 2 - 15,
    height: Dimensions.get('screen').width / 2 - 15,
  },
  image: {
    width: '100%',
    height: '100%',
  }
})

export default FeedItem
