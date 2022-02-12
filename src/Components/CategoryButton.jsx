import React from 'react'

const CategoryButton = ({button, filterProducts, selectedCategory}) => {
  return (
    <>
        <button onClick={() => filterProducts(`${button.category}`, `${button.name}`)} className={selectedCategory === `${button.name}` ? "selectedCategory": ""}>{button.name}</button>
    </>
  )
}

export default CategoryButton