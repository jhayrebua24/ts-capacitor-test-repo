import Todo from "todo/components/Todo";
import TodoForm from "todo/form/TodoForm";
import { useGetTodos } from "todo/hooks";
import { ITodo } from "todo/interface";

function TodoContainer(): JSX.Element {
  const [data, isLoading] = useGetTodos<ITodo[]>();
  return (
    <div>
      <TodoForm />
      {isLoading ? (
        <p>LOADING...</p>
      ) : (
        data.map((data) => <Todo key={data.id} data={data} />)
      )}
    </div>
  );
}

export default TodoContainer;
