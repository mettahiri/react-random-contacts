import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from  "react-redux";
import store from "./store/store";
import * as serviceWorker from './serviceWorker';
import Main from './Components/Main';
import {BrowserRouter} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css"

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store} >
            <Main />
        </Provider>
    </BrowserRouter>
,

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();