import {useState} from 'react'
import Header from './components/Header.jsx'
import CoreConcept from "./components/CoreConcept.jsx";
import './App.css'
import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import TabButton from "./components/TabButton.jsx";


function App() {
    const [count, setCount] = useState(0)
    const [tabContent, setTabContent] = useState()

    function handlerLog(name) {
        console.log('Hello My friend!! ', name)
        setTabContent(name)
    }

    return (
        <>
            <Header/>
            <h1>Vite + React</h1>
            <h2>Core Concepts</h2>
            <ul className="main-contents">
                <CoreConcept image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title}
                             description={CORE_CONCEPTS[0].description}/>
                <CoreConcept {...CORE_CONCEPTS[1]} />
                <CoreConcept {...CORE_CONCEPTS[2]} />
                <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
            <div>
                <h2>Examples</h2>
                <div className="boxes">
                    <TabButton onSelect={() => handlerLog('components')}>Components</TabButton>
                    <TabButton onSelect={() => handlerLog('jsx')}>JSX</TabButton>
                    <TabButton onSelect={() => handlerLog('props')}>Props</TabButton>
                    <TabButton onSelect={() => handlerLog('state')}>State</TabButton>
                </div>
                <div className='content'>
                    {!tabContent ? 'Please click a button' : null}
                    <h3>{EXAMPLES[tabContent]?.title}</h3>
                    <p>{EXAMPLES[tabContent]?.description}</p>
                    <pre><code>{EXAMPLES[tabContent]?.code}</code></pre>
                </div>
            </div>
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
