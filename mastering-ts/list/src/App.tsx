import { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import Item from "./models/item";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number) => {
    setItems([...items, { id: crypto.randomUUID(), product, quantity }]);
  };

  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "Chicken", quantity: 2 },
  // ];

  return (
    <>
      <ShoppingListForm addItem={addItem} />
      <ShoppingList items={items} />
    </>
  );
}

export default App;
