import ListShow from "./ListShow";

interface TodoListProp {
  todoList: string[];
}

function List({ todoList}: TodoListProp) {
  const renderList = todoList.map((item: string, index: number) => <ListShow key={index} todoItem={item} />);

  return (
    <>
      <ul>{renderList}</ul>
    </>
  );
}

export default List;
