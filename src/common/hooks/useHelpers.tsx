import { QueryKey, useQuery } from "@tanstack/react-query";
import { FetchDataInterface, RequestResponse } from "../interface";
import api from "common/utils/api";

export const useGetQuery = <T,>(
  key: QueryKey,
  url: string,
): FetchDataInterface<T> => {
  const result = useQuery(key, () => api.get(url));
  const { data, isLoading } = result;
  return [((data as RequestResponse<T>)?.data || {}) as T, isLoading, result];
};
