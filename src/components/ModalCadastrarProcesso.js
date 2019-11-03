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

class ModalCadastrarProcesso extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: {
                numeroProcesso: '',
                cpfCliente: '',
                cpfAdvogado: '',
                classe: '',
                assunto: '',
                juiz: '',
                local: '',
                status: '',
                complemento: '',
                numero: '',
                cidade: '',
                UF: '',
                logradouro: '',
                nomeRua: '',
                cep: '',

            },
            errors: {
                numeroProcesso: '',
                cpfCliente: '',
                cpfAdvogado: '',
                classe: '',
                assunto: '',
                juiz: '',
                local: '',
                status: '',
                complemento: '',
                numero: '',
                cidade: '',
                UF: '',
                logradouro: '',
                nomeRua: '',
                cep: '',
            }
        };

    }

    handleChangeNumeroProcesso = (event) => {
        let usuario = this.state.usuario;
        usuario.numeroProcesso = event.target.value;
        this.setState({ usuario: usuario });

        let errors = this.state.errors;
        errors.numeroProcesso = ""
        this.setState({ errors: errors });

    };

    handleChangeCpfCliente = (event) => {
        let usuario = this.state.usuario;
        usuario.cpfCliente = event.target.value;
        this.setState({ usuario: usuario });

        let errors = this.state.errors;
        errors.cpfCliente = ""
        this.setState({ errors: errors });

    };

    handleChangeCpfAdvogado = (event) => {
        let usuario = this.state.usuario;
        usuario.cpfAdvogado = event.target.value;
        this.setState({ usuario: usuario });

        let errors = this.state.errors;
        errors.cpfAdvogado = ""
        this.setState({ errors: errors });

    };

    handleChangeClasse = (event) => {
        let usuario = this.state.usuario;
        usuario.classe = event.target.value;
        this.setState({ usuario: usuario });

        let errors = this.state.errors;
        errors.classe = ""
        this.setState({ errors: errors });

    };

    handleChangeAssunto = (event) => {
        let usuario = this.state.usuario;
        usuario.assunto = event.target.value;
        this.setState({ usuario: usuario });

        let errors = this.state.errors;
        errors.assunto = ""
        this.setState({ errors: errors });

    };

    handleChangeLocal = (event) => {
        let usuario = this.state.usuario;
        usuario.local = event.target.value;
        this.setState({ usuario: usuario });

        let errors = this.state.errors;
        errors.local = ""
        this.setState({ errors: errors });

    };

    handleChangeJuiz = (event) => {
        let usuario = this.state.usuario;
        usuario.juiz = event.target.value;
        this.setState({ usuario: usuario });

        let errors = this.state.errors;
        errors.juiz = ""
        this.setState({ errors: errors });

    };

    handleChangeStatus = (event) => {
        let usuario = this.state.usuario;
        usuario.status = event.target.value;
        this.setState({ usuario: usuario });

        let errors = this.state.errors;
        errors.status = ""
        this.setState({ errors: errors });

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



    handleSubmit = (event) => {
        console.log('ola')
        event.preventDefault();
        let valid = true;
        let errors = this.state.errors;
        if (this.state.usuario.juiz.length < 2 || this.state.usuario.juiz.length > 256 ) {
            errors.nome = "Nome do Juiz deve conter entre 2 e 256 caracteres."
            valid = false;

        }

        if (this.state.usuario.classe.length < 2 || this.state.usuario.classe.length > 256 ) {
            errors.nome = "Classe deve conter entre 2 e 256 caracteres."
            valid = false;

        }

        if (this.state.usuario.assunto.length < 2 || this.state.usuario.assunto.length > 256 ) {
            errors.nome = "Assunto deve conter entre 2 e 256 caracteres."
            valid = false;

        }

        //cpf cliente
        // if (this.state.usuario.rg == null || this.state.usuario.rg.length != 9 ||
        //     this.state.usuario.rg.length < 2 || this.state.usuario.rg.length > 256 || this.state.usuario.rg.length == 0) {
        //     errors.rg = "RG deve conter 9 digitos e ser um RG válido!"
        //     valid = false;

        //     console.log("RG Inválido");
        // }

        //cpf advogado
        // if (this.state.usuario.cpf == null || this.state.usuario.cpf.length != 11 ||
        //     this.state.usuario.cpf.length > 11 || this.state.usuario.cpf.length < 11 || this.state.usuario.cpf.length == 0) {
        //     errors.cpf = "CPF deve conter 11 digitos e ser um CPF válido!"
        //     valid = false;

        //     console.log("CPF Inválido");
        // }

        if (this.state.usuario.cep.length < 8 || this.state.usuario.cep.length > 8 || this.state.usuario.cep.length == 0) {
            errors.cep = "CEP deve conter 8 digitos."
            valid = false;

        }



        if (this.state.usuario.numeroProcesso.length < 3 || this.state.usuario.numeroProcesso.length > 20 || this.state.usuario.numeroProcesso.length == 0) {
            errors.telefoneComercial = "Número de Processo deve conter entre 3 e 20 digitos."
            valid = false;
        }



        if (this.state.usuario.logradouro.length < 3 || this.state.usuario.logradouro.length > 60 || this.state.usuario.logradouro.length == 0) {
            errors.logradouro = "Logradouro deve conter entre 3 e 60 digitos."
            valid = false;
        }

        if (this.state.usuario.nomeRua.length < 3 || this.state.usuario.nomeRua.length > 60 || this.state.usuario.nomeRua.length == 0) {
            errors.nomeRua = "Nome da Rua deve conter entre 3 e 60 digitos."
            valid = false;

        }

        if (this.state.usuario.numero.length == null || this.state.usuario.numero.length > 5 || this.state.usuario.numero.length == 0) {
            errors.numero = "Número da Casa deve conter entre 1 e 5 digitos."
            valid = false;

        }

        if (this.state.usuario.cidade.length < 3 || this.state.usuario.cidade.length > 70 || this.state.usuario.cidade.length == 0) {
            errors.cidade = "Cidade deve conter entre 3 e 70 digitos."
            valid = false;

        }

        if (this.state.usuario.UF.length < 2 || this.state.usuario.UF.length > 2 || this.state.usuario.UF.length == 0) {
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
                    if (result.cep == undefined) {
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


    insertUser = () => {
        let usuario = this.state.usuario;
        usuario.local = usuario.logradouro + "," +
            usuario.nomeRua + "," +
            usuario.complemento + "," +
            usuario.cidade + "," +
            usuario.UF + "," +
            usuario.cep
        fetch(enderecoApi + "processo/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "numeroProcesso": usuario.numeroProcesso,
                "cpfCliente": usuario.cpfCliente,
                "cpfAdvogado": usuario.cpfAdvogado,
                "classe": usuario.classe,
                "assunto": usuario.assunto,
                "juiz": usuario.juiz,
                "local": usuario.local,
                "status": usuario.status

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

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.createmodal}
                    onClose={this.props.handleClose}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"

                >
                    <DialogTitle id="scroll-dialog-title">Cadastrar Novo Processo</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit} className="form-style">

                            <p className="desc-cad">Dados Pessoais</p>
                            <TextField
                                className="textfield-cli"
                                id="numeroProcesso"
                                label="Número do Processo*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.numeroProcesso !== '' ? true : false}
                                helperText={this.state.errors.numeroProcesso !== '' ? this.state.errors.numeroProcesso : ''}
                                value={this.state.usuario.numeroProcesso}
                                inputProps={{ maxLength: 60 }}
                                onChange={e => { this.handleChangeNumeroProcesso(e) }}
                                style={{ width: "100%" }}
                            />

                            <InputLabel htmlFor="age-native-simple">Cliente:</InputLabel>
                            <Select
                                id="cpfCliente"
                                label="cpfCliente"
                                native
                                value={this.state.usuario.cpfCliente}
                                onChange={e => { this.handleChangeCpfCliente(e) }}
                                style={{ width: "100%" }}
                            >
                                <option value="null">Selecione...</option>
                                <option value="0">Outro...</option>
                                <option value="1">Advogado(a)/Gestor(a)/Sócio(a)</option>
                            </Select>

                            <InputLabel htmlFor="age-native-simple">Advogado:</InputLabel>
                            <Select
                                id="cpfAdvogado"
                                label="cpfAdvogado"
                                native
                                value={this.state.usuario.cpfCliente}
                                onChange={e => { this.handleChangeCpfAdvogado(e) }}
                                style={{ width: "100%" }}
                            >
                                <option value="null">Selecione...</option>
                                <option value="0">Outro...</option>
                                <option value="1">Advogado(a)/Gestor(a)/Sócio(a)</option>
                            </Select>

                            <TextField
                                id="classe"
                                label="Classe"
                                margin="normal"
                                type="text"
                                error={this.state.errors.classe !== '' ? true : false}
                                helperText={this.state.errors.classe !== '' ? this.state.errors.classe : ''}
                                value={this.state.usuario.classe}
                                onChange={e => { this.handleChangeClasse(e) }}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                id="assunto"
                                label="Assunto"
                                margin="normal"
                                type="text"
                                error={this.state.errors.assunto !== '' ? true : false}
                                helperText={this.state.errors.assunto !== '' ? this.state.errors.assunto : ''}
                                value={this.state.usuario.assunto}
                                onChange={e => { this.handleChangeAssunto(e) }}
                                style={{ width: "100%" }}
                            /><br />

                            <TextField
                                id="juiz"
                                label="Juiz"
                                margin="normal"
                                type="text"
                                error={this.state.errors.juiz !== '' ? true : false}
                                helperText={this.state.errors.juiz !== '' ? this.state.errors.juiz : ''}
                                value={this.state.usuario.juiz}
                                onChange={e => { this.handleChangeJuiz(e) }}
                                style={{ width: "100%" }}
                            /><br />

                            <p className="desc-cad marg-desc">Endereço</p>
                            <TextField
                                id="cep"
                                label="CEP*"
                                error={this.state.errors.cep !== '' ? true : false}
                                helperText={this.state.errors.cep !== '' ? this.state.errors.cep : ''}
                                margin="normal"
                                type="text"
                                value={this.state.usuario.cep}
                                onChange={e => { this.handleChangeCep(e) }}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                id="logradouro"
                                label="Logradouro*"
                                margin="normal"
                                type="text"
                                error={this.state.errors.logradouro !== '' ? true : false}
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
                                error={this.state.errors.nomeRua !== '' ? true : false}
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
                                error={this.state.errors.numero !== '' ? true : false}
                                helperText={this.state.errors.numero !== '' ? this.state.errors.numero : ''}
                                value={this.state.usuario.numero}
                                onChange={e => { this.handleChangeNumero(e) }}
                                style={{ width: "100%" }}
                            />

                            <TextField
                                id="complemento"
                                label="Complemento"
                                margin="normal"
                                type="text"
                                error={this.state.errors.complemento !== '' ? true : false}
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
                                error={this.state.errors.cidade !== '' ? true : false}
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
                                error={this.state.errors.UF !== '' ? true : false}
                                helperText={this.state.errors.UF !== '' ? this.state.errors.UF : ''}
                                value={this.state.usuario.UF}
                                onChange={e => { this.handleChangeUf(e) }}
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

export default ModalCadastrarProcesso;