import React from 'react'
import {Dimensions, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import {StackScreenProps} from "@react-navigation/stack";
import {FeedStackParamList} from "@/navigations/stack/FeedStackNavigator";
import {colors, feedNavigations} from "@/constants";
import useGetFeed from "@/hooks/queries/useGetFeed";
import Icon from "@/components/common/Icon";
import DropDown from "@/components/common/DropDown";

// route가 FeedStackParamList에서 정의한 FEED_DETAIL에 해당하는 파라미터 타입을 가집니다 (id: number)
type FeedDetailScreenProps = StackScreenProps<
  FeedStackParamList,
  typeof feedNavigations.FEED_DETAIL
>;

const accessOptions: AccessRange = {
  PUBLIC: '전체 공개',
  FRIENDS: '친구 공개',
  PRIVATE: '나만 보기',
};

function FeedDetailScreen({route}: FeedDetailScreenProps) {
  const {id, imageUri} = route.params
  const feed = useGetFeed(id)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon name={'share-outline'} size={30}/>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image}
               source={{
                 uri: imageUri
               }}
               resizeMode="cover" // 원본 비율을 유지
        />
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.informationHeaderContainer}>
          <Text style={styles.dateText}>{feed.createdAt}</Text>
          {/*내 피드가 아니면 DronDown은 뜨지 않음*/}
          <View style={styles.dropdownContainer}>
            <DropDown
              initialValue={feed.accessRange}
              options={accessOptions}
            />
          </View>
        </View>
        {/*디자인을 수정할 필요가 있을 듯*/}
        <View style={styles.taggedUserContainer}>
          {feed.taggedUsers.map((user, index) => (
            <View key={user.nickname} style={styles.taggedUserBox}>
              <Image style={styles.taggerUserImage}
                     source={{uri: user.profileUri}}/>
              <Text style={styles.taggedUserText}>@{user.nickname}</Text>
            </View>
          ))}
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  headerContainer: {
    height: 30,
    margin: 20,
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  imageContainer: {
    height: Dimensions.get('screen').height / 2 + 35,
    width: Dimensions.get('screen').width - 35,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  informationContainer: {},
  informationHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  dateText: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'medium'
  },
  taggedUserContainer: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  taggedUserBox: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  taggerUserImage: {
    width: 50,
    height: 50,
    borderRadius: 40
  },
  taggedUserText: {
    fontSize: 14,
  },
  dropdownContainer: {
    position: 'absolute', // 드롭다운을 별도의 레이어로 표시
    top: 0,
    right: 0,
    width: 110,
  },
})

export default FeedDetailScreen
