import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloWorld from './page/HelloWorld';
import Dashboard from './page/Dashboard';
import { Route, BrowserRouter as Router, Link, Switch}from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">HelloWorld</Link>
                </li>
                <li>
                    <Link to="Dashboard">HelloWorld</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={HelloWorld}/>
                <Route path="/Dashboard" component={Dashboard}/>
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(
    routing,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();