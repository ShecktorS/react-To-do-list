import "./index.css";
import toDoList from "../../mock/toDoList";
import ToDoItem from "../toDoItem";

const ToDoList = ({ list, setList }) => {
  return (
    <ul className="ToDoList">
      {list.map((todo, i) => (
        <ToDoItem todo={todo} key={i} setList={setList} />
      ))}
    </ul>
  );
};

export default ToDoList;
