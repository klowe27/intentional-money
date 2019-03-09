import React from 'react';
import CoinList from './CoinList';
import Pig from './Pig';
import HeroHeadline from './HeroHeadline';
import BarList from './BarList';

class Homepage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showPig: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({showPig:false});
    },5600);
  }

  render() {
    if (this.state.showPig) {
      return(
        <div>
          <CoinList/>
          <Pig/>
        </div>
      );
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
