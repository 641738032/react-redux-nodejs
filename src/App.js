import React, { Component } from 'react';
import {connect} from "react-redux";
import {addGun, removeGun, addGunAsync } from "./index.redux.js";
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile'

class App extends Component {
  constructor(props){
    super(props);
  }
  render() { 
    console.log("11111",this.props.counter);
    
    return (
      <div className="App">
        <h1>现在有机枪{this.props.counter}把</h1>
        <Button type="primary" onClick={()=>this.props.addGun()}>申请武器</Button>
        <Button type="primary" onClick={()=>this.props.removeGun()} style={{ marginTop: 16 }}>上交武器</Button>
        <Button type="primary" onClick={()=>this.props.addGunAsync()} style={{ marginTop: 16 }}>拖两天再给</Button>
      </div>
    );
  }
}

App = connect(
  // 你要state什么属性放到props里
  state=>({counter:state.counter}),
  // 你要什么方法，放到props里，会自动dispatch
  {addGun, removeGun, addGunAsync}
  )(App);
export default App;
 