import { useState, useEffect } from 'react'
import axios from 'axios'
import CategoryList from './components/CategoryList'
import CategoryQuestions from './components/CategoryQuestions'

import './App.css';

function App () {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  useEffect(() => {
    console.log('categories runs', categories)
    axios.get('https://opentdb.com/api_category.php').then((response) => {
      setCategories(response.data.trivia_categories)
    })
  }, [])
  console.log('RENDERING:', categories)

  return (
    <div>
      <h1>Trivia Game</h1>
      {selectedCategory ? (
        <CategoryQuestions 
        category={selectedCategory} 
        handleGoBack={() => setSelectedCategory(null)}
          />
      ) : (
        <CategoryList
          categories={categories}
          setSelectedCategory={setSelectedCategory}

        />
      )}
    </div>

  )
}

export default App

