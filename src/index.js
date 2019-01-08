import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import { counter, addGun, removeGun, addGunAsync } from "./index.redux.js";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom"
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : ()=>{}
))
function Erying () {
    return (<h2>二营</h2>)
}
function QiBingLian () {
    return (<h2>骑兵连</h2>)
}
class Test extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render () {
        console.log(this.props.match.params.location);
        return (
            <h2>测试组件 {this.props.match.params.location}</h2>
        )
    }
}
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
                <ul>
                    <li>
                        <Link to="/yiying">一营</Link>
                    </li>
                    <li>
                        <Link to="/erying">二营</Link>
                    </li>
                    <li>
                        <Link to="/qibinglian">骑兵连</Link>
                    </li>
                </ul>
                <Switch>
                    {/* 只渲染匹配的第一个路由 */}
                    <Route path="/yiying"  exact component={App}/>
                    <Route path="/erying" exact component={Erying}/>
                    <Route path="/qibinglian" exact component={QiBingLian}/>
                    <Route path="/:location"  component={Test}/>
                </Switch>
                {/* <Redirect to="/"></Redirect> */}
            </div>
        </BrowserRouter>
        {/* <App /> */}
    </Provider>
    ), 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
