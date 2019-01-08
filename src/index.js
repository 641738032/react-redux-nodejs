import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import { counter, addGun, removeGun, addGunAsync } from "./index.redux.js";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";

const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : ()=>{}
))

ReactDOM.render(
    (
    // Provider 放在最外层 传入store
    <Provider store={store}>
        <App />
    </Provider>
    ), 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
