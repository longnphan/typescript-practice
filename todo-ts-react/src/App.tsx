import { useState, ChangeEvent } from "react";
import "./App.css";

type todoItems = {
  item: string;
}

function App() {
  const [textInput, setTextInput] = useState("");
  const [todoList, setTodoList] = useState<todoItems[]>([]);

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setTodoList(prev => [...prev, textInput]);
    setTextInput("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTextInput(e.target.value)}
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={textInput} onChange={handleChange} />
        <button>Add</button>
      </form>
    </>
  );
}

export default App;
