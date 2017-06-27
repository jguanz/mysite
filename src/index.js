import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import App from './App';
import Splash from './components/Splash';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route
            component={App}
            path="/">

        </Route>
        <Route
            component={Splash}
            path="/Home">

        </Route>
    </Router>,
    document.getElementById('root')
);
