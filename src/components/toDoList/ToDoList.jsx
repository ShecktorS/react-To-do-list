import "./index.css";
import ToDoItem from "../toDoItem";
import { useEffect } from "react";

const ToDoList = ({ list, setList }) => {
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list"));
    setList(storedList);

    if (!storedList) {
      localStorage.setItem("list", JSON.stringify(list));
    } else {
      setList(storedList);
    }
  }, []);

  return (
    <ul className="ToDoList">
      {list
        .sort((a, b) => a.id - b.id)
        .map((todo, i) => (
          <ToDoItem todo={todo} key={i} setList={setList} list={list} />
        ))}
      {list.length < 1 && <p>Nella lista non è presente alcuna task!</p>}
    </ul>
  );
};

export default ToDoList;
