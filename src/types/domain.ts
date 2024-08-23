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
