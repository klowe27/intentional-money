import React from 'react';
import Button from './Button'
import { Link } from 'react-router-dom';
import './assets/styles/Header.css';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAddTransactionForm: false,
      showMenu: false
    }
    this.toggleAddTransactionForm = this.toggleAddTransactionForm.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  toggleMenu(){
    this.setState({showMenu: !this.state.showMenu})
  }
  
  toggleAddTransactionForm(){
    this.setState({showAddTransactionForm: !this.state.showAddTransactionForm})
  }
  
  render() {
    return (
      <div className='heading'>
        <div onClick={this.toggleMenu} className='menuTabBox'>
          <div className='menuTab tab1'></div>
          <div className='menuTab tab2'></div>
        </div>
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
