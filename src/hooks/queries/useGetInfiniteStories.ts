export default function useGetInfiniteStories() {
  // 임의로 피드 데이터를 생성하여 반환합니다.
  // Fetch 할 때 Viewed = true 상태인 스토리가 뒤에 정렬됨
  return [
    {
      storyId: 1,
      storyImageUri: 'https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/86c91d7b-3501-4c8e-b6c7-5e301721ae1e.jpg',
      userId: 1,
      userNickname: 'packdev937',
      isViewed: false,
    },
    {
      storyId: 2,
      storyImageUri: 'https://image.fmkorea.com/files/attach/new3/20230916/486616/638012495/6186131518/8c56b45f9fc499b962e5e6bd277d2cdb.jpeg',
      userId: 1,
      userNickname: 'packdev937',
      isViewed: false,
    },
    {
      storyId: 3,
      storyImageUri: 'https://cdn.theden.co.kr/news/photo/202306/1540_6000_2111.png',
      userId: 2,
      userNickname: 'yeddin',
      isViewed: false,
    },
    {
      storyId: 4,
      storyImageUri: 'https://images.khan.co.kr/article/2022/07/01/l_2022070102000040600005322.jpg',
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
