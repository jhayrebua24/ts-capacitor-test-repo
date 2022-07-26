import { Route, Routes } from "react-router-dom";
import TodoContainer from "modules/todo";

function PublicRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<TodoContainer />} />
    </Routes>
  );
}

export default PublicRoutes;
