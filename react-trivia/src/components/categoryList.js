export default function CategoryList({ categories, setSelectedCategory }) {
  return (
    <>
      <h1>Category is...</h1>
      <ul className='category-container'>
        {categories.map((category, index) => (
          <li className='category' key={index}>
            <button
              className='category__button'
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
