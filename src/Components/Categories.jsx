import React from 'react';
import buttonCategory from '../buttonCategoryData';
import '../Styles/Categories.scss'
import CategoryButton from './CategoryButton';

const Categories = ({ filterProducts, selectedCategory }) => {
  return <div className='categories'>
    <h2><i className="fas fa-bars"></i> Kategoriler</h2>
    <div className='categories__btn__wrapper'>
      {buttonCategory.map((button) => (
        <CategoryButton key={button.category} button={button} filterProducts={filterProducts} selectedCategory={selectedCategory} />
      ))}
    </div>
    <div className='categories__name'>
      <i className="fas fa-location-arrow"></i>
      <p >
        {selectedCategory}
      </p>
    </div>

  </div>;
};

export default Categories;