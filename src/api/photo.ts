import axiosInstance from "@/api/axios";

interface TrendResponse {
  photos: TrendItem[];
}

const getTrends = async (requestUserId: string): Promise<TrendResponse> => {
  const {data} = await axiosInstance.get<TrendResponse>('/photos/trend', {
    headers: {
      'X-User-Id': requestUserId,
    },
  });
  return data;
};

export {
  getTrends,
  TrendResponse
}
