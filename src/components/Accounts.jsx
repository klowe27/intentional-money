import React from 'react';
import AccountList from './AccountList';
import TransactionList from './TransactionList';
import AddAccountForm from './AddAccountForm';
import UpdateAccountForm from './UpdateAccountForm';
import PropTypes from 'prop-types';
import Button from './Button';
import Firebase from 'firebase';

class Accounts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAddAccountForm: false,
      selectedAccount: null
    };
    this.toggleAccountForm = this.toggleAccountForm.bind(this);
    this.selectAccount = this.selectAccount.bind(this);
  }

  toggleAccountForm(){
    this.setState({showAddAccountForm: !this.state.showAddAccountForm});
  }

  selectAccount(id){
    this.setState({selectedAccount: id});
  }

  render() {
    return (
      <div className='container'>
        <h1>Accounts</h1>
        <AccountList
          accounts={this.props.accounts}
          transactions={this.props.transactions}
          user={this.props.user}
          selectAccount={this.selectAccount}
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
        <UpdateAccountForm
          selectAccount={this.selectAccount}
          selectedAccount={this.state.selectedAccount}
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
