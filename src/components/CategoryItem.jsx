import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/CategoryItem.css';
import NumberFormat from 'react-number-format';
import Trash from './assets/images/trash.svg';
import Pen from './assets/images/pen.svg';

function CategoryItem({name, budget, activity, remaining, id, user}) {

  function handleRemoveCategory(id){
    let category =  firebase.database().ref('Categories/' + user.uid + '/' + id);
    category.remove();
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
          {remaining >= 0 ? (<span className='green'>
            <NumberFormat
              value={remaining}
              displayType={'text'}
              thousandSeparator={true}
              decimalScale={2}
              fixedDecimalScale={true}
              prefix={'$'} />
          </span> ) :
            (<span className='red'>
              <NumberFormat
                value={remaining}
                displayType={'text'}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={'$'} />
            </span>)}
        </div>
        <div><img src={Pen} className='icon penIcon'/></div>
        <div><img src={Trash} onClick={() => { handleRemoveCategory(id); }} className='icon trashIcon'/></div>
      </div>
      <hr/>
    </div>
  );
}

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  user: PropTypes.object
};

export default CategoryItem;
