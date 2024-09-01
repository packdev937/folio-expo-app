import {useEffect} from "react";
import {removeHeader, setHeader} from "@/utils/axiosInstance";
import {getEncryptStorage, removeEncryptStorage, setEncryptStorage} from "@/utils/encryptStorage";
import {numbers, queryKeys, storageKeys} from "@/constants";
import {useQuery} from "@tanstack/react-query";
import axiosInstance from "@/api/axios";

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

function useGetRefreshToken() {
  const {data, error, isSuccess, isError, isPending} = useQuery({
    queryKey: [queryKeys.AUTH, queryKeys.GET_ACCESS_TOKEN],
    queryFn: getAccessToken,
    staleTime: numbers.ACCESS_TOKEN_REFRESH_TIME,
    refetchInterval: numbers.ACCESS_TOKEN_REFRESH_TIME,
    refetchOnReconnect: true,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (isSuccess) {
      setHeader('Authorization', `Bearer ${data.accessToken}`);
      setEncryptStorage(storageKeys.REFRESH_TOKEN, data.refreshToken);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      removeHeader('Authorization');
      removeEncryptStorage(storageKeys.REFRESH_TOKEN);
    }
  }, [isError]);

  return {isSuccess, isError, isPending};
}

const getAccessToken = async (): Promise<ResponseToken> => {
  const refreshToken = await getEncryptStorage('refreshToken');

  const {data} = await axiosInstance.get('/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return data;
};


export default useGetRefreshToken;
