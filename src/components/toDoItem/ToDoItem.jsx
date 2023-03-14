import "./index.css";

const ToDoItem = ({ todo, setList }) => {
  console.log(todo);
  return (
    <li className="ToDoItem">
      <p>{todo.isCompleted ? "✅" : "◻️"}</p>
      <p>{todo.content}</p>
    </li>
  );
};

export default ToDoItem;
