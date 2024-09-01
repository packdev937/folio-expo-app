import axiosInstance from "@/api/axios";

type RetrieveFeedDetailResponse = Feed;  // Feed 타입을 확장

const getFeedDetail = async (feedId: number): Promise<RetrieveFeedDetailResponse> => {
  const {data} = await axiosInstance.get(`/feeds/${feedId}`);
  return data;
};

export {
  getFeedDetail,
  RetrieveFeedDetailResponse
}
