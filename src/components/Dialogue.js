import React from 'react'

export default function Dialogue({index, done, solutions, guessesObjects}) {
    console.log(solutions[0])
    return (
        <div className='dialogue'>
        {
            done && (
                <div>
                <h1>Congratulations, You got it!</h1>
                <h2>You found the answer in {index+1} {index == 0?"try":"tries"}</h2>
                <h5>Solutions for this game were:</h5>
                <h3>{solutions['solutions'][0]}, {solutions['solutions'][1]}, {solutions['solutions'][2]}, {solutions['solutions'][3]}, {solutions['solutions'][4]}, {solutions['solutions'][5]}</h3>
                <div className="play" onClick={() => window.location.reload(true)}>Play Again</div>
                </div>
                )
        }
            
        </div>
    )
}
