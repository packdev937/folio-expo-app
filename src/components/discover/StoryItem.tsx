import React, {useState, useEffect} from 'react';
import {Image, Pressable, StyleSheet, Text, View, Modal, Dimensions} from 'react-native';
import {StoryResponse} from "@/api";
import {colors} from "@/constants";
import {LinearGradient} from "expo-linear-gradient";

interface StoryItemProps {
  story: StoryResponse;
  onNextStory: () => void; // 다음 스토리로 넘어가는 함수
}

function StoryItem({story, onNextStory}: StoryItemProps) {
  const [isViewed, setIsViewed] = useState(story.isViewed); // 초기 상태를 서버에서 가져온 정보로 설정
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePress = () => {
    setIsViewed(true); // 스토리를 본 상태로 변경
    setIsModalVisible(true); // 모달을 띄움
    // try {
    //   await markStoryAsViewed(story.storyId); // 서버에 스토리 조회를 기록
    //   setIsViewed(true); // 서버에 기록한 후 로컬 상태를 업데이트
    // } catch (error) {
    //   console.error("Failed to mark story as viewed:", error);
    // }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); // 모달 닫기
    onNextStory(); // 다음 스토리로 넘어가기
  };

  useEffect(() => {
    let timer;
    if (isModalVisible) {
      timer = setTimeout(() => {
        handleCloseModal(); // 3초 후에 모달 닫기 및 다음 스토리로 넘어가기
      }, 3000);
    }

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, [isModalVisible]);

  return (
    <>
      <Pressable style={styles.container} onPress={handlePress}>

        <LinearGradient
          colors={
            isViewed
              ? [colors.GRAY_300, colors.GRAY_300] // Gray for viewed story
              : [colors.PINK, colors.ORANGE] // Pink gradient for unviewed story
          }
          style={styles.gradientBorder}
        >
          <View>
            <Image
              style={styles.image}
              source={{
                uri: story.storyImageUri,
              }}
            />
          </View>
        </LinearGradient>
        <View style={styles.userDetailContainer}>
          <Text style={styles.userNicknameText}>@{story.userNickname}</Text>
        </View>
      </Pressable>

      {/* 모달 구현 */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal} // Android 백버튼 등을 통해 모달이 닫힐 때 실행
      >
        <Pressable style={styles.modalContainer} onPress={handleCloseModal}>
          <Image
            style={styles.modalImage}
            source={{
              uri: story.storyImageUri,
            }}
          />
        </Pressable>
      </Modal>
    </>
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
  gradientBorder: {
    borderRadius: 12,
    padding: 3, // Controls the border width
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // 모달 배경색
  },
  modalImage: {
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').height * 0.8,
    resizeMode: 'contain',
  },
});

export default StoryItem;

// unviewedBorder: {
//   borderColor: colors.PINK_1000, // 안 본 스토리의 보더 색상
//   borderWidth: 3,
//   borderRadius: 10,
//   padding: 2,
// },
// viewedBorder: {
//   borderColor: colors.GRAY_300, // 본 스토리의 보더 색상
//   borderWidth: 2,
//   borderRadius: 10,
//   padding: 2,
// },
