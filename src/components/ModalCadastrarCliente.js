import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./css/modalEditarcliente.css";

class ModalCadastrarCliente extends Component {
    constructor(props) {
        super(props)
        this.state = {
            createmodal: false,
            cancelState: false,
            usuario: {
                nome: '',
                cpf: '',
                rg: '',
                pis: '',
                carteira_trabalho: '',

                cep: '',
                logradouro: '',
                nomeRua: '',
                complemento: '',
                numero: '',
                cidade: '',
                UF: '',

                telefoneResidencial: '',
                telefoneComercial: '',
                email: '',
                celular: ''
            }
        };

    }

    // componentWillReceiveProps(newProps) {
    //     this.setState({modalState: newProps.modalState})
    // };
    handleNome(event) {
        let usuario = this.state.usuario;
        usuario.nome = event.target.value;

        console.log(usuario.nome);
    }

    handleChange = (event, prop) => {
        //console.log(props)
        //console.log(event.nativeEvent.data)
        let obj = this.state.usuario
        if (event.nativeEvent != null) {
            obj[prop] += event.nativeEvent.data
            this.setState({ usuario: obj });
        }
    };

    handleClose = () => {
        this.setState({ createmodal: false });
    }

    handleSubmit = (event) => {
        let usuario = this.state.usuario;
        alert(usuario)

    };

    SendApiData = () => {
        // fetch( enderecoApi + "cliente", {
        //   method: "POST",
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(usuario)
        // })
        // .then((response) => {
        //   if(response !== 200){
        //     alert("Verifique se os dados estão corretos entes de finalizar o seu cadastro.")
        //   }else{
        //     alert("Cadastro realizado com SUCESSO.")
        //   }
        //   return response.json();
        // });
    }
    handleClose = () => {
        this.setState({ editmodal: false });
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.createmodal}
                    onClose={this.handleClose}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"

                >
                    <DialogTitle id="scroll-dialog-title">Cadastrar Novo Cliente</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit} className="form-style">

                            <p className="desc-cad">Dados Pessoais</p>
                            <TextField
                                className="textfield-cli"
                                id="nome"
                                label="Nome*"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.nome}
                                onChange={e => { this.handleChange(e, 'nome') }}
                                style={{ width: "90vw" }}
                            />

                            <TextField
                                id="cpf"
                                label="CPF*"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.cpf}
                                onChange={e => { this.handleChange(e, 'cpf') }}
                                style={{ width: "30vw", paddingRight: '0px' }}
                            />

                            <TextField
                                id="rg"
                                label="RG*"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.rg}
                                onChange={e => { this.handleChange(e, 'rg') }}
                                style={{ width: "30vw" }}
                            />

                            <TextField
                                id="pis"
                                label="Numero do PIS"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.pis}
                                onChange={e => { this.handleChange(e, 'pis') }}
                                style={{ width: "90vw" }}
                            />

                            <TextField
                                id="carteira_trabalho"
                                label="Numero da Carteira de Trabalho"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.carteira_trabalho}
                                onChange={e => { this.handleChange(e, 'carteira_trabalho') }}
                                style={{ width: "90vw" }}
                            /><br />

                            <p className="desc-cad marg-desc">Endereço</p>
                            <TextField
                                id="cep"
                                label="CEP*"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.cep}
                                onChange={e => { this.handleChange(e, 'cep') }}
                                style={{ width: "90vw" }}
                            />

                            <TextField
                                id="logradouro"
                                label="Logradouro*"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.logradouro}
                                onChange={this.handleChange('logradouro')}
                                style={{ width: "90vw" }}
                            />

                            <TextField
                                id="nomeRua"
                                label="Nome Rua*"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.nomeRua}
                                onChange={e => { this.handleChange(e, 'nomeRua') }}
                                style={{ width: "90vw" }}
                            />

                            <TextField
                                id="numero"
                                label="Número*"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.numero}
                                onChange={e => { this.handleChange(e, 'numero') }}
                                style={{ width: "15vw" }}
                            />

                            <TextField
                                id="complemento"
                                label="Complemento*"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.complemento}
                                onChange={e => { this.handleChange(e, 'complemento') }}
                                style={{ width: "60vw" }}
                            />

                            <TextField
                                id="cidade"
                                label="Cidade*"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.cidade}
                                onChange={e => { this.handleChange(e, 'cidade') }}
                                style={{ width: "38vw" }}
                            />

                            <TextField
                                id="UF"
                                label="Estado*"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.UF}
                                onChange={e => { this.handleChange(e, 'UF') }}
                                style={{ width: "15vw" }}
                            />

                            <p className="desc-cad marg-desc">Contato</p>

                            <TextField
                                id="telefoneResidencial"
                                label="Telefone Residencial*"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.telefoneResidencial}
                                onChange={e => { this.handleChange(e, 'telefoneResidencial') }}
                                style={{ width: "90vw" }}
                            />

                            <TextField
                                id="telefoneComercial"
                                label="Telefone Comercial*"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.telefoneComercial}
                                onChange={e => { this.handleChange(e, 'telefoneComercial') }}
                                style={{ width: "90vw" }}
                            />

                            <TextField
                                id="celular"
                                label="Celular*"
                                margin="normal"
                                type="text"
                                value={this.state.usuario.celular}
                                onChange={e => { this.handleChange(e, 'celular') }}
                                style={{ width: "90vw" }}
                            />

                            <TextField
                                id="email"
                                label="E-mail*"
                                margin="normal"
                                type="email"
                                value={this.state.usuario.email}
                                onChange={e => { this.handleChange(e, 'email') }}
                                style={{ width: "90vw" }}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" className="btn">
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

export default ModalCadastrarCliente;