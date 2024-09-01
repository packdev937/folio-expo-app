import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/constants';
import {getFeeds, RetrieveFeedsResponse} from '@/api/feed';
import { UseQueryCustomOptions } from '@/utils';

// 전체 피드를 조회하는 커스텀 훅
function useGetFeeds(
  requestUserId: string,
  queryOptions?: UseQueryCustomOptions<RetrieveFeedsResponse>,
) {
  return useQuery<RetrieveFeedsResponse>({
    queryFn: () => getFeeds(requestUserId), // API 호출 함수
    queryKey: [queryKeys.GET_FEEDS, requestUserId], // 쿼리 키 설정
    enabled: Boolean(requestUserId), // 사용자 ID가 있을 때만 쿼리 실행
    throwOnError: true, // 오류 발생 시 예외를 throw 하도록 설정
    ...queryOptions, // 사용자 정의 쿼리 옵션
  });
}

export default useGetFeeds;
