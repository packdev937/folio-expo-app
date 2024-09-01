import {useQuery} from '@tanstack/react-query';
import {queryKeys} from '@/constants'; // 쿼리 키 상수 가져오기
import {getTrends, TrendResponse} from '@/api/photo'; // API 호출 함수 가져오기
import {UseQueryCustomOptions} from '@/utils';

// 트렌드를 조회하는 커스텀 훅
function useGetTrends(
  requestUserId: string,
  queryOptions?: UseQueryCustomOptions<TrendResponse>,
) {
  return useQuery<TrendResponse>({
    queryFn: () => getTrends(requestUserId), // API 호출 함수
    queryKey: [queryKeys.TREND, requestUserId], // 쿼리 키 설정
    enabled: Boolean(requestUserId), // 사용자 ID가 있을 때만 쿼리 실행
    throwOnError: true, // 오류 발생 시 예외를 throw 하도록 설정
    ...queryOptions, // 사용자 정의 쿼리 옵션
  });
}

export default useGetTrends;
