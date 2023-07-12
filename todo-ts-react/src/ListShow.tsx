import { useState } from "react";

interface TodoItemProps {
  todoItem: string;
}
function ListShow({ todoItem }: TodoItemProps) {
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsDone(!isDone);
  };

  return (
    <>
      <li
        onClick={handleClick}
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {todoItem}
      </li>
    </>
  );
}

export default ListShow;
