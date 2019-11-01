import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import "./css/modalEditarcliente.css";

const enderecoApi = "https://knoxapp180120.herokuapp.com/";

class ModalCadastrarFuncionario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: {
                nome: '',
                cpf: '',
                rg: '',
                adm: '',
                senha: '',
                email: '',
                cargo: '',
                complemento: '',
                numero: '',
                cidade: '',
                UF: '',
                logradouro: '',
                nomeRua: '',
                cep: '',
                telefone: '',
                celular: '',

                tipofuncionario: ''
            },
            errors: {
                nome: '',
                cpf: '',
                rg: '',
                adm: '',
                senha: '',
                email: '',
                cargo: '',
                complemento: '',
                numero: '',
                cidade: '',
                UF: '',
                logradouro: '',
                nomeRua: '',
                cep: '',
                telefone: '',
                celular: '',

                tipofuncionario: ''
            },
            openSelect: false,
        };

    }

    handleChangeNome = (event) => {
        let usuario = this.state.usuario;
        usuario.nome = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeCpf = (event) => {
        let usuario = this.state.usuario;
        usuario.cpf = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeRg = (event) => {
        let usuario = this.state.usuario;
        usuario.rg = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeSenha = (event) => {
        let usuario = this.state.usuario;
        usuario.senha = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeAdm = (event) => {
        let usuario = this.state.usuario;
        usuario.adm = event.target.value;
        this.setState({ usuario: usuario });

        console.log(this.state.usuario.adm)

    };

    handleChangeCep = (event) => {
        let usuario = this.state.usuario;
        usuario.cep = event.target.value;
        this.setState({ usuario: usuario });
    };

    handleChangeLogradouro = (event) => {
        let usuario = this.state.usuario;
        usuario.logradouro = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeNomeRua = (event) => {
        let usuario = this.state.usuario;
        usuario.nomeRua = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeComplemento = (event) => {
        let usuario = this.state.usuario;
        usuario.complemento = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeNumero = (event) => {
        let usuario = this.state.usuario;
        usuario.numero = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeCidade = (event) => {
        let usuario = this.state.usuario;
        usuario.cidade = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeUf = (event) => {
        let usuario = this.state.usuario;
        usuario.UF = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeCargo = (event) => {
        let usuario = this.state.usuario;
        usuario.cargo = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeTelefone = (event) => {
        let usuario = this.state.usuario;
        usuario.telefone = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeEmail = (event) => {
        let usuario = this.state.usuario;
        usuario.email = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeCelular = (event) => {
        let usuario = this.state.usuario;
        usuario.celular = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleChangeTipoFuncionario = (event) => {
        let usuario = this.state.usuario;
        usuario.tipofuncionario = event.target.value;
        this.setState({ usuario: usuario });

    };

    handleSubmit = (event) => {
        console.log('ola')
        event.preventDefault();
        let valid = true;
        let errors = this.state.errors;
        if (this.state.usuario.nome.length < 2 || this.state.usuario.nome.length > 256) {
            errors.nome = "Nome deve conter entre 2 e 256 caracteres."
            valid = false;

        }

        if (this.state.usuario.senha.length < 6 || this.state.usuario.senha.length > 20) {
            errors.senha = "Senha deve conter entre 6 e 20 caracteres."
            valid = false;
        }

        if (this.state.usuario.rg === null || this.state.usuario.rg.length < 9 || this.state.usuario.rg.length > 9) {
            errors.rg = "RG deve conter 9 digitos e ser um RG válido!"
            valid = false;

            console.log("RG Inválido");
        }

        if (this.state.usuario.cpf === null || this.state.usuario.cpf.length !== 11 ||
            this.state.usuario.cpf.length > 11 || this.state.usuario.cpf.length < 11) {
            errors.cpf = "CPF deve conter 11 digitos e ser um CPF válido!"
            valid = false;

            console.log("CPF Inválido");
        }

        if (this.state.usuario.adm === null || this.state.usuario.adm === '') {
            errors.adm = "Escolha uma opção para o TIPO DE ACESSO ao sistema."
            valid = false;

        }

        if (this.state.usuario.tipofuncionario === null || this.state.usuario.tipofuncionario === '') {
            errors.adm = "Escolha uma opção para o TIPO para o FUNCIONÁRIO ao sistema."
            valid = false;

        }

        if (this.state.usuario.cep.length < 8 || this.state.usuario.cep.length > 8) {
            errors.cep = "CEP deve conter 8 digitos."
            valid = false;

        }

        if (this.state.usuario.cargo.length < 3 || this.state.usuario.cargo.length > 20) {
            errors.cargo = "Cargo deve conter entre 3 a 20 digitos."
            valid = false;

        }


        if (this.state.usuario.telefone.length < 9 || this.state.usuario.telefone.length > 15) {
            errors.telefone = "Telefone deve conter entre 9 e 11 digitos."
            valid = false;
        }

        if (this.state.usuario.celular.length < 9 || this.state.usuario.celular.length > 15) {
            errors.celular = "Celular deve conter entre 9 e 11 digitos."
            valid = false;
        }

        let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!emailRegex.test(this.state.usuario.email)) {
            errors.email = "E-mail inválido."
            valid = false;
        }


        if (this.state.usuario.logradouro.length < 3 || this.state.usuario.logradouro.length > 60) {
            errors.logradouro = "Logradouro deve conter entre 3 e 60 digitos."
            valid = false;
        }

        if (this.state.usuario.nomeRua.length < 3 || this.state.usuario.nomeRua.length > 60) {
            errors.nomeRua = "Nome da Rua deve conter entre 3 e 60 digitos."
            valid = false;

        }

        if (this.state.usuario.numero.length === null || this.state.usuario.numero.length > 5) {
            errors.numero = "Número da Casa deve conter entre 1 e 5 digitos."
            valid = false;

        }

        if (this.state.usuario.cidade.length < 3 || this.state.usuario.cidade.length > 70) {
            errors.cidade = "Cidade deve conter entre 3 e 70 digitos."
            valid = false;

        }

        if (this.state.usuario.UF.length < 2 || this.state.usuario.UF.length > 2) {
            errors.UF = "UF deve conter 2 digitos."
            valid = false;

        }

        if (this.state.usuario.cep.length === 8) {
            fetch('https://viacep.com.br/ws/' + this.state.usuario.cep + '/json/', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            }).then((response) => {
                return response.json();
            })

                .then((result) => {
                    if (result.cep === undefined) {
                        errors.cep = "CEP inválido ou inexistente.";
                        valid = false;
                    }
                })
        }

        if (valid === true) {
            this.insertUser();
        } else {
            console.log(this.state.errors);
            return console.log("não podemos enviar os dados");
        }
    }

    insertUser = (event) => {
        let usuario = this.state.usuario;

        fetch(enderecoApi + "funcionario/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nome": usuario.nome,
                "cpf": usuario.cpf,
                "rg": usuario.rg,
                "cep": usuario.cep,
                "logradouro": usuario.logradouro,
                "nomeRua": usuario.nomeRua,
                "numero": usuario.numero,
                "complemento": usuario.complemento,
                "cidade": usuario.cidade,
                "UF": usuario.UF,
                "telefone": usuario.telefone,
                "adm": usuario.adm == true ? usuario.adm : false,
                "celular": usuario.celular,
                "email": usuario.email,
                "tipofuncionario": usuario.tipofuncionario == "1" ? usuario.tipofuncionario : "0",
                "senha": usuario.senha,
                "cargo": usuario.cargo

            })
        })
            .then((response) => {
                if (response.status !== 200) {
                    alert("Verifique se os dados estão corretos entes de finalizar o seu cadastro.")
                } else {
                    alert("Cadastro realizado com SUCESSO.")
                    window.location.reload();
                }
                return console.log(response);
            });

    };

    handleCloseSelect = () => {
        this.setState({ openSelect: false });
    };

    handleOpenSelect = () => {
        this.setState({ openSelect: true });
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.createmodal}
                    onClose={this.props.handleClose}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"

                >
                    <DialogTitle id="scroll-dialog-title">Cadastrar Novo Funcionário</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit} className="form-style">

                            <p className="desc-cad">Dados Pessoais</p>
                            <TextField
                                className="textfield-cli"
                                id="nome"
                                label="Nome*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.nome ? true : false}
                                helperText={this.state.errors.nome !== '' ? this.state.errors.nome : ''}
                                value={this.state.usuario.nome}
                                inputProps={{ maxLength: 60 }}
                                onChange={e => { this.handleChangeNome(e) }}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                id="cpf"
                                label="CPF*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.cpf ? true : false}
                                helperText={this.state.errors.cpf !== '' ? this.state.errors.cpf : ''}
                                value={this.state.usuario.cpf}
                                onChange={e => { this.handleChangeCpf(e) }}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                id="rg"
                                label="RG*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.rg ? true : false}
                                helperText={this.state.errors.rg !== '' ? this.state.errors.rg : ''}
                                value={this.state.usuario.rg}
                                onChange={e => { this.handleChangeRg(e) }}
                                style={{ width: "100%" }}
                            />

                            <p className="desc-cad marg-desc">Dados de Acesso</p>
                            <TextField
                                id="email"
                                label="E-mail"
                                margin="normal"
                                type="email"
                                error={this.state.errors.email ? true : false}
                                helperText={this.state.errors.email !== '' ? this.state.errors.email : ''}
                                value={this.state.usuario.email}
                                onChange={e => { this.handleChangeEmail(e) }}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                id="senha"
                                label="Senha"
                                margin="normal"
                                error={this.state.errors.senha ? true : false}
                                helperText={this.state.errors.senha !== '' ? this.state.errors.senha : ''}
                                type="password"
                                value={this.state.usuario.senha}
                                onChange={e => { this.handleChangeSenha(e) }}
                                style={{ width: "100%" }}
                            />

                            <InputLabel htmlFor="age-native-simple">O funcionário é um Administrador?</InputLabel>
                            <Select
                                id="adm"
                                label="O funcionário é um Administrador?"
                                native
                                value={this.state.usuario.adm}
                                onChange={e => { this.handleChangeAdm(e) }}
                                style={{ width: "100%" }}
                            >
                                <option value="null">Selecione...</option>
                                <option value={true}>SIM</option>
                                <option value={false}>NÂO</option>
                            </Select>


                            <TextField
                                id="cargo"
                                label="Cargo"
                                margin="normal"
                                type="text"
                                error={this.state.errors.cargo ? true : false}
                                helperText={this.state.errors.cargo !== '' ? this.state.errors.cargo : ''}
                                value={this.state.usuario.cargo}
                                onChange={e => { this.handleChangeCargo(e) }}
                                style={{ width: "100%" }}
                            />

                            <InputLabel htmlFor="age-native-simple">Tipo de Funcionário:</InputLabel>
                            <Select
                                id="tipoFuncionario"
                                label="Tipo de Funcionário:"
                                native
                                value={this.state.usuario.tipofuncionario}
                                onChange={e => { this.handleChangeTipoFuncionario(e) }}
                                style={{ width: "100%" }}
                            >
                                <option value="null">Selecione...</option>
                                <option value="0">Outro...</option>
                                <option value="1">Advogado(a)/Gestor(a)/Sócio(a)</option>
                            </Select>

                            <p className="desc-cad marg-desc">Endereço</p>
                            <TextField
                                id="cep"
                                label="CEP*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.cep ? true : false}
                                helperText={this.state.errors.cep !== '' ? this.state.errors.cep : ''}
                                value={this.state.usuario.cep}
                                onChange={e => { this.handleChangeCep(e) }}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                id="logradouro"
                                label="Logradouro*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.logradouro ? true : false}
                                helperText={this.state.errors.logradouro !== '' ? this.state.errors.logradouro : ''}
                                value={this.state.usuario.logradouro}
                                onChange={e => { this.handleChangeLogradouro(e) }}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                id="nomeRua"
                                label="Nome Rua*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.nomeRua ? true : false}
                                helperText={this.state.errors.nomeRua !== '' ? this.state.errors.nomeRua : ''}
                                value={this.state.usuario.nomeRua}
                                onChange={e => { this.handleChangeNomeRua(e) }}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                id="numero"
                                label="Número*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.numero ? true : false}
                                helperText={this.state.errors.numero !== '' ? this.state.errors.numero : ''}
                                value={this.state.usuario.numero}
                                onChange={e => { this.handleChangeNumero(e) }}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                id="complemento"
                                label="Complemento*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.complemento ? true : false}
                                helperText={this.state.errors.complemento !== '' ? this.state.errors.complemento : ''}
                                value={this.state.usuario.complemento}
                                onChange={e => { this.handleChangeComplemento(e) }}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                id="cidade"
                                label="Cidade*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.cidade ? true : false}
                                helperText={this.state.errors.cidade !== '' ? this.state.errors.cidade : ''}
                                value={this.state.usuario.cidade}
                                onChange={e => { this.handleChangeCidade(e) }}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                id="UF"
                                label="Estado*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.UF ? true : false}
                                helperText={this.state.errors.nome !== '' ? this.state.errors.nome : ''}
                                value={this.state.usuario.UF}
                                onChange={e => { this.handleChangeUf(e) }}
                                style={{ width: "100%" }}
                            />

                            <p className="desc-cad marg-desc">Contato</p>

                            <TextField
                                id="telefone"
                                label="Telefone*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.telefone ? true : false}
                                helperText={this.state.errors.telefone !== '' ? this.state.errors.telefone : ''}
                                value={this.state.usuario.telefone}
                                onChange={e => { this.handleChangeTelefone(e) }}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                id="celular"
                                label="Celular*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.celular ? true : false}
                                helperText={this.state.errors.celular !== '' ? this.state.errors.celular : ''}
                                value={this.state.usuario.celular}
                                onChange={e => { this.handleChangeCelular(e) }}
                                style={{ width: "100%" }}
                            />

                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" className="btn" onClick={this.props.handleClose}>
                            Cancelar
                        </Button>

                        <Button variant="contained" color="primary" className="btn" type="submit" value="Submit" onClick={this.handleSubmit}>
                            Enviar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ModalCadastrarFuncionario;