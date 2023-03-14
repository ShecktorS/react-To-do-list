import "./index.css";
import ToDoItem from "../toDoItem";

const ToDoList = ({ list, setList }) => {
  return (
    <ul className="ToDoList">
      {list
        .sort((a, b) => a.id - b.id)
        .map((todo, i) => (
          <ToDoItem todo={todo} key={i} setList={setList} />
        ))}
      {list.length < 1 && <p>Nella lista non è presente alcuna task!</p>}
    </ul>
  );
};

export default ToDoList;
