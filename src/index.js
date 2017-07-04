import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import App from './App';
import Splash from './components/Splash';
import About from './components/About';
import Projects from './components/Projects';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route
            component={App}
            path="/">
            {/*<Route component={Splash} path="/home" />*/}
            {/*<Route component={About} path="/about" />*/}
            {/*<Route component={Projects} path="/projects" />*/}
        </Route>
    </Router>,
    document.getElementById('root')
);
