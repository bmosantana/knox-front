import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Icon from '@material-ui/core/Icon';
// import avatar from '../imagens/avatar.png';
// import IconMenu from 'material-ui/IconMenu';
import './css/menuLateral.css';

const enderecoApi = "http://knoxapp180120.herokuapp.com/";

class MenuLateral extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let cpfLogado = localStorage.getItem("cpf");
        let emailLogado = localStorage.getItem("email");
        if (cpfLogado && emailLogado) {
            this.loadLogado(cpfLogado);
        } else {
            window.location.href = "/"
        }

    }

    loadLogado(cpf) {
        var cpfLog = cpf.replace(/[\\"]/g, '');
        console.log(cpfLog)
        fetch(enderecoApi + "funcionario/" + cpfLog, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.status !== 200) {
                    localStorage.removeItem("email");
                    localStorage.removeItem("cpf");
                    localStorage.removeItem("senha");
                    window.location.href = "/"
                } else {
                    return console.log("há uma pessoa logada!")
                }

                return response.json()
            });

    }

    render() {
        return (
            <Drawer open={this.props.collapsed} containerStyle={{ paddingTop: "70px", backgroundColor: "#8a2be2", width: "auto", overflow: "hidden" }} className="menu">
                <NavLink
                    exact
                    to="/dashboard"
                    activeClassName="active"

                >
                    <MenuItem style={{ color: "white" }} innerDivStyle={{ marginTop: "20px", paddingTop: "20px" }}>
                        <Icon>home</Icon>
                    </MenuItem>
                </NavLink>
                <NavLink
                    exact
                    to="/cliente"
                    activeClassName="active"
                >
                    <MenuItem style={{ color: "white" }} innerDivStyle={{ marginTop: "20px", paddingTop: "20px" }}>
                        <Icon>how_to_reg</Icon>
                    </MenuItem>
                </NavLink>
                <NavLink
                    exact
                    to="/funcionario"
                    activeClassName="active"
                >
                    <MenuItem style={{ color: "white" }} innerDivStyle={{ marginTop: "20px", paddingTop: "20px" }}>
                        <Icon>supervisor_account</Icon>
                    </MenuItem>
                </NavLink>
                <NavLink
                    exact
                    to="/processos"
                    activeClassName="active"
                >
                    <MenuItem style={{ color: "white" }} innerDivStyle={{ marginTop: "20px", paddingTop: "20px" }}>
                        <Icon>assignment</Icon>
                    </MenuItem>
                </NavLink>

                <ReactTooltip />
            </Drawer>
        );
    }
}

export default MenuLateral;