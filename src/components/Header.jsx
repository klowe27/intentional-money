import React from 'react';
import Button from './Button';
import MenuTab from './MenuTab';
import Menu from './Menu';
import PropTypes from 'prop-types';
import AddTransactionForm from './AddTransactionForm';
import Logo from './assets/images/logo.png';
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
          login={this.props.login}
          logout={this.props.logout}
          user={this.props.user}
        />
        <Link to='/'><span className='logoName'><img src={Logo} className='logo'/>Intentional Money</span></Link>
        <div className='addTransactionButton'>
          <Button
            action={this.toggleAddTransactionForm}
            className='transactionButton'
            name="+ transaction"
          />
        </div>
        <AddTransactionForm
          showAddTransactionForm={this.state.showAddTransactionForm}
          toggleAddTransactionForm={this.toggleAddTransactionForm}
          accounts={this.props.accounts}
          categories={this.props.categories}
          user={this.props.user}
        />
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  categories: PropTypes.object,
  login: PropTypes.func,
  logout: PropTypes.func,
  accounts: PropTypes.object
};


export default Header;
