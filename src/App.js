import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile'

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const store = this.props.store;
    const num = store.getState();
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    return (
      <div className="App">
        <h1>现在有机枪{num}把</h1>
        <Button type="primary" onClick={()=>store.dispatch(addGun())}>申请武器</Button>
        <Button type="primary" onClick={()=>store.dispatch(removeGun())} style={{ marginTop: 16 }}>上交武器</Button>
      </div>
    );
  }
}

export default App;
