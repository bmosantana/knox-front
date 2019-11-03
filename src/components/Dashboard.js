import React, { Component } from 'react';
import MenuLateral from './MenuLateral.js';
import { Icon } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ModalCadastrarProcesso from './ModalCadastrarProcesso.js';
import IntercessoraListagemProcessos from './IntercessoraListagemProcessos.js';
import './css/dash.css';

const enderecoApi = "https://knoxapp180120.herokuapp.com/";

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: '',
      cpf: '',
      email: '',

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
    let cpfLogado = localStorage.getItem("cpf");
    let emailLogado = localStorage.getItem("email");
    if (cpfLogado && emailLogado) {
      this.loadLogado(cpfLogado);
    } else {
      return console.log("Não é possivel achar o usuário logado!")
    }

    this.loadListaProcessos();

  }

  loadLogado(cpf) {
    var cpfLog = cpf.replace(/[\\"]/g, '');
    console.log(cpfLog)
    fetch(enderecoApi + "funcionario/" + cpfLog, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log("GET de Funcionario falhou.")
        } else {
          console.log("GET de FUNCIONARIO realizado com SUCESSO.")
        }

        return response.json()
      })
      .then((resultado) => {

        let nome = resultado[0].nome;
        this.setState({ usuario: nome });
        console.log(this.state.usuario);
      });

  }

  loadListaProcessos() {
    let reverseList;
    fetch(enderecoApi + "processo/", {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log("GET de PROCESSOS falhou.")
        } else {
          console.log("GET realizado com SUCESSO.")
        }

        return response.json()
      })
      .then((resultado) => {
        reverseList = resultado.reverse();
        this.setState({ tableData: reverseList, resultadoBusca: reverseList })
        console.log("R: " + resultado)
      });

    console.log(this.state.tableData)
  }

  handleSair = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("cpf");
    localStorage.removeItem("senha");
    window.location.href = "/"
  }

  handleChangeBusca = (event) => {
    this.setState({ busca: event.target.value });
  };

  handlePesquisa = () => {
    let buscados = this.state.tableData.filter(obj => obj.nome.toLowerCase().indexOf(this.state.busca.toLowerCase()) > -1);
    this.setState({ resultadoBusca: buscados });
  };

  handleCriar = () => {
    this.setState({ createmodal: !this.state.createmodal });
  };


  render() {
    let listDisplay;
    if (this.state.tableData.length > 0) {
      listDisplay = <IntercessoraListagemProcessos tableData={this.state.resultadoBusca} view={this.handleClick}></IntercessoraListagemProcessos>
    } else {
      listDisplay = < div id="none-box" >
        <span id="name">Não há clientes cadastrados.</span>
      </div >
    }

    return (
      <div id="page-all">
        <MenuLateral />

        <div className="main-dash">
          <div className="titulo-dash">
            <div className="apresentacao">
              <p id="titulo-form">Bem-Vindo ao Knox, <span id="name">{this.state.usuario}</span></p>
            </div>
            <div className="sair">
              <p onClick={this.handleSair}>sair</p>
            </div>
          </div>

          <div id="alls">
            <div>
              {listDisplay}
            </div>

          </div>

        </div>


        <div id="fab-add">
          <Fab color="primary" aria-label="Add" onClick={this.handleCriar}>
            <Icon>add</Icon>
          </Fab>
        </div>

        <ModalCadastrarProcesso handleClose={this.handleCriar} createmodal={this.state.createmodal} click={(() => { this.setState({ createmodal: !this.state.createmodal }) })} />
      </div>
    );
  }
}

export default Dashboard;