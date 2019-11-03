import React, { Component } from 'react';
import CardListagemProcessos from './CardListagemProcessos.js';

class IntercessoraListagemProcessos extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="produtos-cards" style={{display: "flex", flexWrap: "wrap",justifyContent: "space-between"}}>
                {this.props.tableData.map((row, index) => (
                    <CardListagemProcessos processo={row} view={this.props.view} key={index}></CardListagemProcessos>
                ))}
            </div>
        )
    }
}

export default IntercessoraListagemProcessos;