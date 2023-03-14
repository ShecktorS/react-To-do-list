import { useState } from "react";
import "./App.css";
import ToDoList from "./components/toDoList";

function App() {
  return (
    <div className="App">
      <h3>To Do List</h3>
      <ToDoList />
    </div>
  );
}

export default App;
