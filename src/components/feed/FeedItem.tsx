import React from 'react'
import {Dimensions, Image, Pressable, StyleSheet, View} from 'react-native'
import {colors, feedNavigations} from "@/constants";
import {StackNavigationProp} from "@react-navigation/stack";
import {FeedStackParamList} from "@/navigations/stack/FeedStackNavigator";
import {useNavigation} from "@react-navigation/native";
import Icon from "@/components/common/Icon";
import {FeedResponse} from "@/api/post";

interface FeedItemProps {
  feed: {
    id: number;
    imageUrl: string;
  };
  editable?: boolean;
}

type Navigation = StackNavigationProp<FeedStackParamList>;

function FeedItem({feed, editable}: FeedItemProps) {
  const navigation = useNavigation<Navigation>()

  const handlePressedFeed = () => {
    navigation.navigate(feedNavigations.FEED_DETAIL, {id: feed.id, imageUri: feed.imageUrl})
  }

  console.log(feed)

  return (
    <Pressable style={styles.container} onPress={handlePressedFeed}>
      <View>
        {feed.imageUrl.length > 0 && (
          <View key={feed.id} style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: feed.imageUrl
              }}
            />
            {editable && (
              // 겉의 Pressable과 별도로 동작해야 함
              <Pressable style={styles.optionContainer}>
                <Icon library={'Ionicons'} name={'ellipsis-vertical'} size={28} color={colors.WHITE}/>
              </Pressable>
            )}
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
    marginVertical: 10,
    alignItems: 'center',
  },
  imageContainer: {
    width: Dimensions.get('screen').width / 2 - 15,
    height: Dimensions.get('screen').width / 2 + 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  optionContainer: {
    position: 'absolute',
    right: 5,
    top: 10,
  }
})

export default FeedItem
