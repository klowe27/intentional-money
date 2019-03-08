import React from 'react';
import TransactionList from './TransactionList';
import AddAccountForm from './AddAccountForm';
import PropTypes from 'prop-types';
import Button from './Button';
import Firebase from 'firebase';
import NumberFormat from 'react-number-format';

class Accounts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accounts: {},
      transactions: {},
      showAddAccountForm: false,
      sortBy: 'all'
    };
    this.toggleAccountForm = this.toggleAccountForm.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ accounts: nextProps.accounts});
    this.setState({ transactions: nextProps.transactions })
  }

  toggleAccountForm(){
    this.setState({showAddAccountForm: !this.state.showAddAccountForm});
  }

  handleSortBy(e){
    this.setState({sortBy: e.target.value});
  }

  render() {
    return (
      <div className='container'>
        <h1>Accounts</h1>
        <div className='form-group dropdown'>
          <select onChange={this.handleSortBy}>
            <option value='all'>All Accounts</option>
            {Object.keys(this.state.accounts).map(accountId =>
              <option value={accountId} key={accountId}>{this.state.accounts[accountId].name} ({this.state.accounts[accountId].balance})</option>
            )}
          </select>
        </div>
        <TransactionList
          transactions={this.state.transactions}/>
        <Button
          action={this.toggleAccountForm}
          name='+ account'
        />
        <AddAccountForm
          showAddAccountForm={this.state.showAddAccountForm}
          toggleAccountForm={this.toggleAccountForm}
          user={this.props.user}
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
