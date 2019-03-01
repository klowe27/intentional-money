import React from 'react';
import CategoryItem from './CategoryItem';
import { categoryListData } from './assets/sample-content.js';
import { v4 } from 'uuid';

function CategoryList(){
  return(
    <div>
      {categoryListData.map((category) =>
        <CategoryItem
          name={category.name}
          budget={category.budget}
          activity={category.activity}
          remaining={category.activity}
          key={v4()}/>
      )}
    </div>
  )
}

export default CategoryList;