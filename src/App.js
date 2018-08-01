import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Mylist from './components/Mylist';
import Recommendations from './components/Recommendations';
import * as actions from './actions';

class App extends Component {
  componentDidMount = () => {
   this.props.getInitalData();
  }
  render() {
    return (
      <div className="App">
        <img className="logo" src ="/Netflix_logo_1.png"/>
        <h2>My List</h2>
        <Mylist mylist={this.props.mylist} removeItem={this.props.removeItem}/>
        <h2>Recommendations</h2>
        <Recommendations recommendations={this.props.recommendations} addItem={this.props.addItem}/>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  // console.log("state: "+state)
  return{
    mylist: state.mylist,
    recommendations: state.recommendations,
  }
}

function mapDispatchToProps(dispatch){
  return({
    getInitalData: () => {dispatch(actions.getInitalData())},
    removeItem: (id)=>{dispatch(actions.removeItem(id))},
    addItem: (id)=>{dispatch(actions.addItem(id))},
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
