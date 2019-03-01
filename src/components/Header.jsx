import React from 'react';
import Button from './Button'
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAddTransactionForm: false
    }
    this.toggleAddTransactionForm = this.toggleAddTransactionForm.bind(this);
  }
  
  toggleAddTransactionForm(){
    this.setState({showAddTransactionForm: !this.state.showAddTransactionForm})
  }
  
  render() {
    return (
      <div>
        <h1>Intentional Money</h1>
        <Button 
          action={this.toggleAddTransactionForm}
          name="+ transaction"
        />
      </div>
    );
  }
}

export default Header;
