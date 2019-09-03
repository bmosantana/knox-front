//Página de listagem / busca de clientes
import React, { Component } from 'react';
import MenuLateral from './MenuLateral.js';
import Fab from '@material-ui/core/Fab';
import './css/cliente.css'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Icon } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ModalEditarCliente from './ModalEditarCliente.js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ModalCadastrarCliente from './ModalCadastrarCliente.js';


class Cliente extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalStateAdd: false,
      editmodal: false,
      createmodal: false,
      open: false,
    }
    // // Bind, utilizado para o método enxergar o "this"
    // this.handleModal = this.handleModal.bind(this)
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

  handleDeletar = () => {
    alert("Deletar")
  };

  handleModalDelete = () => {
    this.setState({ modalStateAdd: !this.state.modalStateAdd });
  };

  handlePage = () => {
    window.location.href = "/cadastroCliente"
  };

  handleCloseCadastrarCliente = () => {
    this.setState({createmodal: false});
  }

  handleCloseEditarCliente = () => {
    this.setState({editmodal: false});
  }


  render() {
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
          <div id="lista-clientes">
            <Card style={{ width: "50vw" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Ana Clara Souza
                              </Typography>

                <Typography component="p">
                  E-mail: ana@clara.com.br
                              </Typography>

                <Typography component="p">
                  Telefone: (11) 1234-56789
                              </Typography>

              </CardContent>
              <CardActions id="acoes-card">
                <IconButton
                  aria-label="Mudar visualizacao campo"
                  onClick={this.handleVerMais}
                >
                  <Icon style={{ color: "black" }}>more_vert</Icon>
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

          <div id="lista-clientes">
            <Card style={{ width: "50vw" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Ligia Duarte
                              </Typography>

                <Typography component="p">
                  E-mail: ligia@duarte.com.br
                              </Typography>

                <Typography component="p">
                  Telefone: (11) 1234-56789
                              </Typography>

              </CardContent>
              <CardActions id="acoes-card">
                <IconButton
                  aria-label="Mudar visualizacao campo"
                  onClick={this.handleVerMais}
                >
                  <Icon style={{ color: "black" }}>more_vert</Icon>
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

          {/* botão para cadastrar mais um cliente */}
          <div id="fab-add">
            <Fab color="primary" aria-label="Add" onClick={this.handleCriar}>
              <Icon>add</Icon>
            </Fab>
          </div>
        </div>

        {/* Dialogo que abre para verificar se o usuario deseja realmente deletar o cliente */}
        <Dialog
          open={this.state.modalStateAdd}
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
            <Button onClick={this.handleModalDelete} color="primary">
              SIM
                      </Button>
            <Button onClick={this.handleModalDelete} color="primary" autoFocus>
              NÃO
                      </Button>
          </DialogActions>
        </Dialog>

        <ModalEditarCliente  handleClose={this.handleCloseEditarCliente} editmodal={this.state.editmodal} click={(() => {this.setState({ editmodal: !this.state.editmodal }) }) }/>
        <ModalCadastrarCliente handleClose={this.handleCloseCadastrarCliente} createmodal={this.state.createmodal} click={(() => {this.setState({ createmodal: !this.state.createmodal }) })}/>
      </div>

    )
  }
}

export default Cliente;