import React from 'react'
import he from 'he'
import Answer from './Answers'

export default function Question ({ question, incorrect_answers, correct_answer }) {
  return (
        <div>
            <li key={index}>{he.decode(question)}
            <div className='answer-wrapper'>
              <dl>
                <dt>Choose Your Answer</dt>
                <Answer
                    correct_answer={correct_answer}
                    incorrect_answers={incorrect_answers}
                />
                {/* <button><dd>{he.decode(correct_answer)}</dd></button>
                {incorrect_answers.map((incorrect_answer, index) =>
                  (
                    <button key={index}><dd>{he.decode(incorrect_answer)}</dd></button>
                  ))} */}
              </dl>
            </div>
          </li>
        </div>
  )
}
