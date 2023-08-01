import React from 'react'

export default function Row( {guess, index, currentGuess, row} ) {
    
    if (guess != undefined) {
        //console.log("From ROW:", guess)
        if(index > row)
        return (
            <div className="row past">
                { 
                    guess.map((letter, i) => (
                        <div key={i} className={letter.color}>{letter.key}</div>
                      ))    
                }    
        </div>
        )
        if(index == row)
        return (
            <div className="row current">
                { 
                    guess.map((letter, i) => (
                        <div key={i} className={letter.color}>{letter.key}</div>
                      ))    
                }    
        </div>
        )
        if(index < row)
        return (
            <div className="row future">
                { 
                    guess.map((letter, i) => (
                        <div key={i} className={letter.color}>{letter.key}</div>
                      ))    
                }    
        </div>
        )
    }
}

/*
<div className = {guess[0].color}>{guess[0].key}</div>
                <div className = {guess[1].color}>{guess[1].key}</div>
                <div className = {guess[2].color}>{guess[2].key}</div>
                <div className = {guess[3].color}>{guess[3].key}</div>
                <div className = {guess[4].color}>{guess[4].key}</div>
if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>{l.key}</div>
        ))}
      </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">{letter}</div>
        ))}
        {[...Array(5 - letters.length)].map((_,i) => (
          <div key={i}></div>
        ))}
      </div>
    )
  }
*/