import Todo from "modules/todo/components/Todo";
import TodoForm from "modules/todo/form/TodoForm";
import { useGetTodos } from "modules/todo/hooks";
import { ITodo } from "modules/todo/interface";

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
