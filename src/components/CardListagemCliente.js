//Página de listagem / busca de clientes
import React, { Component } from 'react';
import './css/cliente.css'
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ModalEditarCliente from './ModalEditarCliente.js';
import ModalVerMais from './ModalVerMais.js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const enderecoApi = "https://knoxapp180120.herokuapp.com/";

class CardListagemCliente extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalDeleteCliente: false,
      editmodal: false,
      vermaismodal: false,
      open: false,
      usuario: {
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
    }
    // // Bind, utilizado para o método enxergar o "this"
    // this.handleModal = this.handleModal.bind(this)
  }


  handleCallDeleteApi = () => {
    fetch(enderecoApi + "cliente/" + this.props.cliente.cpf , {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log("Erro ao tentar Excluir")
        } else {
          console.log("Excluido com sucesso")
          window.location.reload();
        }

        return response.json()
      })
      .then((resultado => this.setState({ tableData: resultado })));
  }


  handleVerMais = () => {
    this.setState({ vermaismodal: !this.state.vermaismodal });
  };

  handleEditar = () => {
    this.setState({ editmodal: !this.state.editmodal });
  };

  handleModalDelete = () => {
    this.setState({ modalDeleteCliente: !this.state.modalDeleteCliente });
  };

  handleCloseEditar = () => {
    this.setState({ editmodal: false });
  }

  handleCloseVerMais = () => {
    this.setState({ vermaismodal: false });
  }


  render() {
    return (
      <div>
        <div className="clientes-page">
          {/* listagem de fato */}
          <div id="lista-clientes">
            <Card style={{ width: "50vw" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.cliente.nome}
                </Typography>

                <Typography component="p">
                  E-mail: {this.props.cliente.email}
                </Typography>

                <Typography component="p">
                  Telefone Comercial: {this.props.cliente.telefoneComercial}
                </Typography>
              </CardContent>
              <CardActions id="acoes-card">
                <IconButton
                  aria-label="Mudar visualizacao campo"
                  onClick={this.handleVerMais}
                >
                  <Icon style={{ color: "black" }}>visibility</Icon>
                </IconButton>

                <IconButton
                  aria-label="Mudar visualizacao campo"
                  onClick={this.handleEditar}
                >
                  <Icon style={{ color: "black" }}>edit</Icon>
                </IconButton>

                <IconButton
                  aria-label="Mudar visualizacao campo"
                  onClick={this.handleModalDelete}
                >
                  <Icon style={{ color: "black" }}>delete</Icon>
                </IconButton>
              </CardActions>
            </Card>
          </div>

        </div>

        {/* Dialogo que abre para verificar se o usuario deseja realmente deletar o cliente */}
        <Dialog
          open={this.state.modalDeleteCliente}
          onClose={this.handleModalDelete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Deseja realmente deletar esse Cliente?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Após esse cliente ser deletado você não poderá mais busca-lo na sua listagem, e nem atribuir eventos a ele.
                      </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCallDeleteApi} color="primary">
              SIM
                      </Button>
            <Button onClick={this.handleModalDelete} color="primary" autoFocus>
              NÃO
                      </Button>
          </DialogActions>
        </Dialog>

        <ModalEditarCliente usuario={this.props.cliente} handleClose={this.handleCloseEditar} editmodal={this.state.editmodal} click={(() => { this.setState({ editmodal: !this.state.editmodal }) })} />
        <ModalVerMais usuario={this.props.cliente} handleClose={this.handleCloseVerMais} vermaismodal={this.state.vermaismodal} click={(() => { this.setState({ vermaismodal: !this.state.vermaismodal }) })} />

      </div>
    )
  }
}

export default CardListagemCliente;