import React from 'react';
import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';

function CategoryList({ categories, user }){
  return(
    <div>
      {Object.keys(categories).map(categoryId =>
        <CategoryItem
          name={categories[categoryId].name}
          budget={categories[categoryId].budget}
          activity={categories[categoryId].activity}
          remaining={parseFloat(categories[categoryId].budget) + parseFloat(categories[categoryId].activity)}
          user={user}
          id={categoryId}
          key={categoryId}/>
      )}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.object,
  user: PropTypes.object
};

export default CategoryList;
