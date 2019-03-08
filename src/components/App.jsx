import React from 'react';
import Header from './Header';
import Budget from './Budget';
import Accounts from './Accounts';
import Homepage from './Homepage';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import './assets/styles/styles.css';
import { firebaseConfig } from '../../firebaseConfig';
import Firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

const Provider = new firebase.auth.GoogleAuthProvider();
const Auth = firebase.auth();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      accounts: {},
      transactions: {},
      categories: {}
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getAccounts = this.getAccounts.bind(this);
    this.getTransactions = this.getTransactions.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        this.getAccounts();
        this.getTransactions();
        this.getCategories();
      }
    });
  }

  logout() {
    Auth.signOut().then(() => {
      this.setState({ user: null });
    });
  }

  login() {
    Auth.signInWithPopup(Provider).then((result) => {
      const user = result.user;
      this.setState({ user });
    });
  }

  getAccounts(){
    let newState;
    let userAccounts = firebase.database().ref('Accounts/' + this.state.user.uid);
    userAccounts.on('value', (snap) => {
      newState = Object.assign({}, snap.val());
      this.setState({ accounts: newState });
    });
  }

  getTransactions(){
    let newState;
    let userTransactions = firebase.database().ref('Transactions/' + this.state.user.uid);
    userTransactions.on('value', (snap) => {
      newState = Object.assign({}, snap.val());
      this.setState({ transactions: newState });
    });
  }

  getCategories(){
    let newState;
    let userCategories = firebase.database().ref('Categories/' + this.state.user.uid);
    userCategories.on('value', (snap) => {
      newState = Object.assign({}, snap.val());
      this.setState({ categories: newState });
    });
  }

  render(){
    return (
      <div>
        <Header
          user={this.state.user}
          login={this.login}
          logout={this.logout}
          accounts={this.state.accounts}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/budget' render={()=><Budget
            user={this.state.user}
            categories={this.state.categories}/>}  />
          <Route path='/accounts' render={()=><Accounts
            user={this.state.user}
            accounts={this.state.accounts}
            transactions={this.state.transactions}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
