import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import { counter, addGun, removeGun, addGunAsync } from "./index.redux.js";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link} from "react-router-dom"
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
ReactDOM.render(
    (
    // Provider 放在最外层 传入store
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">一营</Link>
                    </li>
                    <li>
                        <Link to="/erying">二营</Link>
                    </li>
                    <li>
                        <Link to="/qibinglian">骑兵连</Link>
                    </li>
                </ul>
                <Route path="/"  exact component={App}/>
                <Route path="/erying" component={Erying}/>
                <Route path="/qibinglian" component={QiBingLian}/>
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
