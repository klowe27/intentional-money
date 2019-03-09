import React from 'react';
import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';

function CategoryList({ categories }){
  return(
    <div>
      {Object.keys(categories).map(categoryId =>
        <CategoryItem
          name={categories[categoryId].name}
          budget={categories[categoryId].budget}
          activity={categories[categoryId].activity}
          remaining={parseInt(categories[categoryId].budget) + parseInt(categories[categoryId].activity)}
          key={categoryId}/>
      )}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.object
};

export default CategoryList;
