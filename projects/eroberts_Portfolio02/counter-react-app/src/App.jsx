import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>ER Counter App</h1>
      </header>
      <main>
      <Counter />
      </main>
      <footer><br></br><p>&copy; ERoberts 2026</p></footer>
    </div>
  );
}

export default App;