import React from 'react'
import Row from './Row'

export default function Grid({index, currentGuess, guessesObjects, done}) {

    //console.log("From Grid :", guessesObjects)

    return (
        <div>
        <Row guess = {guessesObjects[0]} index = {index} currentGuess = {currentGuess} row = {0} />
        <Row guess = {guessesObjects[1]} index = {index} currentGuess = {currentGuess} row = {1} />
        <Row guess = {guessesObjects[2]} index = {index} currentGuess = {currentGuess} row = {2} />
        <Row guess = {guessesObjects[3]} index = {index} currentGuess = {currentGuess} row = {3} />
        <Row guess = {guessesObjects[4]} index = {index} currentGuess = {currentGuess} row = {4} />
        <Row guess = {guessesObjects[5]} index = {index} currentGuess = {currentGuess} row = {5} />
        </div>
        
    )
}
