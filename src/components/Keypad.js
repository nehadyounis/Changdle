import React from 'react'
import {useEffect, useState} from "react";

export default function Keypad({letters, isKeyPressed}) {
    return (
        <div className="keypad">
        {letters && letters.map((letter, i)=>{
            return (
                <div onClick={() => {isKeyPressed({key: letter.key}); console.log(letter.key)}} key = {i} className = {letter.color}> {letter.key}</div>
            )
        })}
        <div style = {{width: '80px'}} onClick={() => {isKeyPressed({key: 'Backspace'})}} className = "empty"> Del </div>
        <div style = {{width: '100px'}} onClick={() => {isKeyPressed({key: 'Enter'})}} className = "empty"> Enter </div>

            
        </div>
    )
}
