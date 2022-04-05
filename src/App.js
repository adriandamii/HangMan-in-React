import './App.css';
import Word from './Word';
import React, {useState} from 'react';

export default function App() {
  const [onStart, setOnStart] = useState(false);

  return (
    <div className='main'>
      <h1>HANGMAN</h1>
      {!onStart ? <h5>Type a word and press start!</h5> : <h5>Press any button!</h5>}
      <div>
        <Word onStart={onStart} setOnStart={setOnStart} />
      </div>
    </div>
  );
}