import { useState } from "react";
import "./App.css";
import ToDoList from "./components/toDoList";
import FullInput from "./components/fullInput";
import toDoList from "./mock/toDoList";
import { AiOutlineCheckSquare } from "react-icons/ai";

function App() {
  const [list, setList] = useState(toDoList);
  return (
    <div className="App">
      <h3>
        <AiOutlineCheckSquare /> To Do List
      </h3>
      <div className="listContent">
        <ToDoList list={list} setList={setList} />
        <FullInput setList={setList} list={list} />
      </div>
    </div>
  );
}
// TODO: sistemare il CSS che è osceno
export default App;
