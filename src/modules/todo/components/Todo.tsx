import { useDeletePostMutation } from "../api";
import { ITodo } from "../interface";

interface Props {
  data: ITodo;
}

function Todo({ data }: Props): JSX.Element {
  const [deleteTodo, { isLoading }] = useDeletePostMutation();

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <p>
        {data.title} - {data.completed ? "Complete" : "Not Complete "}
      </p>
      <button
        type="button"
        onClick={() => deleteTodo(data.id)}
        disabled={isLoading}
      >
        remove
      </button>
    </div>
  );
}

export default Todo;
