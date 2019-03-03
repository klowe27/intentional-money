import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/CategoryItem.css';
import NumberFormat from 'react-number-format';

function CategoryItem({name, budget, activity, remaining}) {
  return(
    <div>
      <div className='categoryRow'>
        <div>{name}</div>
        <NumberFormat 
          value={budget} 
          displayType={'text'} 
          thousandSeparator={true} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'$'} />
        <NumberFormat 
          value={activity} 
          displayType={'text'} 
          thousandSeparator={true} 
          decimalScale={2}
          fixedDecimalScale={true}
          prefix={'$'} />
        <div>
          <span className='green'>
            <NumberFormat 
              value={remaining} 
              displayType={'text'} 
              thousandSeparator={true} 
              decimalScale={2}
              fixedDecimalScale={true}
              prefix={'$'} />
          </span>
        </div>
      </div>
      <hr/>
    </div>
  );
}

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
  activity: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
};

export default CategoryItem;