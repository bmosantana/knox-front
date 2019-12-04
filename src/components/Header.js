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
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Logo from '../imagens/logo_branco.png'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '{{email}}'
        }
    }

    componentWillMount() {
        let emailLogado = JSON.parse(localStorage.getItem("email"));
        this.setState({ email: emailLogado });
    }

    handleOpen = () => {
        alert("Minha conta")
    };

    handleSair = () => {
        window.localStorage.clear();
        window.location.href = "/"
    }

    render() {
        return (
            <div>
                <div className="tollbar-wrapper"></div>
                <Toolbar
                    className="tollbar" id="header"
                >
                    <ToolbarGroup></ToolbarGroup>

                    <ToolbarGroup id="user-settings">
                        <IconMenu
                            style={{ color: "white" }}
                            iconButtonElement={
                                <div style={{ width: "100%", cursor: "pointer", display: "flex" }}>
                                    <AccountCircleIcon></AccountCircleIcon> Olá, {this.state.email} <ArrowDropDownIcon></ArrowDropDownIcon>
                                </div>
                            }

                        >
                            {/* <MenuItem primaryText="Minha Conta" onClick={this.handleOpen} /> */}
                            {/* <MenuItem primaryText="Ajuda" onClick={this.handleOpenHelp}/> */}
                            <MenuItem primaryText="Sair" onClick={this.handleSair} />
                        </IconMenu>

                        {/* <h3 style={{ fontSize: 30, color: "white", cursor: "pointer",marginLeft: 15 }} onClick={this.handleOpenHelp}>?</h3> */}
                    </ToolbarGroup>



                    {/* <ModalUsuario modalState={this.state.modalState} click={this.handleOpen} />
                <ModalHelp modalState={this.state.modalStateHelp} click={this.handleOpenHelp} /> */}

                </Toolbar>
            </div>
        )
    }
}

export default Header;