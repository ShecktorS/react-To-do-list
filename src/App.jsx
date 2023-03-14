import { useState } from "react";
import "./App.css";
import ToDoList from "./components/toDoList";
import FullInput from "./components/fullInput";

function App() {
  return (
    <div className="App">
      <h3>To Do List</h3>
      <ToDoList />
      <FullInput />
    </div>
  );
}

export default App;
