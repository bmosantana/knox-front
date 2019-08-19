import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Icon from '@material-ui/core/Icon';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import './css/header.css';
import avatar from '../imagens/avatar.png'

class Header extends Component{
    constructor(props) {
        super(props)
    }

    handleOpen = () => {
        alert("Minha conta")
    };

    handleSair = () => {
        alert("Saiu")
    }

    render(){
        return (
            <Toolbar
                className = "tollbar"   id="header"
            >
                {/* parte do logo */}
                <ToolbarGroup>
                    <div className="hidden-md">
                        {/* botao do logo (n sei pq um botão) */}
                        <FlatButton backgroundColor="#302e5b" onClick={this.props.handleClick} 
                            label={"logo"} 
                            style={{ margin: 5, color: "white" }} />
                    </div>
                    
                </ToolbarGroup>

                <ToolbarGroup id="user-settings">
                    <IconMenu
                        style={{ color: "white" }}
                        iconButtonElement={
                            <div style={{ width: "100%", cursor: "pointer" }}>
                                <img src={avatar} className="avatar" />
                            </div>
                        }

                    >
                        <MenuItem primaryText="Minha Conta" onClick={this.handleOpen} />
                        {/* <MenuItem primaryText="Ajuda" onClick={this.handleOpenHelp}/> */}
                        <MenuItem primaryText="Sair" onClick={this.handleSair} />
                    </IconMenu>

                    {/* <h3 style={{ fontSize: 30, color: "white", cursor: "pointer",marginLeft: 15 }} onClick={this.handleOpenHelp}>?</h3> */}
                </ToolbarGroup>



                {/* <ModalUsuario modalState={this.state.modalState} click={this.handleOpen} />
                <ModalHelp modalState={this.state.modalStateHelp} click={this.handleOpenHelp} /> */}
               
            </Toolbar>
        )
    }
}

export default Header;