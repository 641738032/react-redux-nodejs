import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducer";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom"
import Auth from "./Auth.jsx"
import Dashboard from "./Dashboard.jsx"

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : ()=>{}
))
console.log(store.getState());

// class Test extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={

//         }
//     }
//     render () {
//         console.log(this.props.match.params.location);
//         return (
//             <h2>测试组件 {this.props.match.params.location}</h2>
//         )
//     }
// }
// 登录
// 没有登录信息 统一跳转login
// 页面 导航+显示+注销
// 一营
// 二营
// 骑兵连
// reudx+router
ReactDOM.render(
    (
        // Provider 放在最外层 传入store
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/login"  exact component={Auth}/>
                        <Route path="/dashboard" exact component={Dashboard}/>
                        <Redirect to="/dashboard"></Redirect>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    ), 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
