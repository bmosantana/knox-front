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

class ModalEditarCliente extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: props.usuario,
      errors: {
        nome: '',
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
      },
      errorBoolean: false,
    }
  }

  handleChangeNome = (event) => {
    let usuario = this.state.usuario;
    usuario.nome = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.nome = ""
    this.setState({ errors: errors });

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

  handleChangePis = (event) => {
    let usuario = this.state.usuario;
    usuario.pis = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.pis = ""
    this.setState({ errors: errors });

  };

  handleChangeCarteiraTrabalho = (event) => {
    let usuario = this.state.usuario;
    usuario.carteira_trabalho = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.carteira_trabalho = ""
    this.setState({ errors: errors });

  };

  handleChangeCep = (event) => {
    let usuario = this.state.usuario;
    usuario.cep = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.cep = ""
    this.setState({ errors: errors });

  };

  handleChangeLogradouro = (event) => {
    let usuario = this.state.usuario;
    usuario.logradouro = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.logradouro = ""
    this.setState({ errors: errors });

  };

  handleChangeNomeRua = (event) => {
    let usuario = this.state.usuario;
    usuario.nomeRua = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.nomeRua = ""
    this.setState({ errors: errors });

  };

  handleChangeComplemento = (event) => {
    let usuario = this.state.usuario;
    usuario.complemento = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.complemento = ""
    this.setState({ errors: errors });
  };

  handleChangeNumero = (event) => {
    let usuario = this.state.usuario;
    usuario.numero = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.numero = ""
    this.setState({ errors: errors });

  };

  handleChangeCidade = (event) => {
    let usuario = this.state.usuario;
    usuario.cidade = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.cidade = ""
    this.setState({ errors: errors });

  };

  handleChangeUf = (event) => {
    let usuario = this.state.usuario;
    usuario.UF = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.UF = ""
    this.setState({ errors: errors });

  };

  handleChangeTelefoneResidencial = (event) => {
    let usuario = this.state.usuario;
    usuario.telefoneResidencial = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.telefoneResidencial = ""
    this.setState({ errors: errors });

  };

  handleChangeTelefoneComercial = (event) => {
    let usuario = this.state.usuario;
    usuario.telefoneComercial = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.telefoneComercial = ""
    this.setState({ errors: errors });

  };

  handleChangeEmail = (event) => {
    let usuario = this.state.usuario;
    usuario.email = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.email = ""
    this.setState({ errors: errors });

  };

  handleChangeCelular = (event) => {
    let usuario = this.state.usuario;
    usuario.celular = event.target.value;
    this.setState({ usuario: usuario });

    let errors = this.state.errors;
    errors.celular = ""
    this.setState({ errors: errors });

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

    if (this.state.usuario.cep.length < 8 || this.state.usuario.cep.length > 8) {
      errors.cep = "CEP deve conter 8 digitos e ser um CEP válido."
      valid = false;

    }

    if (this.state.usuario.pis.length < 11 || this.state.usuario.pis.length > 11) {
      errors.pis = "PIS deve conter 11 digitos."
      valid = false;

    }
    if (this.state.usuario.carteira_trabalho.length < 5 || this.state.usuario.carteira_trabalho.length > 11) {
      errors.carteira_trabalho = "Carteira de Trabalho deve conter entre 5 e 11 digitos."
      valid = false;

    }

    if (this.state.usuario.telefoneComercial.length < 9 || this.state.usuario.telefoneComercial.length > 15) {
      errors.telefoneComercial = "Telefone Comercial deve conter entre 9 e 11 digitos."
      valid = false;
    }

    if (this.state.usuario.telefoneResidencial.length < 9 || this.state.usuario.telefoneResidencial.length > 15) {
      errors.telefoneResidencial = "Telefone Residencial deve conter entre 9 e 11 digitos."
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

    if (this.state.usuario.numero.length == null || this.state.usuario.numero.length > 5) {
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
          if (result.cep == undefined) {
            errors.cep = "CEP inválido ou inexistente.";
            valid = false;
          }
        })
    }

    if (valid === true) {
      this.editUser();
    } else {
      this.setState({errorBoolean:true})
      return console.log("não podemos atualizar os dados:" + this.state.errors.nome);
    }
  }

  editUser = () => {
    let usuario = this.state.usuario;
    console.log(usuario)

    fetch(enderecoApi + "cliente/" + usuario.cpf, {
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
        "telefoneResidencial": usuario.telefoneResidencial,
        "telefoneComercial": usuario.telefoneComercial,
        "celular": usuario.celular,
        "email": usuario.email,
        "pis": usuario.pis,
        "carteira_trabalho": usuario.carteira_trabalho

      })
    })
      .then((response) => {
        if (response.status !== 200) {
          alert("Status: " + response.status)
          window.location.reload();
        } else {
          alert("Foi")
          this.props.handleClose();
        }
        return console.log(response);
      });
  }

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
                error={this.state.errors.nome !== '' ? true : false}
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
                disabled
                value={this.state.usuario.cpf}
                onChange={e => { this.handleChangeCpf(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="rg"
                label="RG*"
                margin="normal"
                type="text"
                disabled
                value={this.state.usuario.rg}
                onChange={e => { this.handleChangeRg(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="pis"
                label="Numero do PIS"
                margin="normal"
                type="text"
                error={this.state.errors.pis !== '' ? true : false}
                helperText={this.state.errors.pis !== '' ? this.state.errors.pis : ''}
                value={this.state.usuario.pis}
                onChange={e => { this.handleChangePis(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="carteira_trabalho"
                label="Numero da Carteira de Trabalho"
                margin="normal"
                type="text"
                error={this.state.errors.carteira_trabalho !== '' ? true : false}
                helperText={this.state.errors.carteira_trabalho !== '' ? this.state.errors.carteira_trabalho : ''}
                value={this.state.usuario.carteira_trabalho}
                onChange={e => { this.handleChangeCarteiraTrabalho(e) }}
                style={{ width: "100%" }}
              /><br />

              <p className="desc-cad marg-desc">Endereço</p>
              <TextField
                id="cep"
                label="CEP*"
                margin="normal"
                type="text"
                error={this.state.errors.cep !== '' ? true : false}
                helperText={this.state.errors.cep !== '' ? this.state.errors.cep : ''}
                value={this.state.usuario.cep}
                onChange={e => { this.handleChangeCep(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="logradouro"
                label="Bairro*"
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
                label="Rua*"
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

              <p className="desc-cad marg-desc">Contato</p>

              <TextField
                id="telefoneResidencial"
                label="Telefone Residencial*"
                margin="normal"
                type="text"
                error={this.state.errors.telefoneResidencial !== '' ? true : false}
                helperText={this.state.errors.telefoneResidencial !== '' ? this.state.errors.telefoneResidencial : ''}
                value={this.state.usuario.telefoneResidencial}
                onChange={e => { this.handleChangeTelefoneResidencial(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="telefoneComercial"
                label="Telefone Comercial*"
                margin="normal"
                type="text"
                error={this.state.errors.telefoneComercial !== '' ? true : false}
                helperText={this.state.errors.telefoneComercial !== '' ? this.state.errors.telefoneComercial : ''}
                value={this.state.usuario.telefoneComercial}
                onChange={e => { this.handleChangeTelefoneComercial(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="celular"
                label="Celular*"
                margin="normal"
                type="text"
                error={this.state.errors.celular !== '' ? true : false}
                helperText={this.state.errors.celular !== '' ? this.state.errors.celular : ''}
                value={this.state.usuario.celular}
                onChange={e => { this.handleChangeCelular(e) }}
                style={{ width: "100%" }}
              />

              <TextField
                id="email"
                label="E-mail*"
                margin="normal"
                type="email"
                error={this.state.errors.email !== '' ? true : false}
                helperText={this.state.errors.email !== '' ? this.state.errors.email : ''}
                value={this.state.usuario.email}
                onChange={e => { this.handleChangeEmail(e) }}
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

export default ModalEditarCliente;