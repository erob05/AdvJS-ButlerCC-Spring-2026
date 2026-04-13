import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <p>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </p>
  );
}

export default TodoList;