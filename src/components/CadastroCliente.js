import React, { Component } from 'react';
import MenuLateral from './MenuLateral.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../css/cadastroCliente.css';
// import '../css/cadastro.css';

//const enderecoApi = "http://localhost:8080/"
//aaa
class CadastroCliente extends Component {

  constructor(props) {
    super(props)
    this.state = {
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
    };

  }

  // componentWillReceiveProps(newProps) {
  //     this.setState({modalState: newProps.modalState})
  // };

  handleChange = props => event => {
    this.setState({ [props]: event.target.value });
  };

  handleBack = ()  =>{
    window.location = "/cliente"
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let usuario = this.state.usuario;
    alert(usuario.nome)
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
  };
 
  render() {
    return (
      <div id="page-all">
        <MenuLateral />
        <div className="clientes-cadastro">
          <div>
            <p id="titulo-form">Cadastro de Cliente</p>
          </div>

          <form onSubmit={this.handleSubmit} className="form-style">

            <p className="desc-cad">Dados Pessoais</p>
            <TextField
              className="textfield-cli"
              id="nome"
              label="Nome*"
              margin="normal"
              type="text"
              value={this.state.nome}
              onChange = {this.handleChange('nome')}
              style={{ width: "90vw" }}
            />

            <TextField
              id="cpf"
              label="CPF*"
              margin="normal"
              type="text"
              value={this.state.cpf}
              onChange = {this.handleChange('cpf')}
              style={{ width: "30vw", paddingRight: '0px' }}
            />

            <TextField
              id="rg"
              label="RG*"
              margin="normal"
              type="text"
              value={this.state.rg}
              onChange = {this.handleChange('rg')}
              style={{ width: "30vw" }}
            />

            <TextField
              id="pis"
              label="Numero do PIS"
              margin="normal"
              type="text"
              value={this.state.pis}
              onChange = {this.handleChange('pis')}
              style={{ width: "90vw" }}
            />

            <TextField
              id="carteira_trabalho"
              label="Numero da Carteira de Trabalho"
              margin="normal"
              type="text"
              value={this.state.carteira_trabalho}
              style={{ width: "90vw" }}
            /><br />

            <p className="desc-cad marg-desc">Endereço</p>
            <TextField
              id="cep"
              label="CEP*"
              margin="normal"
              type="text"
              value={this.state.cep}
              onChange = {this.handleChange('cep')}
              style={{ width: "90vw" }}
            />

            <TextField
              id="logradouro"
              label="Logradouro*"
              margin="normal"
              type="text"
              value={this.state.logradouro}
              onChange = {this.handleChange('logradouro')}
              style={{ width: "90vw" }}
            />

            <TextField
              id="nomeRua"
              label="nomeRua*"
              margin="normal"
              type="text"
              value={this.state.nomeRua}
              onChange = {this.handleChange('nomeRua')}
              style={{ width: "90vw" }}
            />

            <TextField
              id="numero"
              label="Número*"
              margin="normal"
              type="text"
              value={this.state.numero}
              onChange = {this.handleChange('numero')}
              style={{ width: "15vw" }}
            />

            <TextField
              id="complemento"
              label="complemento*"
              margin="normal"
              type="text"
              value={this.state.complemento}
              onChange = {this.handleChange('complemento')}
              style={{ width: "60vw" }}
            />

            <TextField
              id="cidade"
              label="Cidade*"
              margin="normal"
              type="text"
              value={this.state.cidade}
              onChange = {this.handleChange('cidade')}
              style={{ width: "38vw" }}
            />

            <TextField
              id="UF"
              label="Estado*"
              margin="normal"
              type="text"
              value={this.state.UF}
              onChange = {this.handleChange('UF')}
              style={{ width: "15vw" }}
            />

            <p className="desc-cad marg-desc">Contato</p>

            <TextField
              id="telefoneResidencial"
              label="Telefone telefoneResidencial*"
              margin="normal"
              type="text"
              value={this.state.telefoneResidencial}
              onChange = {this.handleChange('telefoneResidencial')}
              style={{ width: "90vw" }}
            />

            <TextField
              id="telefoneComercial"
              label="Telefone telefoneComercial*"
              margin="normal"
              type="text"
              value={this.state.telefoneComercial}
              onChange = {this.handleChange('telefoneComercial')}
              style={{ width: "90vw" }}
            />

            <TextField
              id="celular"
              label="Celular*"
              margin="normal"
              type="text"
              value={this.state.celular}
              onChange = {this.handleChange('celular')}
              style={{ width: "90vw" }}
            />

            <TextField
              id="email"
              label="E-mail*"
              margin="normal"
              type="email"
              value={this.state.email}
              onChange = {this.handleChange('email')}
              style={{ width: "90vw" }}
            />

            <div id="buttons">
              <Button variant="contained" color="primary" className="btn" onClick={this.handleBack}>
                Cancelar
              </Button>

              <Button variant="contained" color="primary" className="btn" type="submit" value="Submit">
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