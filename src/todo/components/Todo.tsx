import { ITodo } from "../interface";

interface Props {
  data: ITodo;
}

function Todo({ data }: Props): JSX.Element {
  return (
    <div>
      <p>
        {data.title} - {data.completed ? "Complete" : "Not Complete "}
      </p>
    </div>
  );
}

export default Todo;
