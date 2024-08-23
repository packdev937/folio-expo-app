import React from 'react'
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import {colors, discoverNavigations} from "@/constants";
import FeedList from "@/components/feed/FeedList";
import Icon from "@/components/common/Icon";
import CustomButton from "@/components/common/CustomButton";
import {StackScreenProps} from "@react-navigation/stack";
import {DiscoverStackParamList} from "@/navigations/stack/DiscoverStackNavigator";

type UserHomeScreenProps = StackScreenProps<
  DiscoverStackParamList,
  typeof discoverNavigations.USER_HOME
>;

const ICON_SIZE = 28;

function UserHomeScreen({route}: UserHomeScreenProps) {
  const {userId} = route.params
  const [isFollowed, setIsFollowed] = React.useState(false)

  const handleFollow = () => {
    setIsFollowed(!isFollowed)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.nicknameText}>packdev937</Text>
          <Text style={styles.messageText}>힘들어따</Text>
          <View style={styles.followContainer}>
            {isFollowed ?
              <CustomButton
                label={'팔로우'}
                size={'small'}
                style={{backgroundColor: colors.BLUE_700}}
                fontStyle={{color: colors.WHITE}}
                onPress={handleFollow}
              />
              :
              <CustomButton
                label={'팔로잉'}
                size={'small'}
                style={{backgroundColor: colors.GRAY_200}}
                fontStyle={{color: colors.BLACK}}
                onPress={handleFollow}
              />
            }
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image}
                 source={{
                   uri: 'https://mblogthumb-phinf.pstatic.net/MjAyMjAzMDFfNDYg/MDAxNjQ2MTQxMTIwMzI5.XkigsLvkJYO2iOnUOhgUAzWUGaFXPHuXt1hGFyHUnjUg.voVbKU-6IorxlvRk3TuOjRtERCYt7zJeUx88fz0ivgEg.PNG.evui2000/SE-1f0d7981-6393-460e-955d-edb5abee306a.png?type=w800'
                 }}
          />
        </View>
      </View>
      <View style={styles.feedContainer}>
        <FeedList userId={userId}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
  profileContainer: {
    marginTop: 20,
    flex: 1 / 4,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1 / 2,
    marginHorizontal: 20,
  },
  nicknameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 18,
    margin: 15,
  },
  followContainer: {
    width: 100,
    marginTop: 20,
  },
  imageContainer: {
    flex: 1 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 40,
  },
  feedContainer: {
    flex: 1,
  }
})

export default UserHomeScreen
