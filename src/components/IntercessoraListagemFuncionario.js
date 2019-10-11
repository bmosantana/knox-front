import React, { Component } from 'react';
import CardListagemCliente from './CardListagemCliente.js';

class IntercessoraListagemCliente extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="produtos-cards" style={{display: "flex", flexWrap: "wrap",justifyContent: "space-between"}}>
                {this.props.tableData.map((row, index) => (
                    <CardListagemCliente funcionario={row} view={this.props.view} key={index}></CardListagemCliente>
                ))}
            </div>
        )
    }
}

export default IntercessoraListagemCliente;