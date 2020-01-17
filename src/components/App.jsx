import React from 'react';
import Header from './Header';
import Budget from './Budget';
import Accounts from './Accounts';
import Homepage from './Homepage';
import About from './About';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import './assets/styles/styles.css';
import { firebaseConfig } from '../../firebaseConfig';
import firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

const Provider = new firebase.auth.GoogleAuthProvider();
const Auth = firebase.auth();
const db = firebase.database();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      accounts: {},
      transactions: {},
      categories: {},
      selectedMonth: '2019-03'
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getAccounts = this.getAccounts.bind(this);
    this.getTransactions = this.getTransactions.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.selectMonth = this.selectMonth.bind(this);
    this.updateUserInformation = this.updateUserInformation.bind(this);
  }

  componentDidMount() {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user },
          () => {
            this.updateUserInformation();
          });
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

  updateUserInformation() {
    this.getAccounts();
    this.getTransactions();
    this.getCategories();
  }

  getAccounts(){
    let newState;
    let userAccounts = db.ref('Accounts/' + this.state.user.uid);
    userAccounts.on('value', (snap) => {
      newState = Object.assign({}, snap.val());
      this.setState({ accounts: newState });
    });
  }

  getTransactions(){
    let newState;
    let userTransactions = db.ref('Transactions/' + this.state.user.uid);
    userTransactions.on('value', (snap) => {
      newState = Object.assign({}, snap.val());
      this.setState({ transactions: newState });
    });
  }

  getCategories(){
    let newState;
    let userCategories = db.ref('Categories/' + this.state.user.uid);
    let monthBudget = db.ref('Budget/' + this.state.selectedMonth + '/' + this.state.user.uid);
    monthBudget.on('value', (snap) => {
      if(!snap.hasChildren()) {
        userCategories.on('value', (snap) => {
          let categories = Object.keys(snap.val());
          for (let i = 0; i < categories.length; i++) {
            let budgetCategory = db.ref('Budget/' + this.state.selectedMonth + '/' + this.state.user.uid + '/' + categories[i]);
            budgetCategory.set({
              budget: 0
            });
          }
          monthBudget.on('value', (snap) => {
            newState = Object.assign({}, snap.val());
            this.setState({ categories: newState });
          });
        });
      } else {
        monthBudget.on('value', (snap) => {
          newState = Object.assign({}, snap.val());
          this.setState({ categories: newState });
        });
      }
    });
  }

  selectMonth(month){
    this.setState({
      selectedMonth: month
    }, () => {
      this.getCategories();
    });
  }

  render(){
    return (
      <div>
        <Header
          user={this.state.user}
          login={this.login}
          logout={this.logout}
          accounts={this.state.accounts}
          categories={this.state.categories}
        />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/budget' render={()=><Budget
            categories={this.state.categories}
            transactions={this.state.transactions}
            user={this.state.user}
            selectMonth={this.selectMonth}
            selectedMonth={this.state.selectedMonth}
          />}/>
          <Route path='/accounts' render={()=><Accounts
            user={this.state.user}
            accounts={this.state.accounts}
            transactions={this.state.transactions}
            categories={this.state.categories}
          />} />
          <Route path='/about' render={()=><About />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
