import React from 'react';
import TransactionList from './TransactionList';
import AddAccountForm from './AddAccountForm';
import Button from './Button';

class Accounts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAddAccountForm: false,
      sortBy: 'all',
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
    console.log(this.state.sortBy);
    return (
      <div><h1>Accounts</h1>
        <div className='form-group'>
          <label for='sort'>Select Account</label>
          <select onChange={this.handleSortBy}>
            <option value=''>All Accounts</option>
            <option value='checking'>Checking ($2,300.00)</option>
            <option value='savings'>Savings ($1,245.10)</option>
            <option value='credit'>Credit Card (-$445.22)</option>
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
        />
      </div>
    );
  }
}

export default Accounts;