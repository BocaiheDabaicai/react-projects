import {useState} from 'react'
import Header from './components/Header.jsx'
import './App.css'
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";


function App() {
    const [count, setCount] = useState(0)


    return (
        <>
            <Header/>
            <h1>Vite + React</h1>
            <h2>Core Concepts</h2>
            <CoreConcepts/>
            <Examples/>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
