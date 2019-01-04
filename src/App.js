import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile'
import { addGUN } from './index.redux.js';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const store = this.props.store;
    const num = store.getState();
    return (
      <div className="App">
        <h1>现在有机枪{num}把</h1>
        <Button type="primary" onClick={()=>store.dispatch(addGUN())}>申请武器</Button>
      </div>
    );
  }
}

export default App;
