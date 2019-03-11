import React from 'react';
import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';

function CategoryList({ categories, transactions, user }){

  function calculateActivity(categoryId) {
    let activity = 0;
    Object.keys(transactions).map( transactionId => {
      let transaction = transactions[transactionId];
      if (categoryId === transaction.category) {
        (transaction.type === 'expense') ? activity -= parseFloat(transaction.amount) : activity += parseFloat(transaction.amount);
      }
    });
    return activity;
  }

  if (Object.keys(categories).length === 0){
    return(
      <div>You have no categories.</div>
    );
  } else {
    return(
      <div>
        {Object.keys(categories).map(categoryId =>
          <CategoryItem
            name={categories[categoryId].name}
            budget={parseFloat(categories[categoryId].budget)}
            activity={calculateActivity(categoryId)}
            user={user}
            id={categoryId}
            key={categoryId}
          />
        )}
      </div>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.object,
  transactions: PropTypes.object,
  user: PropTypes.object
};

export default CategoryList;
