import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MessagePreview({ name }) {
  return <p className="read-the-docs">Hello, {name || 'Pirate learner'}!</p>
}

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>Vite +++ React</h1>
      <p>Playing with useState now</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <h2>Second useState example</h2>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Type your name"
        />
        <MessagePreview name={name} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
