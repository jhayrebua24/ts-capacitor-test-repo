import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TODOS } from "./constants";
import { ITodo } from "./interface";

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: `api/${TODOS}`,
  tagTypes: [TODOS],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], void>({
      query: () => "/todos",
      providesTags: (results) =>
        results
          ? // successful query
            [
              ...results.map(({ id }) => ({ type: TODOS, id } as const)),
              { type: TODOS, id: "LIST" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: TODOS, id: "LIST" }],
    }),
    addTodo: builder.mutation<ITodo, Partial<ITodo>>({
      query(body) {
        return {
          url: "/todos",
          method: "POST",
          body,
        };
      },
      // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      invalidatesTags: [{ type: TODOS, id: "LIST" }],
    }),
    deletePost: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `/todos/${id}`,
          method: "DELETE",
        };
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      invalidatesTags: (_result, _error, id) => [{ type: TODOS, id }],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery, useAddTodoMutation, useDeletePostMutation } =
  todoApi;
