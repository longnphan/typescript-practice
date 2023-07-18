import { useRef } from "react";

interface ShoppingListFormProps {
  addItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({ addItem }: ShoppingListFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = inputRef.current!.value;
    const newQuantity = Number(quantityRef.current!.value);
    addItem(newProduct, newQuantity);
    inputRef.current!.value = "";
    quantityRef.current!.value = "1";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={inputRef} />
      <input type="number" placeholder="Quantity" min={0} ref={quantityRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ShoppingListForm;
