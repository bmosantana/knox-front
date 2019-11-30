import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./css/modalEditarcliente.css";


const enderecoApi = "https://knoxapp180120.herokuapp.com/";

class ModalVerMaisProcesso extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adm: '',
      tipofuncionario: ''
    }
  }

  handleDownloadPdf = () =>{
    window.open(this.props.usuario.url, '_blank');
  }
  
  render() {
    return (
      <div>
        <Dialog
          fullWidth={true}
          maxWidth={'sm'}
          open={this.props.vermaismodal}
          onClose={this.props.handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"

        >
          <DialogTitle id="scroll-dialog-title">{this.props.usuario.numeroProcesso}</DialogTitle>
          <DialogContent>
            <p className="desc-cad">Dados do Processo</p>

            <Typography component="p">
              Status do Processo: {this.props.usuario.status == "1" ? "Aberto / Em Andamento" : "Fechado"}
            </Typography>

            <Typography component="p">
              CPF do Cliente: {this.props.usuario.cpfCliente}
            </Typography>

            <Typography component="p">
              CPF do Advogado: {this.props.usuario.cpfAdvogado}
            </Typography>

            <Typography component="p">
              Classe: {this.props.usuario.classe}
            </Typography>

            <Typography component="p">
              Assunto: {this.props.usuario.assunto}
            </Typography>

            <Typography component="p">
              Juiz Responsavel: {this.props.usuario.juiz}
            </Typography>

            <Typography component="p">
              Local: {this.props.usuario.local}
            </Typography>

            <p className="desc-cad">PDF</p>
            <Button
              variant="contained"
              color="primary"
              className="btn"
              onClick={this.handleDownloadPdf}>
              Fazer Download
            </Button>

          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" className="btn" onClick={this.props.handleClose}>
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ModalVerMaisProcesso;