import { useState, ChangeEvent, SyntheticEvent } from "react";
import List from "./List";
import "./App.css";


function App() {
  const [textInput, setTextInput] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setTodoList(prev => [...prev, textInput]);
    setTextInput("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={textInput} onChange={handleChange} />
        <button>Add</button>
      </form>
      <List todoList={todoList} />
    </>
  );
}

export default App;
