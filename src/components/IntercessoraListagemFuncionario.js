import React, { Component } from 'react';
import CardListagemFuncionario from './CardListagemFuncionario.js';

class IntercessoraListagemFuncionario extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="produtos-cards" style={{display: "flex", flexWrap: "wrap",justifyContent: "space-between"}}>
                {this.props.tableData.map((row, index) => (
                    <CardListagemFuncionario funcionario={row} view={this.props.view} key={index}></CardListagemFuncionario>
                ))}
            </div>
        )
    }
}

export default IntercessoraListagemFuncionario;