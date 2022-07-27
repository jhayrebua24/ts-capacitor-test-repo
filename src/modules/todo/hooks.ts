import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useGetQuery } from "common/hooks/useHelpers";
import { Dialog } from "@capacitor/dialog";
import { FetchDataInterface, IMutate } from "common/interface";
import { TODOS } from "./constants";
import api from "common/utils/api";

export const useGetTodos = <T>(): FetchDataInterface<T> =>
  useGetQuery<T>([TODOS], "/todos");

export const useAddTodo = (): IMutate => {
  const client = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(
    (payload) => api.post("/todos", payload),
    {
      onSuccess: async () => {
        await Dialog.alert({
          title: "Success",
          message: "New Todo Added",
        });
        client.invalidateQueries([TODOS]);
      },
    },
  );
  return [mutateAsync, isLoading];
};

export const useDeleteTodo = (): IMutate => {
  const client = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(
    (id: number) => api.delete(`/todos/${id}`),
    {
      onSuccess: async () => {
        await Dialog.alert({
          title: "Success",
          message: "Todo Successfully Deleted",
        });
        client.invalidateQueries([TODOS]);
      },
    },
  );
  return [mutateAsync, isLoading];
};
