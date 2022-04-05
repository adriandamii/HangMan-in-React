import React, {useState} from 'react';
import Game from './Game';

export default function Word(props) {
    const [inputValue, setInputValue] = useState("");
    const onStart = props.onStart;

    function startButton(e) {
        if (e.keyCode === 13) {
            props.setOnStart(true);
        }
    }

    return (
        <div>
            <div>
                {!onStart ? <input value={inputValue} onKeyDown={e => startButton(e)} 
                    onChange={e => {setInputValue(e.target.value)}} style={{ textTransform: 'uppercase'}} /> : null}
            </div>
            <div>
                {!onStart ? <button id="startButton" onClick={() => props.setOnStart(true)}>Start</button> : null}
            </div>
            {onStart ? <Game inputValue={inputValue} /> : null}
        </div>
    )
}