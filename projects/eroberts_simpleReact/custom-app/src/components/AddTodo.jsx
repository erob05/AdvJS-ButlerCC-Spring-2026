import { useState } from "react";

function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Add Todo:</label>
      <input
        id="todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;