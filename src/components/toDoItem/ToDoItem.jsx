import "./index.css";

const ToDoItem = ({ todo, setList, list }) => {
  const changeTodo = (status = "delete") => {
    if (status === "completed") {
      const newList = [
        ...list.filter((item) => item.id != todo.id),
        { id: todo.id, content: todo.content, isCompleted: !todo.isCompleted },
      ];
      setList(newList);
      return localStorage.setItem("list", JSON.stringify(newList));
    } else {
      const newList = list.filter((item) => item.id != todo.id);
      setList(newList);
      return localStorage.setItem("list", JSON.stringify(newList));
    }
  };

  return (
    <li className="ToDoItem">
      <p className="box" onClick={() => changeTodo("completed")}>
        {todo.isCompleted ? "✅" : "◻️"}
      </p>
      <p className={`content ${todo.isCompleted && "deleted"}`}>
        {todo.content}
      </p>
      {todo.isCompleted && (
        <p className="deleteTodo" onClick={changeTodo}>
          🗑️
        </p>
      )}
    </li>
  );
};

export default ToDoItem;
