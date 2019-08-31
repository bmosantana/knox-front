import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./css/modalEditarcliente.css";

class ModalEditarCliente extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editmodal: false,
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
    }
  }

  handleChangeNome = (event) => {
    let usuario = this.state.usuario;
    usuario.nome += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeCpf = (event) => {
    let usuario = this.state.usuario;
    usuario.cpf += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeRg = (event) => {
    let usuario = this.state.usuario;
    usuario.rg += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangePis = (event) => {
    let usuario = this.state.usuario;
    usuario.pis += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeCarteiraTrabalho = (event) => {
    let usuario = this.state.usuario;
    usuario.carteira_trabalho += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeCep = (event) => {
    let usuario = this.state.usuario;
    usuario.cep += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeLogradouro = (event) => {
    let usuario = this.state.usuario;
    usuario.logradouro += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeNomeRua = (event) => {
    let usuario = this.state.usuario;
    usuario.nomeRua += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeComplemento = (event) => {
    let usuario = this.state.usuario;
    usuario.complemento += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeNumero = (event) => {
    let usuario = this.state.usuario;
    usuario.numero += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeCidade = (event) => {
    let usuario = this.state.usuario;
    usuario.cidade += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeUf = (event) => {
    let usuario = this.state.usuario;
    usuario.UF += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeTelefoneResidencial = (event) => {
    let usuario = this.state.usuario;
    usuario.telefoneResidencial += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeTelefoneComercial = (event) => {
    let usuario = this.state.usuario;
    usuario.telefoneComercial += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeEmail = (event) => {
    let usuario = this.state.usuario;
    usuario.email += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleChangeCelular = (event) => {
    let usuario = this.state.usuario;
    usuario.celular += event.nativeEvent.data;
    this.setState({ usuario: usuario });

  };

  handleClose = () => {
    this.setState({ editmodal: false });
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
            <form onSubmit={this.handleSubmit} className="form-style">

              <p className="desc-cad">Dados Pessoais</p>
              <TextField
                className="textfield-cli"
                id="nome"
                label="Nome*"
                margin="normal"
                type="text"
                value={this.state.usuario.nome}
                onChange={e => { this.handleChangeNome(e) }}
                style={{ width: "50vw" }}
              />

              <TextField
                id="cpf"
                label="CPF*"
                margin="normal"
                type="text"
                value={this.state.usuario.cpf}
                onChange={e => { this.handleChangeCpf(e) }}
                style={{ width: "50vw" }}
              />

              <TextField
                id="rg"
                label="RG*"
                margin="normal"
                type="text"
                value={this.state.usuario.rg}
                onChange={e => { this.handleChangeRg(e) }}
                style={{ width: "50vw" }}
              />

              <TextField
                id="pis"
                label="Numero do PIS"
                margin="normal"
                type="text"
                value={this.state.usuario.pis}
                onChange={e => { this.handleChangePis(e) }}
                style={{ width: "50vw" }}
              />

              <TextField
                id="carteira_trabalho"
                label="Numero da Carteira de Trabalho"
                margin="normal"
                type="text"
                value={this.state.usuario.carteira_trabalho}
                onChange={e => { this.handleChangeCarteiraTrabalho(e) }}
                style={{ width: "50vw" }}
              /><br />

              <p className="desc-cad marg-desc">Endereço</p>
              <TextField
                id="cep"
                label="CEP*"
                margin="normal"
                type="text"
                value={this.state.usuario.cep}
                onChange={e => { this.handleChangeCep(e) }}
                style={{ width: "50vw" }}
              />

              <TextField
                id="logradouro"
                label="Logradouro*"
                margin="normal"
                type="text"
                value={this.state.usuario.logradouro}
                onChange={e => { this.handleChangeLogradouro(e) }}
                style={{ width: "50vw" }}
              />

              <TextField
                id="nomeRua"
                label="Nome Rua*"
                margin="normal"
                type="text"
                value={this.state.usuario.nomeRua}
                onChange={e => { this.handleChangeNomeRua(e) }}
                style={{ width: "50vw" }}
              />

              <TextField
                id="numero"
                label="Número*"
                margin="normal"
                type="text"
                value={this.state.usuario.numero}
                onChange={e => { this.handleChangeNumero(e) }}
                style={{ width: "50vw" }}
              />

              <TextField
                id="complemento"
                label="Complemento*"
                margin="normal"
                type="text"
                value={this.state.usuario.complemento}
                onChange={e => { this.handleChangeComplemento(e) }}
                style={{ width: "50vw" }}
              />

              <TextField
                id="cidade"
                label="Cidade*"
                margin="normal"
                type="text"
                value={this.state.usuario.cidade}
                onChange={e => { this.handleChangeCidade(e) }}
                style={{ width: "50vw" }}
              />

              <TextField
                id="UF"
                label="Estado*"
                margin="normal"
                type="text"
                value={this.state.usuario.UF}
                onChange={e => { this.handleChangeUf(e) }}
                style={{ width: "50vw" }}
              />

              <p className="desc-cad marg-desc">Contato</p>

              <TextField
                id="telefoneResidencial"
                label="Telefone Residencial*"
                margin="normal"
                type="text"
                value={this.state.usuario.telefoneResidencial}
                onChange={e => { this.handleChangeTelefoneResidencial(e) }}
                style={{ width: "50vw" }}
              />

              <TextField
                id="telefoneComercial"
                label="Telefone Comercial*"
                margin="normal"
                type="text"
                value={this.state.usuario.telefoneComercial}
                onChange={e => { this.handleChangeTelefoneComercial(e) }}
                style={{ width: "50vw" }}
              />

              <TextField
                id="celular"
                label="Celular*"
                margin="normal"
                type="text"
                value={this.state.usuario.celular}
                onChange={e => { this.handleChangeCelular(e) }}
                style={{ width: "50vw" }}
              />

              <TextField
                id="email"
                label="E-mail*"
                margin="normal"
                type="email"
                value={this.state.usuario.email}
                onChange={e => { this.handleChangeEmail(e) }}
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