import {useQuery} from '@tanstack/react-query';
import {queryKeys} from '@/constants'; // 쿼리 키 상수
import {getFeedDetail, RetrieveFeedDetailResponse} from "@/api/feed";
import {UseQueryCustomOptions} from "@/utils"; // 타입 정의

function useGetFeed(
  id: number | null,
  queryOptions?: UseQueryCustomOptions<RetrieveFeedDetailResponse>,
) {
  return useQuery<RetrieveFeedDetailResponse>({
    queryFn: () => getFeedDetail(Number(id)), // 서버로부터 데이터를 가져오는 함수
    queryKey: [queryKeys.FEED, queryKeys.GET_FEED_DETAIL, id], // 쿼리 키를 고유하게 설정하여 데이터 캐싱 및 무효화를 관리
    enabled: Boolean(id), // id가 존재할 때만 쿼리 실행
    throwOnError: true, // 오류 발생 시 예외를 throw 하도록 설정
    ...queryOptions, // 사용자 정의 쿼리 옵션
  });
}

export default useGetFeed;
