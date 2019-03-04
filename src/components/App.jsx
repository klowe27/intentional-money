import React from 'react';
import Header from './Header';
import Budget from './Budget';
import Accounts from './Accounts';
import Homepage from './Homepage';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import './assets/styles/styles.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
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
