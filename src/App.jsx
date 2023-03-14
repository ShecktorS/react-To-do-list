import { useState } from "react";
import "./App.css";
import ToDoList from "./components/toDoList";
import FullInput from "./components/fullInput";
import toDoList from "./mock/toDoList";

function App() {
  const [list, setList] = useState(toDoList);
  return (
    <div className="App">
      <h3>To Do List</h3>
      <ToDoList list={list} setList={setList} />
      <FullInput setList={setList} />
    </div>
  );
}

export default App;
