 import React, {useState} from "react";
 import Lives from "./Lives";
 import Keyboard from "./Keyboard";
 import Lines from './Lines';
 
 export default function Game(props) {
    const [lives, setLives] = useState(10);
    const [win, setWin] = useState(false);
    const [disable, setDisable] = useState(false);

    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let inputValue = props.inputValue.toUpperCase();
    let arrLines = [];
    
    for (let i = 0; i < inputValue.length; ++i) {
        arrLines.push({id: i, line: " _ ", letter: inputValue[i]});
    }
    
    function checkLetter(e) {
        let pressedButton = document.getElementById(e.currentTarget.id);
        let decrementAux = 0;
        pressedButton.style.backgroundColor = "#AB6161";
        pressedButton.style.color = "white";
        arrLines.forEach(line => {
            if (line.letter === e.currentTarget.value) {
                let lines = document.getElementsByTagName("span")[line.id];
                lines.textContent = e.currentTarget.value;
                ++decrementAux;
            } 
        });

        if ((decrementAux === 0) && (lives > 0)) {
            setLives(lives - 1);
        } 

        let win = 1;
        for (let i = 0; i < inputValue.length; ++i) {
            let line = document.getElementsByClassName("lines")[i].textContent;
            if (line === " _ ") {
                win = 0;
            }
        }
        
        if (win === 1 && lives > 0) {
            setWin(true);
            setDisable(true);
        }
    }
    
    return (
        <div id="game">
            <Keyboard alphabet={alphabet} checkLetter={checkLetter} disable={disable} />
            <Lines arrLines={arrLines} win={win} />
            <Lives lives={lives} inputValue={inputValue} win={win} />
        </div>
    )
}