import React from 'react';
import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types';
import Firebase from 'firebase';
import './assets/styles/TransactionItem.css';

class TransactionList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      transactions: {}
    };
    this.getAccountNameByKey = this.getAccountNameByKey.bind(this);
    this.getCategoryNameByKey = this.getCategoryNameByKey.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ transactions: nextProps.transactions});
  }

  getAccountNameByKey(key){
    let accountName;
    let account =  firebase.database().ref('Accounts/' + this.props.user.uid + '/' + key);
    account.on('value', (snap) => {
      accountName = snap.val().name;
    });
    return accountName;
  }

  getCategoryNameByKey(key){
    let categoryName;
    let category =  firebase.database().ref('Categories/' + this.props.user.uid + '/' + key);
    category.on('value', (snap) => {
      categoryName = snap.val().name;
    });
    return categoryName;
  }

  render() {
    return(
      <div>
        <div className='transactionRow headerRow'>
          <div>Date</div>
          <div>Vendor</div>
          <div>Category</div>
          <div>Account</div>
          <div>Amount</div>
          <div>Cleared</div>
          <div></div>
          <div></div>
        </div>
        {Object.keys(this.state.transactions).map(transactiontId =>
          <TransactionItem
            date={this.state.transactions[transactiontId].transactionDate}
            vendor={this.state.transactions[transactiontId].vendor}
            amount={this.state.transactions[transactiontId].amount}
            category={this.getCategoryNameByKey(this.state.transactions[transactiontId].category)}
            account={this.getAccountNameByKey(this.state.transactions[transactiontId].account)}
            cleared={this.state.transactions[transactiontId].cleared}
            key={transactiontId}
            id={transactiontId}
            user={this.props.user}/>
        )}
      </div>
    );
  }
}

TransactionList.propTypes = {
  user: PropTypes.object,
  transactions: PropTypes.object
};

export default TransactionList;
