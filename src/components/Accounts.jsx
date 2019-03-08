import React from 'react';
import TransactionList from './TransactionList';
import AddAccountForm from './AddAccountForm';
import PropTypes from 'prop-types';
import Button from './Button';
import Firebase from 'firebase';

class Accounts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAddAccountForm: false,
      sortBy: 'all'
    };
    this.toggleAccountForm = this.toggleAccountForm.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this);
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
            {this.props.accounts.map(account=>{
              <option value={account.key}>{account.name} ({account.balance})</option>
            })}
          </select>
        </div>
        <TransactionList/>
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
  accounts: PropTypes.array
}

export default Accounts;
