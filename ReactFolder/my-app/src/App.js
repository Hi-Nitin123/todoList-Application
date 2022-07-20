import "./App.css";

import Login from "./Components/forms/Login";

// import SignUp from "./Components/forms/SignUp";
import { Routes, Route } from "react-router-dom";
import TodoList from "./Components/TodoList";
import ListOfUsers from "./Components/ListOfUsers";
import Error from "./Components/Error";

function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/MyTodoList" element={<TodoList />} />
        <Route path="/admin" element={<ListOfUsers />} />
        <Route element={<Error />} />
      </Routes>

      {/* <TodoList /> */}
      {/* <ListOfUsers /> */}
    </div>
  );
}

export default App;
