import { useState, useEffect } from 'react'
import axios from 'axios'
import he from 'he'

export default function Answer ({correct_answer, incorrect_answers}) {
    return (
        <div>
          <button><dd>{he.decode(correct_answer)}</dd></button>
          {incorrect_answers.map((incorrect_answers, index) =>
            (
              <button key={index}><dd>{he.decode(incorrect_answers)}</dd></button>
          ))}
        </div>
    )
}


// return to this when decode is working
// {incorrect_answers.map((incorrect_answers, index) =>
//     (
//       <button key={index}><dd>{incorrect_answers}</dd></button>
//     ))}

// {/* <button><dd>{incorrect_answers[0]}</dd></button>
// <button><dd>{incorrect_answers[1]}</dd></button>
// <button><dd>{incorrect_answers[2]}</dd></button> */}