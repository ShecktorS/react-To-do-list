import "./index.css";

const ToDoItem = ({ todo }) => {
  return (
    <li className="ToDoItem">
      <p>{todo.content}</p>
      <p>{todo.isCompleted ? "✅" : "◻️"}</p>
    </li>
  );
};

export default ToDoItem;
