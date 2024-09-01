import {queryKeys} from "@/constants";
import {useQuery} from "@tanstack/react-query";
import axiosInstance from "@/api/axios";
import {UseQueryCustomOptions} from "@/utils";

type ResponseProfile = Profile;

function useGetProfile(
  queryOptions?: UseQueryCustomOptions<ResponseProfile, ResponseProfile>,
) {
  return useQuery({
    queryFn: getProfile,
    queryKey: [queryKeys.AUTH, queryKeys.GET_PROFILE],
    ...queryOptions,
  });
}

const getProfile = async (): Promise<ResponseProfile> => {
  const {data} = await axiosInstance.get('/auth/me');

  return data;
};


export default useGetProfile;
