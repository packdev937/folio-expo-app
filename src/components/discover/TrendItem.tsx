import React from 'react'
import {Dimensions, Image, Pressable, StyleSheet, Text, View} from 'react-native'
import {TrendResponse} from "@/api";
import {colors, discoverNavigations} from "@/constants";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {FeedStackParamList} from "@/navigations/stack/FeedStackNavigator";
import {DiscoverStackParamList} from "@/navigations/stack/DiscoverStackNavigator";

interface TrendItemProps {
  trend: TrendResponse
}

const deviceHeight = Dimensions.get('screen').height

type Navigation = StackNavigationProp<DiscoverStackParamList>;

function TrendItem({trend}: TrendItemProps) {
  const navigation = useNavigation<Navigation>()

  const handlePressTrend = () => {
    navigation.navigate(discoverNavigations.USER_HOME, {userId: trend.userId})
  }

  return (
    <>
      <Pressable style={styles.userDetailContainer} onPress={handlePressTrend}>
        <Image
          style={styles.profileImage}
          source={{
            uri: trend.userProfileImageUri
          }}
        />
        <Text style={styles.nicknameText}>{trend.userNickname}</Text>
      </Pressable>
      <View style={styles.container} >
        {trend.trendImageUri.length > 0 && (
          <View key={trend.trendId} style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: trend.trendImageUri
              }}
            />
          </View>
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  userDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    gap: 10,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 10,
  },
  nicknameText: {
    color: colors.BLACK,
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: deviceHeight / 2,
    width: deviceHeight / 2 - 150,
  },
  image: {
    width: '100%',
    height: '100%',
  }
})

export default TrendItem
