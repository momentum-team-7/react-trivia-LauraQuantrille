import { useState, useEffect } from 'react'
import axios from 'axios'
import CategoryList from './components/CategoryList'
import 'tachyons'
// import './App.css';

function App () {
  const [categories, setCategories] = useState([])
  const [SelectedCategory, setSelectedCategory] = useState(null)
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
      <CategoryList 
        categories={categories}
        setSelectedCategory={setSelectedCategory}

       />
    </div>

    )
}

export default App
