import React from 'react'
import {useEffect, useState} from "react";

export default function Keypad({letters, isKeyPressed}) {
    var letters1 = letters.slice(0, 10)
    var letters2 = letters.slice(10, 20)
    var letters3 = letters.slice(20, 26)
    console.log(letters1)
    console.log(letters2)
    console.log(letters3)
    return (
        <div className="keypad">
        {letters1 && letters1.map((letter, i)=>{
            return (
                <div onClick={() => {isKeyPressed({key: letter.key}); console.log(letter.key)}} key = {i} className = {letter.color}> {letter.key}</div>
            )
        })}
        <br></br>
        {letters2 && letters2.map((letter, i)=>{
            return (
                <div onClick={() => {isKeyPressed({key: letter.key}); console.log(letter.key)}} key = {i} className = {letter.color}> {letter.key}</div>
            )
        })}
        <br></br>
        {letters3 && letters3.map((letter, i)=>{
            return (
                <div onClick={() => {isKeyPressed({key: letter.key}); console.log(letter.key)}} key = {i} className = {letter.color}> {letter.key}</div>
            )
        })}
        <div style = {{width: '60px'}} onClick={() => {isKeyPressed({key: 'Backspace'})}} className = "empty"> Del </div>
        <div style = {{width: '70px'}} onClick={() => {isKeyPressed({key: 'Enter'})}} className = "empty"> Enter </div>

            
        </div>
    )
}
