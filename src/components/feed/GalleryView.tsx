import React, {useRef} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import useGetInfiniteFeeds from "@/hooks/dummies/useGetInfiniteFeeds";
import FeedItem from "@/components/feed/FeedItem";

const {height} = Dimensions.get('window');
const SLIDE_HEIGHT = height - 60; // 한 슬라이드 높이를 전체 화면으로 설정

interface GalleryViewProps {
  userId?: number;
}

function GalleryView({userId}: GalleryViewProps) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const feeds = useGetInfiniteFeeds(userId); // 한 번에 모든 피드를 로드
  const editable = !userId;

  console.log("SLIDE_HEIGHT : "+SLIDE_HEIGHT);

  return (
    <Animated.FlatList
      data={feeds}
      renderItem={({item}) => <FeedItem feed={item} editable={editable}/>}
      keyExtractor={(item) => String(item.id)}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      snapToInterval={SLIDE_HEIGHT} // 슬라이더 시 올라가는 높이를 조정
      decelerationRate="fast" // 부드러운 스냅 효과
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollY}}}],
        {useNativeDriver: false} // 스냅 효과를 위해 네이티브 드라이버 비활성화
      )}
      contentContainerStyle={styles.gridContainer}
    />
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    height: SLIDE_HEIGHT,
  },
});


export default GalleryView;
