import React from 'react';
import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';
import { categoryListData } from './assets/sample-content.js';
import { v4 } from 'uuid';

function CategoryList({ categories }){
  return(
    <div>
      {Object.keys(categories).map(categoryId =>
        <CategoryItem
          name={categories[categoryId].name}
          budget={categories[categoryId].budget}
          activity={categories[categoryId].activity}
          remaining={categories[categoryId].budget - categories[categoryId].activity}
          key={v4()}/>
      )}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.object
}

export default CategoryList;
