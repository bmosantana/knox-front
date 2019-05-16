import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ModalEditarCliente extends Component {
    constructor(props) {
        super(props)
        this.state={
            editmodal: false,
        }        
    }

    handleClose = () =>{
        this.setState({editmodal: !this.state.editmodal});
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.state.editmodal}
                    onClose={this.handleClose}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"
                >
                    <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        t rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
                        sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={this.handleClose} color="primary">
                        Subscribe
                      </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ModalEditarCliente;