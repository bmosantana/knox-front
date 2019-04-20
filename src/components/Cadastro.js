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
import '../css/cadastro.css';

class Cadastro extends Component {
    state = {
        nome: '',
        usuario: '',
        senha: '',
        email: '',
        cpf: '',
        rg: '',
        cargo: '',
        telefone: '',
        dataContatacao: '',
        dataNascimento: '',
        oabNum: '',
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

    render() {
        return (
            <div className="cadastro">
                <div className="cad-form">
                    <FormControl >
                        <div className="description">
                            <p id="titulo">Bem-vindo ao Knox!</p>
                            <p id="descricao">O seu tempo de forma inteligente!</p>
                        </div>
                        <TextField
                            className="textField"
                            id="nome"
                            label="Nome"
                            value={this.state.nome}
                            onChange={this.handleChange('nome')}
                            margin="normal"
                        />
                        
                        <TextField
                            className="textField"
                            id="email"
                            label="E-mail"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            margin="normal"
                            type="email"
                        />
                        
                        <TextField
                            className="textField"
                            id="usuario"
                            label="Usuario"
                            value={this.state.usuario}
                            onChange={this.handleChange('usuario')}
                            margin="normal"
                        />
                        
                        <FormControl>
                            <InputLabel htmlFor="senha">Senha</InputLabel>
                            <Input
                                className="textField"
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
                        
                        <TextField
                            className="textField"
                            id="oabNum"
                            label="Número OAB"
                            value={this.state.oabNum}
                            onChange={this.handleChange('oabNum')}
                            margin="normal"
                        />

                        <TextField
                            className="textField"
                            id="cargo"
                            label="Cargo"
                            value={this.state.cargo}
                            onChange={this.handleChange('cargo')}
                            margin="normal"
                        />

                        <TextField
                            className="textField"
                            id="rg"
                            label="RG"
                            value={this.state.rg}
                            onChange={this.handleChange('rg')}
                            margin="normal"
                        />

                        <TextField
                            className="textField"
                            id="cpf"
                            label="CPF"
                            value={this.state.cpf}
                            onChange={this.handleChange('cpf')}
                            margin="normal"
                        />

                        <TextField
                            className="textField"
                            id="telefone"
                            label="Telefone"
                            value={this.state.telefone}
                            onChange={this.handleChange('telefone')}
                            margin="normal"
                        />

                        <TextField
                            className="textField"
                            id="dataContatacao"
                            label="Data de Contratação"
                            value={this.state.dataContatacao}
                            onChange={this.handleChange('dataContatacao')}
                            margin="normal"
                        />

                        <TextField
                            className="textField"
                            id="dataNascimento"
                            label="Data de Nascimento"
                            value={this.state.dataNascimento}
                            onChange={this.handleChange('dataNascimento')}
                            margin="normal"
                        />
                        <div className="links-cad">
                            <Button variant="contained" color="primary" className="btn">
                               <a href="/">Voltar</a>
                            </Button>

                            <Button variant="contained" color="primary" className="btn">
                                <a href="/">Enviar</a>
                            </Button>
                        </div>
                    </FormControl>
                </div>
            </div>
        );
    }
}

export default Cadastro;