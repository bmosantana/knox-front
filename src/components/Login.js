import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../css/login.css'

class Login extends Component {
    state = {
        usuario: '',
        senha: '',
        showPassword: false,
    };
    constructor(props) {
        super(props)
    }

    handleChange = props => event => {
        this.setState({ [props]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleLocation = () =>{
        window.location.href = "/cliente"
    }

    render() {
        return (
            <div className="login">
                <div className="center-form">
                    <FormControl >
                        <TextField
                            id="usuario"
                            label="Usuário"
                            value={this.state.usuario}
                            onChange={this.handleChange('usuario')}
                            margin="normal"
                        />
                        <FormControl>
                            <InputLabel htmlFor="senha">Senha</InputLabel>
                            <Input
                                id="senha"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.senha}
                                onChange={this.handleChange('senha')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Mudar visualizacao campo"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button variant="contained" color="primary" className="btn" onClick={this.handleLocation}>
                            Entrar
                        </Button>
                        <div className="links">
                            <label><a href="/cadastrar">Cadastrar</a></label>
                            <label><a href="#">Esqueci minha senha</a></label>
                        </div>
                    </FormControl>
                </div>
            </div>
        );
    }
}

export default Login;