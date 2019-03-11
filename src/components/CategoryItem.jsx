import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/CategoryItem.css';
import NumberFormat from 'react-number-format';
import Trash from './assets/images/trash.svg';
import Pen from './assets/images/pen.svg';

function CategoryItem({name, budget, activity, id, user, selectCategory}) {

  function handleRemoveCategory(){
    let category =  firebase.database().ref('Categories/' + user.uid + '/' + id);
    category.remove();
  }

  function handleSelectCategory(){
    selectCategory(id);
  }

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
          {(budget+activity) >= 0 ? (<span className='green'>
            <NumberFormat
              value={budget+activity}
              displayType={'text'}
              thousandSeparator={true}
              decimalScale={2}
              fixedDecimalScale={true}
              prefix={'$'} />
          </span> ) :
            (<span className='red'>
              <NumberFormat
                value={budget+activity}
                displayType={'text'}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={'$'} />
            </span>)}
        </div>
        <div><img src={Pen} onClick={() => { handleSelectCategory(); }} className='icon penIcon'/></div>
        <div><img src={Trash} onClick={() => { handleRemoveCategory(); }} className='icon trashIcon'/></div>
      </div>
      <hr/>
    </div>
  );
}

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired,
  activity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  user: PropTypes.object,
  selectCategory: PropTypes.func
};

export default CategoryItem;
