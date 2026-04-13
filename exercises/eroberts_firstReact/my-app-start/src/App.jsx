import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
        <h1>My React App</h1>
    </header>
    <main>
      <div className="hello">
            <h2>Hello World!</h2>
            <p>Welcome to my React application!</p>
      </div>
      <div className="current-date">
            <p>Today's Date: {formattedDate}</p>
      </div>
    </main>
    <footer>
            <p><small>&copy; 2026 My React App</small></p>
    </footer>
    </>
  )
};

export default App;