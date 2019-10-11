import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./css/modalEditarcliente.css";


const enderecoApi = "https://knoxapp180120.herokuapp.com/";

class ModalVerMais extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: {}
    }
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
          <DialogTitle id="scroll-dialog-title">{this.props.usuario.nome}</DialogTitle>
          <DialogContent>
            <p className="desc-cad">Dados Pessoais</p>

            <Typography component="p">
              CPF: {this.props.usuario.cpf}
            </Typography>

            <Typography component="p">
              RG: {this.props.usuario.rg}
            </Typography>

            <p className="desc-cad">Informações de Acesso</p>
            <Typography component="p">
              E-mail: {this.props.usuario.email}
            </Typography>

            <Typography component="p">
              Tipo de Funcionário: {this.props.usuario.tipofuncionario}
            </Typography>

            <Typography component="p">
              É Administrador: {this.props.usuario.adm}
            </Typography>

            <Typography component="p">
              Cargo: {this.props.usuario.cargo}
            </Typography>

            <p className="desc-cad">Contatos</p>

            <Typography component="p">
              Celular: {this.props.usuario.celular}
            </Typography>

            <Typography component="p">
              Telfone: {this.props.usuario.telefone}
            </Typography>



            <p className="desc-cad">Endereço</p>

            <Typography component="p">
              CEP: {this.props.usuario.cep}
            </Typography>

            <Typography component="p">
              Logradouro: {this.props.usuario.logradouro}
            </Typography>

            <Typography component="p">
              Nome Rua: {this.props.usuario.nomeRua}
            </Typography>

            <Typography component="p">
              Número: {this.props.usuario.numero}
            </Typography>

            <Typography component="p">
              Complemento: {this.props.usuario.complemento}
            </Typography>

            <Typography component="p">
              Cidade: {this.props.usuario.cidade}
            </Typography>

            <Typography component="p">
              Estado: {this.props.usuario.UF}
            </Typography>


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

export default ModalVerMais;