import React, { Component } from 'react';
import MenuLateral from './MenuLateral.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../css/CadastroCliente.css';
// import '../css/cadastro.css';


class CadastroCliente extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeStep: 0,

      nome: "",
      cpf: "",
      rg: "",
      numeropis: "",
      numerocarteiratrabalho: "",

      cep: "",
      logradouro: "",
      rua: "",
      complemento: "",
      numero: "",
      cidade: "",
      uf: "",

      residencial: "",
      comercial: "",
      email: "",
      celular: ""
    };

  }

  // componentWillReceiveProps(newProps) {
  //     this.setState({modalState: newProps.modalState})
  // };

  handleChange = props => event => {
    this.setState({ [props]: event.target.value });
  };

  handleSubmit = () => {
    alert("cad")
  };

  render() {
    return (
      <div id="page-all">
        <MenuLateral />

        <div className="clientes-cadastro">

          {/* Titulo da Página */}
          <div>
            <p id="titulo-form">Cadastro de Cliente</p>
          </div>

          {/* Formulario de envio */}

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
              style={{ width: "90vw" }}
            />

            <TextField
              id="cpf"
              label="CPF*"
              margin="normal"
              type="text"
              value={this.state.cpf}
              style={{ width: "30vw", paddingRight: '0px' }}
            />

            <TextField
              id="rg"
              label="RG*"
              margin="normal"
              type="text"
              value={this.state.rg}
              style={{ width: "30vw" }}
            />

            <TextField
              id="pis"
              label="Numero do PIS"
              margin="normal"
              type="text"
              value={this.state.numeropis}
              style={{ width: "90vw" }}
            />

            <TextField
              id="carteira-trabalho"
              label="Numero da Carteira de Trabalho"
              margin="normal"
              type="text"
              value={this.state.numerocarteiratrabalho}
              style={{ width: "90vw" }}
            /><br />

            <p className="desc-cad marg-desc">Endereço</p>
            <TextField
              id="cep"
              label="CEP*"
              margin="normal"
              type="text"
              value={this.state.cep}
              style={{ width: "90vw" }}
            />

            <TextField
              id="logradouro"
              label="Logradouro*"
              margin="normal"
              type="text"
              value={this.state.logradouro}
              style={{ width: "90vw" }}
            />

            <TextField
              id="rua"
              label="Rua*"
              margin="normal"
              type="text"
              value={this.state.rua}
              style={{ width: "90vw" }}
            />

            <TextField
              id="numero"
              label="Número*"
              margin="normal"
              type="text"
              value={this.state.numero}
              style={{ width: "15vw" }}
            />

            <TextField
              id="complemento"
              label="Complemento*"
              margin="normal"
              type="text"
              value={this.state.complemento}
              style={{ width: "60vw" }}
            />

            <TextField
              id="cidade"
              label="Cidade*"
              margin="normal"
              type="text"
              value={this.state.cidade}
              style={{ width: "38vw" }}
            />

            <TextField
              id="uf"
              label="Estado*"
              margin="normal"
              type="text"
              value={this.state.uf}
              style={{ width: "15vw" }}
            />

            <p className="desc-cad marg-desc">Contato</p>

            <TextField
              id="residencial"
              label="Telefone Residencial*"
              margin="normal"
              type="text"
              value={this.state.residencial}
              style={{ width: "90vw" }}
            />

            <TextField
              id="comercial"
              label="Telefone Comercial*"
              margin="normal"
              type="text"
              value={this.state.comercial}
              style={{ width: "90vw" }}
            />

            <TextField
              id="celular"
              label="Celular*"
              margin="normal"
              type="text"
              value={this.state.celular}
              style={{ width: "90vw" }}
            />

            <TextField
              id="email"
              label="E-mail*"
              margin="normal"
              type="email"
              value={this.state.email}
              style={{ width: "90vw" }}
            />

            <div id="buttons">
              <Button variant="contained" color="primary" className="btn">
                Voltar
              </Button>

              <Button variant="contained" color="primary" className="btn">
                Enviar
              </Button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default CadastroCliente;