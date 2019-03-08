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
      accounts: {},
      showAddAccountForm: false,
      sortBy: 'all'
    };
    this.toggleAccountForm = this.toggleAccountForm.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ accounts: nextProps.accounts });
  }

  toggleAccountForm(){
    this.setState({showAddAccountForm: !this.state.showAddAccountForm});
  }

  handleSortBy(e){
    this.setState({sortBy: e.target.value});
  }

  render() {
    console.log(this.state.accounts);
    return (
      <div className='container'>
        <h1>Accounts</h1>
        <div className='form-group dropdown'>
          <select onChange={this.handleSortBy}>
            <option value='all'>All Accounts</option>
            {(this.state.accounts !== {}) ? Object.keys(this.state.accounts).map(accountId=>{
              <option value=`{accountId}` key=`{accountId}`>{this.state.accounts[accountId].name} ({this.state.accounts[accountId].balance})</option>
            }) : null}
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
  accounts: PropTypes.object
}

export default Accounts;
