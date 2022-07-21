import axios from "axios";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { FetchDataInterface, RequestResponse } from "../interface";

export const useGetQuery = <T,>(
  key: QueryKey,
  url: string,
): FetchDataInterface<T> => {
  const result = useQuery(key, () => axios.get(url));
  const { data, isLoading } = result;
  return [((data as RequestResponse<T>)?.data || {}) as T, isLoading, result];
};
