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
import ModalEditarProcesso from './ModalEditarProcesso.js';
import ModalVerMaisProcesso from './ModalVerMaisProcesso.js';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const enderecoApi = "https://knoxapp180120.herokuapp.com/";

class CardListagemProcessos extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalDeleteProcesso: false,
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
    fetch(enderecoApi + "processo/" + this.props.processo.numeroProcesso , {
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
    this.setState({ modalDeleteProcesso: !this.state.modalDeleteProcesso });
  };

  handleCloseEditar = () => {
    this.setState({ editmodal: false });
  }

  handleCloseVerMais = () => {
    this.setState({ vermaismodal: false });
  }


  render() {
    return (
      <div className="card">
          {/* listagem de fato */}
          <div id="lista-clientes">
            <Card style={{ width: "100%" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.processo.assunto}
                </Typography>

                <Typography component="p">
                  Classe: {this.props.processo.classe}
                </Typography>

                <Typography component="p">
                  Número de processo: {this.props.processo.numeroProcesso}
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

        {/* Dialogo que abre para verificar se o usuario deseja realmente deletar o cliente */}
        <Dialog
          open={this.state.modalDeleteProcesso}
          onClose={this.handleModalDelete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Deseja realmente deletar esse Processo?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Após esse processo ser deletado você não poderá mais busca-lo na sua listagem, e nem atribuir eventos a ele.
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

        <ModalEditarProcesso usuario={this.props.processo} handleClose={this.handleCloseEditar} editmodal={this.state.editmodal} click={(() => { this.setState({ editmodal: !this.state.editmodal }) })} />
        <ModalVerMaisProcesso usuario={this.props.processo} handleClose={this.handleCloseVerMais} vermaismodal={this.state.vermaismodal} click={(() => { this.setState({ vermaismodal: !this.state.vermaismodal }) })} />

      </div>
    )
  }
}

export default CardListagemProcessos;