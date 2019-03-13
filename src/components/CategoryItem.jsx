import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/CategoryItem.css';
import NumberFormat from 'react-number-format';
import Trash from './assets/images/trash.svg';
import Pen from './assets/images/pen.svg';

function CategoryItem({name, budget, activity, id, user, selectCategory, selectedMonth }) {

  function handleRemoveCategory(){
    let category = firebase.database().ref('Categories/' + user.uid + '/' + id);
    category.remove();
    let budgetCategory = firebase.database().ref('Budget/' + selectedMonth + '/' + user.uid + '/' + id);
    budgetCategory.remove();
  }

  function handleSelectCategory(){
    selectCategory(id);
  }

  function getCategoryNameByKey(key){
    let categoryName;
    let category =  firebase.database().ref('Categories/' + user.uid + '/' + key);
    category.on('value', (snap) => {
      (snap.val() !== null) ? categoryName = snap.val().name : categoryName = 'Deleted';
    });
    return categoryName;
  }

  return(
    <div>
      <div className='categoryRow'>
        <div>{getCategoryNameByKey(name)}</div>
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
  name: PropTypes.string,
  budget: PropTypes.number,
  activity: PropTypes.number,
  id: PropTypes.string,
  user: PropTypes.object,
  selectCategory: PropTypes.func,
  selectedMonth: PropTypes.string
};

export default CategoryItem;
