import useGetRefreshToken from "@/hooks/queries/useGetRefreshToken";
import useGetProfile from "@/hooks/queries/useGetProfile";

function useAuth() {

  const refreshTokenQuery = useGetRefreshToken();
  const getProfileQuery = useGetProfile({
    enabled: refreshTokenQuery.isSuccess,
  })

  const isAuthenticated = getProfileQuery.isSuccess;
  const isLoading = refreshTokenQuery.isPending;
  return {
    isAuthenticated,
    isLoading
  }
}

export default useAuth;
