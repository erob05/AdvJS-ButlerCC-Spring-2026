function TodoItem({ todo }) {
  return (
    <p>
      <strong>{todo.text}</strong>
      <br />
      <small>Added: {todo.date}</small>
    </p>
  );
}

export default TodoItem;