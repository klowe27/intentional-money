import React from 'react';
import TransactionList from './TransactionList';
import AddAccountForm from './AddAccountForm';
import Button from './Button';

class Accounts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAddAccountForm: false,
    }
    this.toggleAccountForm = this.toggleAccountForm.bind(this);
  }
  
  toggleAccountForm(){
    this.setState({showAddAccountForm: !this.state.showAddAccountForm});
  }
  
  render() {
    return (
      <div><h2>Accounts</h2>
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
    )
  }
}

export default Accounts;