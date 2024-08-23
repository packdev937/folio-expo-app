import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {StoryResponse} from "@/api";
import {colors} from "@/constants";

interface StoryItemProps {
  story: StoryResponse;
}

function StoryItem({story}: StoryItemProps) {
  const [isViewed, setIsViewed] = useState(story.isViewed); // 초기 상태를 서버에서 가져온 정보로 설정
  const handlePress = () => {
    setIsViewed(true); // 스토리를 본 상태로 변경
    // try {
    //   await markStoryAsViewed(story.storyId); // 서버에 스토리 조회를 기록
    //   setIsViewed(true); // 서버에 기록한 후 로컬 상태를 업데이트
    // } catch (error) {
    //   console.error("Failed to mark story as viewed:", error);
    // }
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={isViewed ? styles.viewedBorder : styles.unviewedBorder}>
        <Image
          style={styles.image}
          source={{
            uri: story.storyImageUri,
          }}
        />
      </View>
      <View style={styles.userDetailContainer}>
        <Text style={styles.userNicknameText}>@{story.userNickname}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 140,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 90,
    height: 120,
    borderRadius: 10,
  },
  userDetailContainer: {},
  userNicknameText: {
    fontSize: 12,
  },
  unviewedBorder: {
    borderColor: colors.PINK_400, // 안 본 스토리의 보더 색상
    borderWidth: 3,
    borderRadius: 10,
    padding: 2,
  },
  viewedBorder: {
    borderColor: colors.GRAY_300, // 본 스토리의 보더 색상
    borderWidth: 2,
    borderRadius: 10,
    padding: 2,
  },
});

export default StoryItem;
