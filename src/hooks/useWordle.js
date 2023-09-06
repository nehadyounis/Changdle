import {useState} from 'react'

const useWordle = ({solutions, possibleWords})=> {


    let initials = []
    for (let i = 0; i<6; i++){
        initials[i] = []
        for (let j = 0; j<5; j++){
            initials[i].push({key: '', color: 'empty'})
        }
     }

     let lettersArray =['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
        let initLettersObjects = []
        lettersArray.map((letter,i)=> {
            initLettersObjects.push({key: letter, color:'empty'})
        })
     
    const [index, setIndex] = useState(0)
    const [currentGuess, setCurrentGuess] = useState("")
    const [guessesObjects, setGuessesObjects] = useState([...initials])
    const [guessesStrings, setGuessesStrings] = useState([])
    const [done, setDone] = useState(false)
    const [letters, setLetters] = useState(initLettersObjects)

    
    
    

    const formatGuesses = (guesses, ind)=>{
        let newGuesses = []
        for (let word of guesses){
            let currentSolution = [...solutions[ind]]
            let formatedWordObject = []
            let wordArray = [...word]
            //Greys
            for (let i = 0; i<5; i++){
                formatedWordObject.push({key: wordArray[i], color: 'grey'})
            }
            // Greens
            for (let i = 0; i<5; i++){
                if (wordArray[i] == currentSolution[i]){ 
                    formatedWordObject[i] = {key: wordArray[i], color: 'green'}
                    currentSolution[i] = '0'
                 }
            }
            // Yellows
            for (let i = 0; i<5; i++){ 
                if (currentSolution.includes(wordArray[i]) && formatedWordObject[i].color !='green' ){ 
                    formatedWordObject[i] = {key: wordArray[i], color: 'yellow'}
                    currentSolution[currentSolution.indexOf(wordArray[i])] = '0'
                 }
            }
            newGuesses.push(formatedWordObject)
        

        }
        for (let i = newGuesses.length; i<6; i++){
            newGuesses.push([])
            for (let j = 0; j<5; j++){
                newGuesses[i].push({key: '', color: 'empty'})
            }
         }

    return newGuesses
        

    }
    
    const formatKeypad = (guessesObject) => {
        let lettersObjects = []
        lettersArray.map((letter,i)=> {
            lettersObjects.push({key: letter, color:'empty'})
        })
        //Greys
        for (let i = 0; i<6; i++){
            for (let j = 0; j<5; j++){
                let letter = guessesObject[i][j]
                if (letter.color == 'grey') {
                    let keyLetter = lettersObjects.find((o,i)=> {
                        if (o.key == letter.key) o.color = 'grey'
                    })
                    
                }
            }
            
         }

         //Greys
        for (let i = 0; i<6; i++){
            for (let j = 0; j<5; j++){
                let letter = guessesObject[i][j]
                if (letter.color == 'yellow') {
                    let keyLetter = lettersObjects.find((o,i)=> {
                        if (o.key == letter.key) o.color = 'yellow'
                    })
                    
                }
            }
            
         }

         //Greys
        for (let i = 0; i<6; i++){
            for (let j = 0; j<5; j++){
                let letter = guessesObject[i][j]
                if (letter.color == 'green') {
                    let keyLetter = lettersObjects.find((o,i)=> {
                        if (o.key == letter.key) o.color = 'green'
                    })
                    
                }
            }
            
         }

         return lettersObjects
    }

    const addNewGuess = ()=>{
        // console.log("Current index: " ,index)
        // console.log("Trying to guess: ", solutions[index])
        // console.log("using: ", currentGuess)
        if (currentGuess == solutions[index]){
            setDone(true)
            let m = formatGuesses([...guessesStrings, currentGuess], index)
            let k = formatKeypad(m)
            setLetters(k)
            setGuessesObjects(m)
            setGuessesStrings((prev) => {return[...prev, currentGuess]})
        
        } else if (index == 5) {
            let m = formatGuesses([...guessesStrings, currentGuess], index)
            let k = formatKeypad(m)
            setGuessesObjects(m)
            setLetters(k)
            setGuessesStrings((prev) => {return[...prev, currentGuess]})
            setCurrentGuess("")

        } else {
            let m = formatGuesses([...guessesStrings, currentGuess], index+1)
            let k = formatKeypad(m)
            setGuessesObjects(m)
            setLetters(k)
            setGuessesStrings((prev) => {return[...prev, currentGuess]})
            setIndex((prev) => {return prev + 1});
            setCurrentGuess("")
        }
        
        
        
        
        
    }
    const modifiyCurrentRow = (word) => {
        let guessArray = [...word]
        let guessArrayOfObjects = []
        for (let j = 0; j<5; j++){
            guessArrayOfObjects.push({key: '', color: 'empty'})
        }
        for (let i = 0; i<guessArray.length; i++){
            guessArrayOfObjects[i].key =  guessArray[i] 
        }
        setGuessesObjects((prev) => {
            let newArr = [...prev]
            newArr[index] = guessArrayOfObjects
            return newArr 
        })

    }

    const isKeyPressed = ({key}) => {
        if(key == "Enter") {
            if (index > 5) {
                console.log("You Lost")
                return
            }
            if(currentGuess.length != 5){
                console.log("Word must be 5 characters")
                return
            }
            if (guessesStrings.includes(currentGuess)) {
                window.alert("You already've used that word")
                return
            }
            try {
            if (!possibleWords.includes(currentGuess)) {
                    window.alert("Not a valid word")
                    return
            }  
            } catch {}
            addNewGuess()
            

            
        }
        else if(key == "Backspace") {
            if (currentGuess.length > 0) {
                modifiyCurrentRow(currentGuess.substr(0,currentGuess.length-1))
                setCurrentGuess((prev)=>{
                     return prev.substr(0,prev.length-1)
                })
            }
            return
        }
        else if(/^[a-zA-Z]$/.test(key)) {
            if (currentGuess.length < 5) {
                modifiyCurrentRow(currentGuess + key)
                setCurrentGuess((prev)=>{
                    return prev + key
                })

            }
        }


    }

    return {index, currentGuess, guessesObjects, guessesStrings, done, isKeyPressed, letters}
    
}

export default useWordle
