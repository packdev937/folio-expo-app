import axiosInstance from "@/api/axios";

type RetrieveFeedDetailResponse = Feed;

interface FeedResponse {
  feedId: number;
  photoImageUrl: string;
}

interface RetrieveFeedsResponse {
  feeds: FeedResponse[];
}

const getFeedDetail = async (feedId: number): Promise<RetrieveFeedDetailResponse> => {
  const {data} = await axiosInstance.get(`/feeds/${feedId}`);
  return data;
};

const getFeeds = async (requestUserId: string): Promise<RetrieveFeedsResponse> => {
  const {data} = await axiosInstance.get<RetrieveFeedsResponse>(`/feeds`, {
    headers: {
      'X-User-Id': requestUserId,
    },
  });
  return data;
};

export {
  getFeedDetail,
  getFeeds,
  RetrieveFeedDetailResponse,
  RetrieveFeedsResponse
}
