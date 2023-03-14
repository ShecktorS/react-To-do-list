import "./index.css";
import toDoList from "../../mock/toDoList";
import ToDoItem from "../toDoItem";

const ToDoList = () => {
  return (
    <ul className="ToDoList">
      {toDoList.map((todo) => (
        <ToDoItem todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
