import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import componentsImg from './assets/components.svg'
import {CORE_CONCEPTS} from './data.js';

function genRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function Header() {
    const description = genRandomInt(0,9)

    return (
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo"/>
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </a>
            <p>Random number : {description}</p>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
function CoreConcept({image,title,description}){
    // eslint-disable-next-line react/prop-types
    // const {image,title,description} = props
    return(
        <li className="data">
            <img src={image} alt="cgUA" width={64} height={64}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header/>
            <h1>Vite + React</h1>
            <h2>Core Concepts</h2>
            <ul className="main-contents">
                <CoreConcept image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
                <CoreConcept {...CORE_CONCEPTS[1]} />
                <CoreConcept {...CORE_CONCEPTS[2]} />
                <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
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
