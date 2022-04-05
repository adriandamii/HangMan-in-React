export default function Keyboard(props) {
    return(
        <div id="keyboardA">
            {props.alphabet.map(function(letter, index) {
                return <button disabled={props.disable} id={"button" + index} className="keyboard" key={index} 
                            value={letter} onClick={props.checkLetter}>{letter}</button>;
            })}
        </div>
    )
}