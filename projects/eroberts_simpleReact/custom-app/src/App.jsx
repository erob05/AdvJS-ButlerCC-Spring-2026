import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      date: new Date().toLocaleDateString()
    };

    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <Header />
      <Main todos={todos} addTodo={addTodo} />
      <Footer />
    </>
  );
}

export default App;