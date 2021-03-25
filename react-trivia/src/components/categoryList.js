export default function CategoryList({ categories, setSelectedCategory }) {
  return (
    <div className='App'>
      <h1>Category is...</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button
              className='pa0 bw0 bg-white blue pointer underline-hover'
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
