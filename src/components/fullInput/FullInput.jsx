import "./index.css";

const FullInput = () => {
  return (
    <form action="submit" className="FullInput">
      <input
        type="text"
        name="addTask"
        id="addTask"
        placeholder="Inserisci la task 😊"
      />
      <input type="submit" value="+" />
    </form>
  );
};

export default FullInput;
