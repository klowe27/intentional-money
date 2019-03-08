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
            date={this.props.transactions[transactiontId].transactionDate}
            vendor={this.props.transactions[transactiontId].vendor}
            amount={this.props.transactions[transactiontId].amount}
            category={this.props.transactions[transactiontId].category}
            account={this.getAccountNameByKey(this.props.transactions[transactiontId].account)}
            cleared={this.props.transactions[transactiontId].cleared}
            key={transactiontId}/>
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
