import React from 'react';
import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';

function CategoryList({ categories, transactions, user, selectCategory, selectedMonth }){

  function calculateActivity(categoryId) {
    let activity = 0;
    Object.keys(transactions).map( transactionId => {
      let transaction = transactions[transactionId];
      let date = transaction.transactionDate;
      if (categoryId === transaction.category && date.slice(0, -3) === selectedMonth) {
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
            name={categoryId}
            budget={parseFloat(categories[categoryId].budget)}
            activity={calculateActivity(categoryId)}
            user={user}
            id={categoryId}
            selectCategory={selectCategory}
            selectedMonth={selectedMonth}
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
  user: PropTypes.object,
  selectCategory: PropTypes.func,
  selectedMonth: PropTypes.string
};

export default CategoryList;
