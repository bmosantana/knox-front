import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Router, Route, Switch} from 'react-router';
import createbrowserhistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
import Login from './components/Login.js';
import Cliente from './components/Cliente.js';
import CadastroCliente from './components/CadastroCliente.js';
import ModalEditarCliente from './components/ModalEditarCliente.js';

const history= createbrowserhistory();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/cliente" component={Cliente}/>
                <Route exact path="/cadastroCliente" component={CadastroCliente}/>
                <Route exact path="/editarcliente" component={ModalEditarCliente}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
    , document.getElementById('root'));

serviceWorker.unregister();
