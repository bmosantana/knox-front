import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Cliente from './Cliente.js';
import "./css/modalEditarcliente.css";


const enderecoApi = "https://knoxapp180120.herokuapp.com/";

class ModalEditarFuncionario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: props.usuario
    }
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
    let usuario = this.state.usuario;
    console.log(usuario)

    fetch(enderecoApi + "funcionario/" + usuario.cpf + "/", {
      method: "PUT",
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
        "adm": usuario.adm ? usuario.adm : "True",
        "celular": usuario.celular,
        "email": usuario.email,
        "tipofuncionario": usuario.tipofuncionario ? usuario.tipofuncionario : "0",
        "senha": usuario.senha,
        "cargo": usuario.cargo

      })
    })
      .then((response) => {
        if (response.status !== 200) {
          alert("Status: " + response.status)
          window.location.reload();
        } else {
          alert("Edição Realizada com SUCESSO!")
          this.props.handleClose();
        }
        return console.log(usuario.nome);
      });

  };

  handleClose = () => {
    this.setState({ editmodal: false });
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.editmodal}
          onClose={this.props.handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"

        >
          <DialogTitle id="scroll-dialog-title">Editar funcionario</DialogTitle>
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
                inputProps={{ maxLength: 60 }}
                onChange={e => { this.handleChangeNome(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="cpf"
                label="CPF*"
                margin="normal"
                type="text"
                value={this.state.usuario.cpf}
                onChange={e => { this.handleChangeCpf(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="rg"
                label="RG*"
                margin="normal"
                type="text"
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
                value={this.state.usuario.email}
                onChange={e => { this.handleChangeEmail(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="senha"
                label="Senha"
                margin="normal"
                type="password"
                value={this.state.usuario.senha}
                onChange={e => { this.handleChangeSenha(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="adm"
                label="O funcionário é um Administrador?"
                margin="normal"
                type="text"
                value={this.state.usuario.adm}
                onChange={e => { this.handleChangeAdm(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="cargo"
                label="Cargo"
                margin="normal"
                type="text"
                value={this.state.usuario.cargo}
                onChange={e => { this.handleChangeCargo(e) }}
                style={{ width: "100%" }}
              />

              <p className="desc-cad marg-desc">Endereço</p>
              <TextField
                id="cep"
                label="CEP*"
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
                value={this.state.usuario.logradouro}
                onChange={e => { this.handleChangeLogradouro(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="nomeRua"
                label="Nome Rua*"
                margin="normal"
                type="text"
                value={this.state.usuario.nomeRua}
                onChange={e => { this.handleChangeNomeRua(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="numero"
                label="Número*"
                margin="normal"
                type="text"
                value={this.state.usuario.numero}
                onChange={e => { this.handleChangeNumero(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="complemento"
                label="Complemento*"
                margin="normal"
                type="text"
                value={this.state.usuario.complemento}
                onChange={e => { this.handleChangeComplemento(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="cidade"
                label="Cidade*"
                margin="normal"
                type="text"
                value={this.state.usuario.cidade}
                onChange={e => { this.handleChangeCidade(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="UF"
                label="Estado*"
                margin="normal"
                type="text"
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
                value={this.state.usuario.telefone}
                onChange={e => { this.handleChangeTelefone(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="celular"
                label="Celular*"
                margin="normal"
                type="text"
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

export default ModalEditarFuncionario;