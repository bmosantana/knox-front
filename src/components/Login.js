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
import './css/login.css'
import { request } from 'https';
import Logo from '../imagens/logo.png'


const enderecoApi = "https://knoxapp180120.herokuapp.com/";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: {
                email: '',
                senha: '',
                cpf: ''
            },
            showPassword: false,
            errors: {
                email: '',
                senha: '',
                cpf: ''
            }
        };
    }



    handleChangeLogin = (event) => {
        let email = this.state.login;
        email.email = event.target.value;
        this.setState({ login: email });

        let errors = this.state.errors;
        errors.email = ""
        this.setState({ errors: errors });

    };

    handleChangeSenha = (event) => {
        let senha = this.state.login;
        senha.senha = event.target.value;
        this.setState({ login: senha });

        let errors = this.state.errors;
        errors.senha = ""
        this.setState({ errors: errors });

    };

    handleChangeCpf = (event) => {
        let cpf = this.state.login;
        cpf.cpf = event.target.value;
        this.setState({ login: cpf });

        let errors = this.state.errors;
        errors.cpf = ""
        this.setState({ errors: errors });

    };

    handleChange = props => event => {
        this.setState({ [props]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };


    handleSubmit = (event) => {
        console.log('ola')
        event.preventDefault();
        let valid = true;
        let errors = this.state.errors;
        let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!emailRegex.test(this.state.login.email) || this.state.login.email == null) {
            errors.email = "E-mail ou Senha inválidos."
            valid = false;
        }

        if (this.state.login.senha == null || this.state.login.senha.length < 6 || this.state.login.senha.length > 20) {
            errors.senha = "E-mail ou Senha inválidos."
            valid = false;
        }


        if (this.state.login.cpf == null || this.state.login.cpf.length != 11 ||
            this.state.login.cpf.length > 11 || this.state.login.cpf.length < 11 || this.state.login.cpf.length == 0) {
            errors.cpf = "CPF deve conter 11 digitos e ser um CPF válido!"
            valid = false;

            console.log("CPF Inválido");
        }

        if (valid === true) {
            this.insertLogin();
        } else {
            console.log(this.state.errors);
            return alert("Verifique os dados.");
        }
    }


    insertLogin = (event) => {

        fetch(enderecoApi + "login/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": this.state.login.email,
                "senha": this.state.login.senha,

            })
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log("Login realizado com sucesso!")

                    localStorage.setItem("email", JSON.stringify(this.state.login.email));
                    localStorage.setItem("senha", JSON.stringify(this.state.login.senha));
                    localStorage.setItem("cpf", JSON.stringify(this.state.login.cpf));

                    window.location.href = "/dashboard"
                } else {
                    alert("Verifique se os dados estão corretos entes de finalizar o seu cadastro.")
                }

                return console.log(response);
            });

        console.log(this.state.login.email + " --> " + this.state.login.senha)
    }

    render() {
        return (
            <div className="login">
                <div className="center-form">
                    <img src={Logo} id="logo"></img>
                    <FormControl>
                        <TextField
                            id="cpf"
                            label="CPF"
                            error={this.state.errors.cpf !== '' ? true : false}
                            helperText={this.state.errors.cpf !== '' ? this.state.errors.cpf : ''}
                            value={this.state.login.cpf}
                            onChange={e => { this.handleChangeCpf(e) }}
                            margin="normal"
                        />

                        <TextField
                            id="email"
                            label="Usuário"
                            error={this.state.errors.email !== '' ? true : false}
                            helperText={this.state.errors.email !== '' ? this.state.errors.email : ''}
                            value={this.state.login.email}
                            onChange={e => { this.handleChangeLogin(e) }}
                            margin="normal"
                        />

                        <FormControl>
                            <InputLabel htmlFor="senha">Senha</InputLabel>
                            <Input
                                id="senha"
                                error={this.state.errors.senha !== '' ? true : false}
                                helperText={this.state.errors.senha !== '' ? this.state.errors.senha : ''}
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.login.senha}
                                onChange={e => { this.handleChangeSenha(e) }}
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
                        <Button variant="contained"
                            color="primary"
                            className="btn"
                            type="submit"
                            value="Submit"
                            onClick={this.handleSubmit}>
                            Entrar
                            </Button>
                        {/* <div className="links">
                            <label><a href="#">Esqueci minha senha</a></label>
                        </div> */}
                    </FormControl>
                </div>
            </div>
        );
    }
}

export default Login;