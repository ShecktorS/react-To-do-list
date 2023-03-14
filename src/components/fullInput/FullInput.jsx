import "./index.css";
import { useState } from "react";

const FullInput = ({ setList }) => {
  const onHandleClick = (e) => {
    e.preventDefault();
    console.log(value);
    setList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: value,
        isCompleted: false,
      },
    ]);
    e.target[0].value = "";
  };

  const getValue = (e) => setValue(e.target.value);

  const [value, setValue] = useState("");

  return (
    <form action="submit" className="FullInput" onSubmit={onHandleClick}>
      <input
        type="text"
        name="addTask"
        id="addTask"
        placeholder="Inserisci la task 😊"
        onChange={getValue}
      />
      <input type="submit" value="+" />
    </form>
  );
};

export default FullInput;
