import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {Router, Route, Switch} from 'react-router';
import createbrowserhistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
import Login from './components/Login/Login.js';
import Cadastro from './components/Cadastro.js';

const history= createbrowserhistory();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/cadastrar" component={Cadastro}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
    , document.getElementById('root'));

serviceWorker.unregister();
