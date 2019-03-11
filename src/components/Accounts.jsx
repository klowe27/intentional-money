import React from 'react';
import AccountList from './AccountList';
import TransactionList from './TransactionList';
import AddAccountForm from './AddAccountForm';
import PropTypes from 'prop-types';
import Button from './Button';
import Firebase from 'firebase';

class Accounts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAddAccountForm: false
    };
    this.toggleAccountForm = this.toggleAccountForm.bind(this);
  }

  toggleAccountForm(){
    this.setState({showAddAccountForm: !this.state.showAddAccountForm});
  }

  render() {
    return (
      <div className='container'>
        <h1>Accounts</h1>
        <AccountList
          accounts={this.props.accounts}
          transactions={this.props.transactions}
          user={this.props.user}
        />
        <Button
          action={this.toggleAccountForm}
          name='+ account'
        />
        <AddAccountForm
          showAddAccountForm={this.state.showAddAccountForm}
          toggleAccountForm={this.toggleAccountForm}
          user={this.props.user}
        />
        <h2>Transactions</h2>
        <TransactionList
          user={this.props.user}
          transactions={this.props.transactions}
        />
      </div>

    );
  }
}

Accounts.propTypes = {
  user: PropTypes.object,
  accounts: PropTypes.object,
  transactions: PropTypes.object
};

export default Accounts;
