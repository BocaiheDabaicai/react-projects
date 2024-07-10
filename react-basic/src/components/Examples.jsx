import TabButton from "./TabButton.jsx";
import {EXAMPLES} from "../data.js";
import {useState} from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples(){
    const [tabContent, setTabContent] = useState()

    function handlerLog(name) {
        console.log('Hello My friend!! ', name)
        setTabContent(name)
    }

    return (
        <Section title='Examples'>
            <Tabs
                buttonsContainer="menu"
                buttons={<div className="boxes">
                <TabButton isSelected={tabContent === 'components'}
                           onClick={() => handlerLog('components')}>Components</TabButton>
                <TabButton isSelected={tabContent === 'jsx'} onClick={() => handlerLog('jsx')}>JSX</TabButton>
                <TabButton isSelected={tabContent === 'props'} onClick={() => handlerLog('props')}>Props</TabButton>
                <TabButton isSelected={tabContent === 'state'} onClick={() => handlerLog('state')}>State</TabButton>
            </div>}
                content={<div className='content'>
                {!tabContent ? 'Please click a button' : null}
                <h3>{EXAMPLES[tabContent]?.title}</h3>
                <p>{EXAMPLES[tabContent]?.description}</p>
                <pre><code>{EXAMPLES[tabContent]?.code}</code></pre>
            </div>}>

            </Tabs>


        </Section>
    )
}