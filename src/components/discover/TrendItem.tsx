import React from 'react'
import {Dimensions, Image, Pressable, StyleSheet, Text, View} from 'react-native'
import {TrendResponse} from "@/api";
import {colors} from "@/constants";

interface TrendItemProps {
  trend: TrendResponse
}

const deviceHeight = Dimensions.get('screen').width

function TrendItem({trend}: TrendItemProps) {
  return (
    <>
      <View style={styles.userDetailContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: trend.userProfileImageUri
          }}
        />
        <Text style={styles.nicknameText}>{trend.userNickname}</Text>
      </View>
      <Pressable style={styles.container}>
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
      </Pressable>
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
    width: deviceHeight / 2 + 75,
    height: deviceHeight / 2 + 75,
  },
  image: {
    width: '100%',
    height: '100%',
  }
})

export default TrendItem
