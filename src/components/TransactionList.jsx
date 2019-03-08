import React from 'react';
import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types';
import Firebase from 'firebase';

class TransactionList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      transactions: {}
    };
    this.getAccountNameByKey = this.getAccountNameByKey.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ transactions: nextProps.transactions});
  }

  getAccountNameByKey(key){
    let accountName = 'test';
    let account =  firebase.database().ref('Accounts/' + this.props.user.uid + '/' + key);
    account.on('value', (snap) => {
      accountName = snap.val().name;
    });
    return accountName;
  }

  render() {
    return(
      <div>
        {Object.keys(this.state.transactions).map(transactiontId =>
          <TransactionItem
            date={this.state.transactions[transactiontId].transactionDate}
            vendor={this.state.transactions[transactiontId].vendor}
            amount={this.state.transactions[transactiontId].amount}
            category={this.state.transactions[transactiontId].category}
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
