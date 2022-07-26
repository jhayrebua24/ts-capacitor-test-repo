/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetTodosQuery } from "modules/todo/api";
import Todo from "modules/todo/components/Todo";
import TodoForm from "modules/todo/form/TodoForm";
import { ITodo } from "modules/todo/interface";

function TodoContainer(): JSX.Element {
  // const [data, isLoading] = useGetTodos<ITodo[]>();
  const { data, isLoading } = useGetTodosQuery();
  return (
    <div>
      <TodoForm />
      {isLoading ? (
        <p>LOADING...</p>
      ) : (
        data?.map((data) => <Todo key={data.id} data={data} />)
      )}
    </div>
  );
}

export default TodoContainer;
