import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../css/ModalCadastroCliente.css'


class ModalCadastroCliente extends Component{
    
    constructor(props) {
        super(props)
        this.state={
            modalState: this.props.modalState,
        }
    }

    handleClickOpen = () => {
        this.setState({ modalState: true });
    };
    
    handleClose = () => {
      this.setState({ modalState: false });
    };

    componentWillReceiveProps(newProps) {
        this.setState({modalState: newProps.modalState})
    };

    render(){
        return (
            <div>
                <Dialog
                  open={this.state.modalState}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Cadastro de Cliente</DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Address"
                      type="email"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                      Salvar
                    </Button>
                  </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default ModalCadastroCliente;