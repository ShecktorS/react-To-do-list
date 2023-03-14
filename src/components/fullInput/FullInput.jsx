import "./index.css";
import { useState } from "react";
import { GrFormAdd } from "react-icons/gr";

const FullInput = ({ setList, list }) => {
  const onHandleClick = (e) => {
    e.preventDefault();

    if (value[0] !== " " && value !== "" && value.length > 3) {
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
      setValue("");
      e.target[0].value = "";
    } else {
      alert(
        "Stai tentando di inserire una task non valida o già presente! Per favore, ripulisci il campo e riprova..."
      );
    }
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
      <button type="submit">
        <GrFormAdd className="addSymbol" />
      </button>
    </form>
  );
};

export default FullInput;
