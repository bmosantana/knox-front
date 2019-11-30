//Página de listagem / busca de clientes
import React, { Component } from 'react';
import MenuLateral from './MenuLateral.js';
import Fab from '@material-ui/core/Fab';
import './css/cliente.css'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Icon } from '@material-ui/core';
import ModalCadastrarProcesso from './ModalCadastrarProcesso.js';
import IntercessoraListagemProcessos from './IntercessoraListagemProcessos.js';

import './css/dash.css';

const enderecoApi = "http://knoxapp180120.herokuapp.com/";

class Processos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tableData: [],
            resultadoBusca: [],
            modalStateAdd: false,
            editmodal: false,
            createmodal: false,
            open: false,
            busca: ""
        }
    }

    componentWillMount() {
        this.loadList();
    }

    loadList() {
        let reverseList;
        fetch(enderecoApi + "processo/", {
            method: "GET"
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
                reverseList = resultado.reverse();
                this.setState({ tableData: resultado, resultadoBusca: resultado })
            });
    }

    handleChangeBusca = (event) => {
        this.setState({ busca: event.target.value });
    };

    handlePesquisa = () => {
        let buscados = this.state.tableData.filter(obj => obj.numeroProcesso.toLowerCase().indexOf(this.state.busca.toLowerCase()) > -1);
        this.setState({ resultadoBusca: buscados });
    };

    handleEditar = () => {
        this.setState({ editmodal: !this.state.editmodal });
    };

    handleCriar = () => {
        this.setState({ createmodal: !this.state.createmodal });
    };

    handleCloseCadastrarCliente = () => {
        this.setState({ createmodal: false });
    }

    render() {
        let listDisplay;
        if (this.state.tableData.length > 0) {
            listDisplay = <IntercessoraListagemProcessos tableData={this.state.resultadoBusca} view={this.handleClick}></IntercessoraListagemProcessos>
        } else {
            listDisplay = <div id="none-box">
            <span id="name">Não há Processos cadastrados.</span>
          </div>
        }

        return (
            <div>
                <MenuLateral />

                <div id="none-box">
                    <span id="name">Meus Processos</span>
                </div>

                <div className="clientes-page">
                    {/* Campo de buscar e botão de adicionar */}
                    <div id="campo-busca">
                        <Input
                            placeholder="Digite o Número do Processo que procura"
                            id="pesquisa"
                            type={'text'}
                            onChange={this.handleChangeBusca}
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
                    {listDisplay}

                    {/* botão para cadastrar mais um cliente */}

                </div>

                <div id="fab-add">
                    <Fab color="primary" aria-label="Add" onClick={this.handleCriar}>
                        <Icon>add</Icon>
                    </Fab>
                </div>

                <ModalCadastrarProcesso handleClose={this.handleCloseCadastrarCliente} createmodal={this.state.createmodal} click={(() => { this.setState({ createmodal: !this.state.createmodal }) })} />
            </div>

        )
    }
}

export default Processos;