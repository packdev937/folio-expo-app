import {ForwardedRef} from "react";
import {QueryKey, UseQueryOptions} from "@tanstack/react-query";
import {AxiosError} from "axios";

function mergeRefs<T>(...refs: ForwardedRef<T>[]) {
  return (node: T) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    })
  }
}

type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ResponseError, TData, QueryKey>,
  'queryKey'
>;

type ResponseError = AxiosError<{
  statusCode: number;
  message: string;
  error: string;
}>;

export {
  mergeRefs
  , UseQueryCustomOptions
  , ResponseError
}
