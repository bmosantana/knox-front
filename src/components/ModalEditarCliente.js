import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../css/modalEditarcliente.css";

class ModalEditarCliente extends Component {
    constructor(props) {
        super(props)
        this.state={
          editmodal: false,
          cancelState: false,

          usuario:{
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
        }   
    }

    handleChange = props => event => {
      this.setState({ [props]: event.target.value });
    };

    handleClose = () =>{
      this.setState({editmodal: false});
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.editmodal}
                    onClose={this.handleClose}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"
                    
                >
                    <DialogTitle id="scroll-dialog-title">Editar Cliente</DialogTitle>
                    <DialogContent>      
                    <form method="get" onSubmit={this.handleSubmit} className="form-style">
                      {/* Div que contem os primeiros campos */}

                      {/* Campo de Nome */}
                      <p className="desc-cad">Dados Pessoais</p>
                      <TextField
                        className="textfield-cli"
                        id="nome"
                        label="Nome*"
                        margin="normal"
                        type="text"
                        value={this.state.nome}
                        onChange = {this.handleChange('nome')}
                        style={{ width: "50vw" }}
                      />

                      <TextField
                        id="cpf"
                        label="CPF*"
                        margin="normal"
                        type="text"
                        value={this.state.cpf}
                        onChange = {this.handleChange('cpf')}
                        style={{ width: "50vw"}}
                      />

                      <TextField
                        id="rg"
                        label="RG*"
                        margin="normal"
                        type="text"
                        value={this.state.rg}
                        onChange = {this.handleChange('rg')}
                        style={{ width: "50vw" }}
                      />

                      <TextField
                        id="pis"
                        label="Numero do PIS"
                        margin="normal"
                        type="text"
                        value={this.state.pis}
                        onChange = {this.handleChange('pis')}
                        style={{ width: "50vw" }}
                      />

                      <TextField
                        id="carteira_trabalho"
                        label="Numero da Carteira de Trabalho"
                        margin="normal"
                        type="text"
                        value={this.state.carteira_trabalho}
                        style={{ width: "50vw" }}
                      /><br />

                      <p className="desc-cad marg-desc">Endereço</p>
                      <TextField
                        id="cep"
                        label="CEP*"
                        margin="normal"
                        type="text"
                        value={this.state.cep}
                        onChange = {this.handleChange('cep')}
                        style={{ width: "50vw" }}
                      />

                      <TextField
                        id="logradouro"
                        label="Logradouro*"
                        margin="normal"
                        type="text"
                        value={this.state.logradouro}
                        onChange = {this.handleChange('logradouro')}
                        style={{ width: "50vw" }}
                      />

                      <TextField
                        id="nomeRua"
                        label="nomeRua*"
                        margin="normal"
                        type="text"
                        value={this.state.nomeRua}
                        onChange = {this.handleChange('nomeRua')}
                        style={{ width: "50vw" }}
                      />

                      <TextField
                        id="numero"
                        label="Número*"
                        margin="normal"
                        type="text"
                        value={this.state.numero}
                        onChange = {this.handleChange('numero')}
                        style={{ width: "50vw" }}
                      />

                      <TextField
                        id="complemento"
                        label="complemento*"
                        margin="normal"
                        type="text"
                        value={this.state.complemento}
                        onChange = {this.handleChange('complemento')}
                        style={{ width: "50vw" }}
                      />

                      <TextField
                        id="cidade"
                        label="Cidade*"
                        margin="normal"
                        type="text"
                        value={this.state.cidade}
                        onChange = {this.handleChange('cidade')}
                        style={{ width: "50vw" }}
                      />

                      <TextField
                        id="UF"
                        label="Estado*"
                        margin="normal"
                        type="text"
                        value={this.state.UF}
                        onChange = {this.handleChange('UF')}
                        style={{ width: "50vw" }}
                      />

                      <p className="desc-cad marg-desc">Contato</p>

                      <TextField
                        id="telefoneResidencial"
                        label="Telefone telefoneResidencial*"
                        margin="normal"
                        type="text"
                        value={this.state.telefoneResidencial}
                        onChange = {this.handleChange('telefoneResidencial')}
                        style={{ width: "50vw" }}
                      />

                      <TextField
                        id="telefoneComercial"
                        label="Telefone telefoneComercial*"
                        margin="normal"
                        type="text"
                        value={this.state.telefoneComercial}
                        onChange = {this.handleChange('telefoneComercial')}
                        style={{ width: "50vw" }}
                      />

                      <TextField
                        id="celular"
                        label="Celular*"
                        margin="normal"
                        type="text"
                        value={this.state.celular}
                        onChange = {this.handleChange('celular')}
                        style={{ width: "50vw" }}
                      />

                      <TextField
                        id="email"
                        label="E-mail*"
                        margin="normal"
                        type="email"
                        value={this.state.email}
                        onChange = {this.handleChange('email')}
                        style={{ width: "50vw" }}
                      />
                    </form>

                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" className="btn">
                          Cancelar
                        </Button>

                        <Button variant="contained" color="primary" className="btn">
                          Enviar
                        </Button>
                      </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ModalEditarCliente;