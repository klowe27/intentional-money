import React from 'react';
import CoinList from './CoinList';
import Pig from './Pig';
import HeroHeadline from './HeroHeadline';
import BarList from './BarList'

class Homepage extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
      showPig: true,
    }
    this.toggleShowPig = this.toggleShowPig.bind(this);
  }
  
  componentDidMount(){
    const piggy = document.getElementsByClassName('piggy');
    piggy.addEventListener('animationend', this.toggleShowPig(), false);
  }
  
  toggleShowPig(){
    this.setState({showPig: false});
  }
  
  render() {
    if (this.state.showPig) {
      return(
        <div>
          <CoinList/>
          <Pig/>
        </div>
      )
    } else {
      return (
        <div>
          <HeroHeadline/>
          <BarList/>
        </div>
      );
    }
  }
}

export default Homepage;