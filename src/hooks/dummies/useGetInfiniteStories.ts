export default function useGetInfiniteStories() {
  // 임의로 피드 데이터를 생성하여 반환합니다.
  // Fetch 할 때 Viewed = true 상태인 스토리가 뒤에 정렬됨
  return [
    {
      storyId: 1,
      storyImageUri: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FSCwzs%2FbtstbdcTogV%2Fdjk7dOUl3XaHOCAG8aCin0%2Fimg.jpg',
      userId: 1,
      userNickname: 'packdev937',
      isViewed: false,
    },
    {
      storyId: 2,
      storyImageUri: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcOVdsI%2FbtsteBxOIvw%2FPLGKMpigttYfLTfuKwMUV0%2Fimg.jpg',
      userId: 1,
      userNickname: 'packdev937',
      isViewed: false,
    },
    {
      storyId: 3,
      storyImageUri: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeP82F1%2FbtssYTmCEav%2Fgh9aLlZl19Il2gSV20dMYk%2Fimg.jpg',
      userId: 2,
      userNickname: 'yeddin',
      isViewed: false,
    },
    {
      storyId: 4,
      storyImageUri: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FczJaas%2FbtsteTZtbuk%2FeR2UthKU0enKhWLpq4GVYK%2Fimg.jpg',
      userId: 2,
      userNickname: 'yeddin',
      isViewed: false,
    },
    {
      storyId: 5,
      storyImageUri: 'https://i.pinimg.com/236x/40/62/1e/40621edbace8925c63ef4757e8f48f59.jpg',
      userId: 3,
      userNickname: 'seoyun',
      isViewed: false,
    },
    {
      storyId: 6,
      storyImageUri: 'https://yt3.ggpht.com/TsJWAOUF7m8mV4tPlJ_6s2CZ3N1WJeiXPfK7vtfPgF8CgHIs9z7279CbOzx8O1U6ZcmGJzzyEF3fAA=s1024-c-fcrop64=1,000011deffffbddd-nd-v1',
      userId: 3,
      userNickname: 'seoyun',
      isViewed: false,
    },
  ];
}
