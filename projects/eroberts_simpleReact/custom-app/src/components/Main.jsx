import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Main({ todos, addTodo }) {
  return (
    <main>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </main>
  );
}

export default Main;