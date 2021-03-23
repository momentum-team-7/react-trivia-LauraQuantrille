import { useState, useEffect } from 'react'
import axios from 'axios'
// import './App.css';

function App () {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    console.log('categories runs', categories)
    axios.get('https://opentdb.com/api.php?amount=10').then((response) => {
      setCategories(response.data.results)
    })
  }, [])
  console.log('RENDERING:', categories)

  return (
    <div className='App'>
      <h1>Category is...</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category.category}</li>
        ))}
      </ul>

    </div>
  )
}

export default App
