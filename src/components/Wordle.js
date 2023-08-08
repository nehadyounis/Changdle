import React from 'react'
import useWordle from '../hooks/useWordle'
import {useEffect, useState} from 'react'
import Grid from './Grid'
import Keypad from './Keypad'
import Dialogue from './Dialogue'


export default function Wordle(solutions) {
    const {index, currentGuess, guessesObjects, guessesStrings, done, isKeyPressed, letters} = useWordle(solutions)
    const [showDialogue, setShowDialogue] = useState(false)
    useEffect(() => {
        window.addEventListener('keyup', isKeyPressed)
        if (done) {
            setTimeout(()=>setShowDialogue(true), 2500)
            window.removeEventListener('keyup', isKeyPressed)
        }
        if (index > 5) {
            setTimeout(()=>setShowDialogue(true), 2500)
            window.removeEventListener('keyup', isKeyPressed)
        }

        return ()=> window.removeEventListener('keyup', isKeyPressed)
    }, [isKeyPressed, index, done])



    return (
        <div>
            <h1> Changdle </h1>
            <Grid index = {index} currentGuess={currentGuess} guessesObjects = {guessesObjects} done = {done}/>
            <Keypad letters = {letters} isKeyPressed = {isKeyPressed} />
            {showDialogue && <Dialogue done = {done} index = {index} solutions= {solutions} guessesObjects = {guessesObjects}></Dialogue>}
            <ul className="social-icons">
                <li><h6>By: Nehad Younis</h6></li>
                <li><a href="https://nehadyounis.github.io" target="_blank"><i className="icon-terminal"></i></a></li>
                <li><a href="https://twitter.com/nehadyounis1" target="_blank"><i className="icon-twitter2"></i></a></li>
                <li><a href="https://github.com/nehadyounis" target="_blank"><i className="icon-github2"></i></a></li>
                <li><a href="https://linkedin.com/in/nehadyounis" target="_blank"><i className="icon-linkedin2"></i></a></li>
                <li><a href="mailto:nehadyounice@gmail.com"><i class="icon-mail"></i></a></li>
                <li><h6> | See the project on github:</h6></li>
                <li><a href="https://github.com/nehadyounis" target="_blank"><i className="icon-github2"></i></a></li>
            </ul>
        </div>
    )
}


//             <h2> Guessing: {solutions['solutions'][index]}</h2>
