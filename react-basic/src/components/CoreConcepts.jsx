import {CORE_CONCEPTS} from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts() {
    return (
        <ul className="main-contents">
            {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item} />)}
        </ul>
    )
}