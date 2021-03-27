import React, { useState } from 'react'
import he from 'he'
import Answer from './Answers'
import '../App.css'

export default function Question ({ question, incorrect_answers, correct_answer }) {
    const [correct, setCorrect] = useState(false)
  return (
        <div className={correct ? 'greenCorrect' : 'noChoice'}>
            <li>{he.decode(question)}
            <div className='answer-wrapper'>
              <dl>
                <dt>Choose Your Answer</dt>
                <Answer
                    correct_answer={correct_answer}
                    incorrect_answers={incorrect_answers}
                    setCorrect={setCorrect}
                />
              </dl>
            </div>
            </li>
        </div>
  )
}
