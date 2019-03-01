import React from 'react';
import Button from './Button';
import MenuTab from './MenuTab';
import Menu from './Menu';
import AddTransactionForm from './AddTransactionForm';
import { Link } from 'react-router-dom';
import './assets/styles/Header.css';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showAddTransactionForm: false,
      showMenu: false
    };
    this.toggleAddTransactionForm = this.toggleAddTransactionForm.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.addTransaction = this.addTransaction.bind(this);
  }
  
  toggleMenu(){
    this.setState({showMenu: !this.state.showMenu});
  }
  
  toggleAddTransactionForm(){
    this.setState({showAddTransactionForm: !this.state.showAddTransactionForm});
  }
  
  addTransaction(){
    this.setState({showAddTransactionForm: !this.state.showAddTransactionForm});
  }
  
  render() {
    return (
      <div className='heading'>
        <MenuTab
          toggleMenu={this.toggleMenu}
          showMenu={this.state.showMenu}
        />
        <Menu
          showMenu={this.state.showMenu}
          toggleMenu={this.toggleMenu}
        />
        <Link to='/'><h1>Intentional Money</h1></Link>
        <div className='addTransactionButton'>
          <Button 
            action={this.toggleAddTransactionForm}
            name="+ transaction"
          />
        </div>
        <AddTransactionForm
          showAddTransactionForm={this.state.showAddTransactionForm}
          toggleAddTransactionForm={this.toggleAddTransactionForm}
        />
      </div>
    );
  }
}

export default Header;
