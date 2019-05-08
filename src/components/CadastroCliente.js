import React, { Component } from 'react';
import MenuLateral from './MenuLateral.js';
import FormControl from '@material-ui/core/FormControl';
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
                <div>
                  <p id="titulo-form">Cadastro de Cliente</p>
                </div>
              <FormControl id="form-control" method="get" onSubmit={this.handleSubmit}>
              <TextField
                  id="usuario"
                  label="Usuário"
                  margin="normal"
              />

              <TextField
                  id="usuario"
                  label="Usuário"
                  margin="normal"
              />
              </FormControl>
            </div>

          </div>
        )
    }
}

export default CadastroCliente;