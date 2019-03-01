import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/CategoryItem.css'

function CategoryItem({name, budget, activity, remaining}) {
  return(
    <div>
      <div className='categoryRow'>
        <div>{name}</div>
        <div>{budget}</div>
        <div>{activity}</div>
        <div>{remaining}</div>
      </div>
      <hr/>
    </div>
  )
}

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
  activity: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
};

export default CategoryItem;