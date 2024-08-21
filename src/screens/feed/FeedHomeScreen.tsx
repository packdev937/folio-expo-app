import React from 'react'
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import {colors} from "@/constants";
import Icons from "@/components/common/Icon";
import FeedList from "@/components/feed/FeedList";

interface FeedHomeScreenProps {
}

function FeedHomeScreen({}: FeedHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={{
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: 20,
          }}> Folio </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Icons name={'code-slash-sharp'} size={30}/>
          <Icons name={'link'} size={30}/>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.nicknameText}>Siyeon</Text>
          <Text style={styles.messageText}>어쩔티비</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image}
                 source={{
                   uri: 'https://pbs.twimg.com/media/FTz-XHPVEAAirtf.jpg:large'
                 }}
          />
        </View>
      </View>
      <View style={styles.feedContainer}>
        <FeedList/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
  headerContainer: {
    height: 30,
    margin: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  profileContainer: {
    flex: 1 / 4,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1 / 2,
    marginHorizontal: 20,
  },
  nicknameText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 18,
    margin: 15,
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

export default FeedHomeScreen
