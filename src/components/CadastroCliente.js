import React, { Component } from 'react';
import MenuLateral from './MenuLateral.js';
import TextField from '@material-ui/core/TextField';
import '../css/CadastroCliente.css';


class CadastroCliente extends Component{
    
    constructor(props) {
        super(props)
        
    }

    // componentWillReceiveProps(newProps) {
    //     this.setState({modalState: newProps.modalState})
    // };

    handleSubmit = () =>{
      alert("cad")
    }

    render(){
        return (
          <div id="page-all">
            <MenuLateral/>
            
            <div className="clientes-cadastro">

              {/* Titulo da Página */}
              <div>
                <p id="titulo-form">Cadastro de Cliente</p>
              </div>
              
              {/* Inicio do Formulário */}
              <form method="get" onSubmit={this.handleSubmit}>
                {/* Div que contem os primeiros campos */}

                {/* Campo de Nome */}
                <TextField
                  className="textfield-cli"
                  id="nome"
                  label="Nome"
                  margin="normal"
                  type="text"
                  // value={this.props.nome}
                  // onChange={this.handleChange('email')}
                  style = {{width: "90vw"}}
                />

                <TextField
                  id="cpf"
                  label="CPF"
                  margin="normal"
                  type="text"
                  style = {{width: "30vw", paddingRight: '0px'}}
                />

                <TextField
                  id="rg"
                  label="RG"
                  margin="normal"
                  type="text"
                  style = {{width: "30vw"}}
                />

                <TextField
                  id="pis"
                  label="Numero do PIS"
                  margin="normal"
                  type="text"
                  style = {{width: "90vw"}}
                />

                <TextField
                  id="carteira-trabalho"
                  label="Numero da Carteira de Trabalho"
                  margin="normal"
                  type="text"
                  style = {{width: "90vw"}}
                />

                <TextField
                  id="logradouro"
                  label="Logradouro"
                  margin="normal"
                  type="text"
                  style = {{width: "90vw"}}
                />

                <TextField
                  id="logradouro"
                  label="Logradouro"
                  margin="normal"
                  type="text"
                  style = {{width: "90vw"}}
                />

              </form>
            </div>

          </div>
        )
    }
}

export default CadastroCliente;