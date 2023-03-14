import { useState } from "react";
import "./App.css";
import ToDoList from "./components/toDoList";
import FullInput from "./components/fullInput";
import toDoList from "./mock/toDoList";

function App() {
  const [list, setList] = useState(toDoList);
  return (
    <div className="App">
      <h3>___To Do List___</h3>
      <div className="listContent">
        <ToDoList list={list} setList={setList} />
        <FullInput setList={setList} list={list} />
      </div>
    </div>
  );
}
// TODO: sistemare il CSS che è osceno
export default App;
