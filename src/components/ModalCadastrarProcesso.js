import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import "./css/modalEditarcliente.css";

const enderecoApi = "https://knoxapp180120.herokuapp.com/";
const enderecoPdf = "https://knoxapp180120.herokuapp.com/anexo/";

class ModalCadastrarProcesso extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientes: [],
            advogados: [],
            usuario: {
                numeroProcesso: '',
                cpfCliente: '',
                cpfAdvogado: '',
                classe: '',
                assunto: '',
                juiz: '',
                local: '',
                pdf:{
                    arquivo: '',
                    texto: ''
                },
                status: ''

            },
            errors: {
                numeroProcesso: '',
                cpfCliente: '',
                cpfAdvogado: '',
                classe: '',
                assunto: '',
                juiz: '',
                local: '',
                pdf: '',
                status: ''
            }
        };

    }

    componentWillMount() {
        this.getCpfsClients();
        this.getCpfdAdvogados();
    }

    getCpfsClients = () => {
        fetch(enderecoApi + "cliente/", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.status !== 200) {
                    console.log("GET de CLIENTE falhou. 00")
                } else {
                    console.log("GET realizado com SUCESSO. 00")
                }

                return response.json()
            })
            .then((resultado) => {
                let reverseList = resultado.reverse();
                this.setState({ clientes: reverseList })
                console.log('CLi -->' + this.state.clientes)
            })
    }

    getCpfdAdvogados = () => {
        fetch(enderecoApi + "funcionario/", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.status !== 200) {
                    console.log("GET de CLIENTE falhou. 00")
                } else {
                    console.log("GET realizado com SUCESSO.")
                }

                return response.json()
            })
            .then((resultado) => {
                let reverseList = resultado.reverse();
                this.setState({ advogados: reverseList })
                console.log('Adv -->' + this.state.advogados)
            })

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

    handleChangePdf = (event) => {
        let usuario = this.state.usuario;
        usuario.pdf.arquivo = event.target.files[0];
        usuario.pdf.texto = event.target.value;
        this.setState({ usuario: usuario });

        let errors = this.state.errors;
        errors.pdf = ""
        this.setState({ errors: errors });

    };

    handleSubmit = (event) => {
        console.log('ola')
        event.preventDefault();
        let valid = true;
        let errors = this.state.errors;
        if (this.state.usuario.juiz.length < 2 || this.state.usuario.juiz.length > 256) {
            errors.juiz = "Nome do Juiz deve conter entre 2 e 256 caracteres."
            valid = false;

        }

        if (this.state.usuario.classe.length < 2 || this.state.usuario.classe.length > 256) {
            errors.classe = "Classe deve conter entre 2 e 256 caracteres."
            valid = false;

        }

        if (this.state.usuario.assunto.length < 2 || this.state.usuario.assunto.length > 256) {
            errors.assunto = "Assunto deve conter entre 2 e 256 caracteres."
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

        if (this.state.usuario.local.length < 8 || this.state.usuario.local.length == 0) {
            errors.local = "LOCAL deve conter 8 ou mais digitos."
            valid = false;

        }

        // if (this.state.usuario.pdf === null || this.state.usuario.local.length === '') {
        //     errors.pdf = "PDF não pode estar vazio."
        //     valid = false;

        // }

        if (this.state.usuario.numeroProcesso.length === 0 || this.state.usuario.numeroProcesso.length > 20) {
            errors.numeroProcesso = "Número de Processo deve conter entre 1 e 20 digitos."
            valid = false;
        }

        if (valid === true) {
            this.insertProcess();
            // this.insertPdf();
        } else {
            console.log(this.state.errors);
            return console.log("não podemos enviar os dados");
        }
    }


    insertProcess = () => {
        let usuario = this.state.usuario;
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
                    // alert("Cadastro realizado com SUCESSO.")
                    this.insertPdf();
                    // window.location.reload();
                }
                return console.log(response);
            });


    };

    insertPdf = () => {
        let usuario = this.state.usuario;
        let formDataPdf = new FormData();
        formDataPdf.append('Arquivo', usuario.pdf.arquivo);
        
        if (usuario.numeroProcesso !== null || usuario.numeroProcesso !== '') {
            fetch(enderecoPdf + usuario.numeroProcesso, {
                method: "POST",
                body: formDataPdf
            })
                .then((response) => {
                    if (response.status !== 200) {
                        alert("Verifique se os dados estão corretos antes de finalizar o seu cadastro.")
                    } else {
                        alert("Cadastro realizado com SUCESSO.")
                        window.location.reload();
                    }
                    return console.log(response);
                });
        } else {
            alert("Pode conter algum erro no Número do Processo.")
        }
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

                            <p className="desc-cad">Dados do Processo</p>
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

                            <InputLabel htmlFor="age-native-simple">Status do Processo:</InputLabel>
                            <Select
                                id="status"
                                label="status"
                                native
                                value={this.state.usuario.status}
                                onChange={e => { this.handleChangeStatus(e) }}
                                style={{ width: "100%" }}
                            >
                                <option value="null">Selecione...</option>
                                <option value="1">Aberto / Em Andamento</option>
                                <option value="0">Fechado</option>
                            </Select>

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
                                {this.state.clientes.map((item, i) =>

                                    <option key={i} value={item.cpf}>{item.nome} </option>

                                )}
                            </Select>

                            <InputLabel htmlFor="age-native-simple">Advogado:</InputLabel>
                            <Select
                                id="cpfAdvogado"
                                label="cpfAdvogado"
                                native
                                value={this.state.usuario.cpfAdvogado}
                                onChange={e => { this.handleChangeCpfAdvogado(e) }}
                                style={{ width: "100%" }}
                            >
                                <option value="null">Selecione...</option>

                                {this.state.advogados.map((item, i) =>

                                    <option key={i} value={item.cpf}>{item.nome} </option>

                                )}

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

                            <FormControl style={{ width: "100%" }}>
                                <p className="label-titulo">PDF do Processo*</p>
                                <TextField
                                    id="pdf"
                                    placeholder="PDF do Processo"
                                    margin="normal"
                                    type="file"
                                    error={this.state.errors.pdf !== '' ? true : false}
                                    helperText={this.state.errors.pdf !== '' ? this.state.errors.pdf : ''}
                                    value={this.state.usuario.pdf.texto}
                                    onChange={e => { this.handleChangePdf(e) }}
                                    style={{ width: "100%" }}
                                />
                            </FormControl>

                            <p className="desc-cad marg-desc">Endereço</p>
                            <TextField
                                id="local"
                                label="Local*"
                                error={this.state.errors.local !== '' ? true : false}
                                helperText={this.state.errors.local !== '' ? this.state.errors.local : ''}
                                margin="normal"
                                type="text"
                                value={this.state.usuario.local}
                                onChange={e => { this.handleChangeLocal(e) }}
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