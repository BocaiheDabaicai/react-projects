import {useState} from "react";

export default function Player({initialName, symbol}) {
    const [name,setName] = useState(initialName);
    const [edit, setEdit] = useState(false);

    let playerName = <span className='player-name'>{name}</span>
    if (edit) playerName = <input type='text' required value={name} onChange={(e) => setName(e.target.value)}/>


    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => setEdit(!edit)}>{edit ? 'Save' : 'Edit'}</button>
        </li>
    )

}