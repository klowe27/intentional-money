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
      user: null
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user
        });
      }
    });
  }

  logout() {
    Auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  login() {
    Auth.signInWithPopup(Provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  render(){
    console.log(this.state.user);
    return (
      <div>
        <Header
          user={this.state.user}
          login={this.login}
          logout={this.logout}
          />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/budget' component={Budget} />
          <Route path='/accounts' component={Accounts} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
