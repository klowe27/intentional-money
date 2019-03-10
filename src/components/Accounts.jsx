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
      accounts: {},
      transactions: {},
      showAddAccountForm: false
    };
    this.toggleAccountForm = this.toggleAccountForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ accounts: nextProps.accounts});
    this.setState({ transactions: nextProps.transactions });
  }

  toggleAccountForm(){
    this.setState({showAddAccountForm: !this.state.showAddAccountForm});
  }

  render() {
    return (
      <div className='container'>
        <h1>Accounts</h1>
        <AccountList
          accounts={this.state.accounts}
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
          transactions={this.state.transactions}/>
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
