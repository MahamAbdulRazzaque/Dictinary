import { useState } from 'react';
import './App.css';

function App() {
  const[word , setWord] = useState('');
  const[data , setData] = useState(null);
 
  const search = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(res => setData(res[0]));

  }

  return (
      <div className='box'>
        <h2>Dictinary</h2>
        <input value={word} onChange={(e) => setWord(e.target.value)} placeholder='Enter a word'/>
        <button onClick={search}>Search</button>

        {data && (
          <div className="result">
           <p><b>{data.word}</b> ({data.meanings[0].partOfSpeech})</p>
           <p>{data.meanings[0].definitions[0].definition}</p>
          </div>
        )}
      </div>
  )
}

export default App;
