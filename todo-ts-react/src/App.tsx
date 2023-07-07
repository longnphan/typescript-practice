import { useState } from "react";
import "./App.css";

type todoItems = {
  item:string;
}

function App() {
  const [textInput, setTextInput] = useState("");
  const [todoList, setTodoList] = useState<todoItems[]>([]);

  const handleSubmit = e => {
    e.preventDefault();
    setTodoList(prev => [...prev, textInput]);
    setTextInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={textInput} onChange={e => setTextInput(e.target.value)} />
        <button>Add</button>
      </form>
    </>
  );
}

export default App;
