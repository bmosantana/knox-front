//Página de listagem / busca de clientes
import React, { Component } from 'react';
import MenuLateral from './MenuLateral.js';
import Fab from '@material-ui/core/Fab';
import './css/cliente.css'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Icon } from '@material-ui/core';
import ModalCadastrarCliente from './ModalCadastrarCliente.js';
import IntercessoraListagemCliente from './IntercessoraListagemCliente.js';



const enderecoApi = "https://knoxapp180120.herokuapp.com/";

class Cliente extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tableData: [],
      resultadoBusca: [],
      modalStateAdd: false,
      editmodal: false,
      createmodal: false,
      open: false,
      busca: ""
    }
  }

  componentWillMount() {
    this.loadList();
  }

  loadList() {
    let reverseList;
    fetch(enderecoApi + "cliente", {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log("GET de CLIENTES falhou.")
        } else {
          console.log("GET realizado com SUCESSO.")
        }

        return response.json()
      })
      .then((resultado) => {
        reverseList = resultado.reverse();
        this.setState({ tableData: reverseList, resultadoBusca: reverseList })
      })
  }

  handleChangeBusca = (event) => {
    this.setState({ busca: event.target.value });
  };

  handlePesquisa = () => {
    let buscados = this.state.tableData.filter(obj => obj.nome.toLowerCase().indexOf(this.state.busca.toLowerCase()) > -1);
    this.setState({ resultadoBusca: buscados });
  };

  handleEditar = () => {
    this.setState({ editmodal: !this.state.editmodal });
  };

  handleCriar = () => {
    this.setState({ createmodal: !this.state.createmodal });
  };

  handleCloseCadastrarCliente = () => {
    this.setState({ createmodal: false });
  }

  render() {
    let listDisplay;
    if (this.state.tableData.length > 0) {
      listDisplay = <IntercessoraListagemCliente tableData={this.state.resultadoBusca} view={this.handleClick}></IntercessoraListagemCliente>
    }

    return (
      <div>
        <MenuLateral />

        <div id="none-box">
          <span id="name">Meus Clientes</span>
        </div>

        <div className="clientes-page">
          {/* Campo de buscar e botão de adicionar */}
          <div id="campo-busca">
            <Input
              placeholder="Digite o nome do CLIENTE que procura"
              id="pesquisa"
              type={'text'}
              onChange={this.handleChangeBusca}
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

        </div>

        <div id="fab-add">
          <Fab color="primary" aria-label="Add" onClick={this.handleCriar}>
            <Icon>add</Icon>
          </Fab>
        </div>

        <ModalCadastrarCliente handleClose={this.handleCloseCadastrarCliente} createmodal={this.state.createmodal} click={(() => { this.setState({ createmodal: !this.state.createmodal }) })} />
      </div>

    )
  }
}

export default Cliente;