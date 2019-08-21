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
import Funcionario from './components/Funcionario.js';
import CadastroCliente from './components/CadastroCliente.js';
import ModalEditarCliente from './components/ModalEditarCliente.js';
import Dashboard from './components/Dashboard.js';

const history= createbrowserhistory();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/cliente" component={Cliente}/>
                <Route path="/cadastroCliente" component={CadastroCliente}/>
                <Route path="/editarcliente" component={ModalEditarCliente}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/funcionario" component={Funcionario}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
    , document.getElementById('root'));

serviceWorker.unregister();
