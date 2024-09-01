type AccessRange = Record<'PUBLIC' | 'FRIENDS' | 'PRIVATE', string>;


interface Feed {
  feedId: number;
  photoImageUrl: string;
  accessRange: string;
  taggedUsers: string[];
  createdAt: string; // ISO 문자열 형태로 받을 경우
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
