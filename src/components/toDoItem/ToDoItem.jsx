import "./index.css";

const ToDoItem = ({ todo, setList }) => {
  const changeToDoStatus = () => {
    setList((prev) => [
      ...prev.filter((item) => item.id != todo.id),
      {
        id: todo.id,
        content: todo.content,
        isCompleted: !todo.isCompleted,
      },
    ]);
  };

  const deleteTodo = () => {
    setList((prev) => [...prev.filter((item) => item.id != todo.id)]);
  };
  return (
    <li className="ToDoItem">
      <p className="box" onClick={changeToDoStatus}>
        {todo.isCompleted ? "✅" : "◻️"}
      </p>
      <p className={`content ${todo.isCompleted && "deleted"}`}>
        {todo.content}
      </p>
      {todo.isCompleted && (
        <p className="deleteTodo" onClick={deleteTodo}>
          🗑️
        </p>
      )}
    </li>
  );
};

export default ToDoItem;
