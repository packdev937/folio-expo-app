type AccessRange = Record<'PUBLIC' | 'FRIENDS' | 'PRIVATE', string>;


interface Feed {
  id: number,
  imageUri: string,
}

interface Trend {
  trendId: number,
  trendImageUri: string,
  userId: number,
  userNickname: string,
  userProfileImageUri: string,
}

interface Story {
  storyId: number,
  storyImageUri: string,
  userId: number,
  userNickname: string,
  isViewed: boolean,
}

interface Profile {
  id: number;
  nickname: string | null;
  profileImageUri: string | null;
  loginType: 'kakao' | 'apple';
}
