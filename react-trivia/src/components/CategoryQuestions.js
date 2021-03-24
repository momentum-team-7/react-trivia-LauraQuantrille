import { useState, useEffect } from 'react'
import axios from 'axios'

export default function CategoryQuestions({ category, handleGoBack }) {
  const [categoryQuestions, setCategoryQuestions] = useState([])
  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=${category.id}`)
      .then((response) => {
        console.log(response.data.results)
        const data = response.data.results.map((dataByCategory) => ({
          category: dataByCategory.category,
          type: dataByCategory.category,
          difficulty: dataByCategory.difficulty,
          incorrect_answers: dataByCategory.incorrect_answers,
          question: dataByCategory.question,
          correct_answer: dataByCategory.correct_answer,
          id: dataByCategory.id,
        }))
        setCategoryQuestions(data)
      })
  }, [category])

  return (
    <div>
      <h3>{category.name} Questions</h3>
      <button
        className='pa0 bw0 bg-white blue pointer underline-hover'
        onClick={handleGoBack}>
        Back to all categories
      </button>
      <ul>
        {categoryQuestions.map((dataByCategory, index) =>
          <li key={index}>{dataByCategory.question}
            <dl>
                <dt>Choose Your Answer</dt>
                <dd>{dataByCategory.correct_answer}</dd>
                <dd>{dataByCategory.incorrect_answers.[0]}</dd>
                <dd>{dataByCategory.incorrect_answers.[1]}</dd>
                <dd>{dataByCategory.incorrect_answers.[2]}</dd>
            
            </dl>
          </li>
        )}
      </ul>
    </div>
 )
}

// why is it that when we try to console.log(response.data.results.question) it breaks? it says question is undefined - response.data.results returns response undefined