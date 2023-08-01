import logo from './logo.svg';
import './App.css';
import Wordle from './components/Wordle'

import {useEffect, useState} from "react";

function App() {

  const [sol, setSol] = useState(null);
  const [possibleWords, setPossibleWords] = useState(null)


  //X-MASTER-KEY=$2b$10$xtBZygQQxyXUTVjtS1qnkuOabNCFjWcKgvdvorJ4S28kycor2ZK52
  //X-ACCESS-KEY=$2b$10$Z.ljRZ0dJNYDTPOwG58oautx3F8m6W1no/.SGXemenLOZ5ezQY9GK"

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/64c86b169d312622a389c43d", {
      headers: {
      'X-MASTER-KEY':'$2b$10$xtBZygQQxyXUTVjtS1qnkuOabNCFjWcKgvdvorJ4S28kycor2ZK52',
      'X-ACCESS-KEY':'$2b$10$Z.ljRZ0dJNYDTPOwG58oautx3F8m6W1no/.SGXemenLOZ5ezQY9GK'
    }})
    .then(res => res.json())
    .then(words => {

      var randomWords = []
      let myPossibleWords = []

      words = words['record']['solutions']
      myPossibleWords = [...words] // attach common words
      
      //random words finder
      for (var i = 0; i<6; i++)
        randomWords.push(words[Math.floor(Math.random() * words.length)])
      setSol(randomWords)

      // Fetch uncommon words
      fetch("https://api.jsonbin.io/v3/b/64c86ef88e4aa6225ec88ffb", {
      headers: {
      'X-ACCESS-KEY':'$2b$10$Z.ljRZ0dJNYDTPOwG58oautx3F8m6W1no/.SGXemenLOZ5ezQY9GK',
      'X-MASTER-KEY':'$2b$10$xtBZygQQxyXUTVjtS1qnkuOabNCFjWcKgvdvorJ4S28kycor2ZK52',
      }})
      .then(res2 => res2.json())
      .then(words2 => {
      console.log(words2)
      words2 = words2['record']['guesses']
      myPossibleWords = [...myPossibleWords, ...words2] // attach uncommon words
      setPossibleWords(myPossibleWords)
      console.log("myPossibleWords 2 ", possibleWords)
      })
    })
    
  }, [setSol, setPossibleWords])

  return (
    <div className="App">
      <header className="App-header">
          {sol && <Wordle solutions = {sol} possibleWords = {possibleWords}/>}
        
      </header>
    </div>
  );
}


export default App;

