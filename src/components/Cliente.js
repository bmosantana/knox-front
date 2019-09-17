//Página de listagem / busca de clientes
import React, { Component } from 'react';
import MenuLateral from './MenuLateral.js';
import Fab from '@material-ui/core/Fab';
import './css/cliente.css'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Icon } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ModalCadastrarCliente from './ModalCadastrarCliente.js';
import IntercessoraListagemCliente from './IntercessoraListagemCliente.js';



const enderecoApi = "https://knoxapp180120.herokuapp.com/";

class Cliente extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tableData: [],
      modalStateAdd: false,
      editmodal: false,
      createmodal: false,
      open: false,
    }
    // // Bind, utilizado para o método enxergar o "this"
    // this.handleModal = this.handleModal.bind(this)
  }

  componentWillMount() {
    this.loadList();
  }

  // componentDidUpdate(){
  //   this.loadList();
  // }

  loadList() {
    let reverseList;
    fetch( enderecoApi + "cliente", {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => { 
      if(response.status !== 200){
        console.log("GET de CLIENTES falhou.")
      }else{
        console.log("GET realizado com SUCESSO.")
      }

      return response.json() })
    .then((resultado ) => {
      reverseList = resultado.reverse();
      this.setState({ tableData: reverseList })
    })
  }

  handlePesquisa = () => {
    alert("Pesquisa cliente")
  };

  handleVerMais = () => {
    alert("Ver mais")
  };

  handleEditar = () => {
    this.setState({ editmodal: !this.state.editmodal });
  };

  handleCriar = () => {
    this.setState({ createmodal: !this.state.createmodal });
  };

  handleCloseCadastrarCliente = () => {
    this.setState({createmodal: false});
  }

  handleCloseEditarCliente = () => {
    this.setState({editmodal: false});
  }


  render() {
    let listDisplay;
    if (this.state.tableData.length > 0) {
      listDisplay = <IntercessoraListagemCliente tableData={this.state.tableData} view={this.handleClick}></IntercessoraListagemCliente>
    }
    
    return (
      <div>
        <MenuLateral />

        <div id="none-box">
          <span id="name">Cliente</span>
        </div>

        <div className="clientes-page">
          {/* Campo de buscar e botão de adicionar */}
          <div id="campo-busca">
            <Input
              id="pesquisa"
              type={'text'}
              endAdornment={
                <InputAdornment position="end" >
                  <IconButton
                    aria-label="Mudar visualizacao campo"
                    onClick={this.handlePesquisa}
                  >
                    <Icon style={{ color: "black" }}>search</Icon>
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>

          {/* listagem de fato */}
            {listDisplay}

          {/* botão para cadastrar mais um cliente */}

          <div id="fab-add">
            <Fab color="primary" aria-label="Add" onClick={this.handleCriar}>
              <Icon>add</Icon>
            </Fab>
          </div>
        </div>

        <ModalCadastrarCliente handleClose={this.handleCloseCadastrarCliente} createmodal={this.state.createmodal} click={(() => {this.setState({ createmodal: !this.state.createmodal }) })}/>
      </div>

    )
  }
}

export default Cliente;