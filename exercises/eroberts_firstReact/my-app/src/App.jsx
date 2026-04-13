import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hello from './components/Hello'
import CurrentDate from './components/CurrentDate'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const appName = "My React App";

  return (
    <>
    <Header myTitle={appName} />
    <main>
      <Hello />
      <CurrentDate />
    </main>
    <Footer myTitle={appName} />
    </>
  )
};

export default App;