import "./index.css";
import { useState } from "react";

const FullInput = ({ setList, list }) => {
  const onHandleClick = (e) => {
    e.preventDefault();
    if (
      list.find((item) => item.content.toLowerCase() === value.toLowerCase())
    ) {
      alert("La task che stai tentando di inserire è già aggiunta!");
      console.log("trovata!");
      setList((prev) => prev);
    } else {
      setList((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: value,
          isCompleted: false,
        },
      ]);
    }
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
