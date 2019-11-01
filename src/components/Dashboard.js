import React, { Component } from 'react';
import MenuLateral from './MenuLateral.js';
import { Icon } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import './css/dash.css';

const enderecoApi = "http://knoxapp180120.herokuapp.com/";

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: '',
      cpf: '',
      email: ''
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
          console.log("GET de CLIENTES falhou.")
        } else {
          console.log("GET realizado com SUCESSO.")
        }

        return response.json()
      })
      .then((resultado) => {

        let nome = resultado[0].nome;
        this.setState({ usuario: nome });
        console.log(this.state.usuario);
      });

  }

  handleSair = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("cpf");
    localStorage.removeItem("senha");
    window.location.href = "/"
  }

  render() {
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
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Processo Nome
                                      </Typography>

                  <Typography component="p">
                    
                                      </Typography>

                  <Typography component="p">
                    Local: Fórum Criminal da Barra Funda
                                      </Typography>

                  <Typography component="p">
                    Telefone: (11) 1234-56789
                                      </Typography>

                  <Typography component="p">
                    Participantes: Julia Ribeiro
                                      </Typography>

                </CardContent>

              </Card>
            </div>
           
          </div>

        </div>


        <div id="fab-add">
          <Fab color="primary" aria-label="Add" onClick={this.handlePage}>
            <Icon>add</Icon>
          </Fab>
        </div>

      </div>
    );
  }
}

export default Dashboard;