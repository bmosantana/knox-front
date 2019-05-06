import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Icon from '@material-ui/core/Icon';
import avatar from '../imagens/avatar.png';
import IconMenu from 'material-ui/IconMenu';
import '../css/MenuLateral.css';


class MenuLateral extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Drawer open={this.props.collapsed} containerStyle={{ paddingTop: "70px", backgroundColor: "#8a2be2", width: "auto", overflow: "hidden" }} className="menu">
                <NavLink
                    exact
                    to="/"
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
                        <Icon>supervisor_account</Icon>
                    </MenuItem>
                </NavLink>

                <ReactTooltip />
            </Drawer>
        );
    }
}

export default MenuLateral;