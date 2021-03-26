import React from 'react'
import he from 'he'
import shuffle from 'lodash/shuffle'

export default function Answer ({correct_answer, incorrect_answers, setCorrect, setIncorrect}) {
    const _ = require('lodash')
    let answers = [
        ...incorrect_answers, correct_answer
    ];
    const shuffledAnswers = _.shuffle(answers)
    return (
        <div>
          {shuffledAnswers.map((answer, index) => { 
              return(
            <>      
            <input value={he.decode(answer)} key={index} id='answers' type='radio' onChange={(event) => console.log(event.target.value)} />
            
            <label for='answers'>{he.decode(answer)}</label>

            </>
            )
            
        })}
        </div>
  )
}

// correct_answer ? setCorrect(true) : setIncorrect(true)
// {/* <button onClick={() => setCorrect(true)}><dd>{he.decode(correct_answer)}</dd></button>
//           {incorrect_answers.map((incorrect_answers, index) =>
//             (
//               <button key={index}><dd>{he.decode(incorrect_answers)}</dd></button>
//           ))} */}
