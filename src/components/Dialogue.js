import React from 'react'

export default function Dialogue({index, done, solutions, guessesObjects}) {
    if (done){
        return (
            <div className='dialogue'>
            {
                true && (
                    <div>
                    <h1>{done?"Congratulations, You got it!":"Sorry, better luck next time"}</h1>
                    
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
        return (
            <div className='dialogue'>
            {
                true && (
                    <div>
                    <h1>{done?"Congratulations, You got it!":"Sorry, better luck next time"}</h1>
                    
                    <h5>Solutions for this game were:</h5>
                    <h3>{solutions['solutions'][0]}, {solutions['solutions'][1]}, {solutions['solutions'][2]}, {solutions['solutions'][3]}, {solutions['solutions'][4]}, {solutions['solutions'][5]}</h3>
                    <div className="play" onClick={() => window.location.reload(true)}>Play Again</div>
                    </div>
                    )
                
            }
                
            </div>
        )
    
}
