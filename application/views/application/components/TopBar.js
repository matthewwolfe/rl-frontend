import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    NavbarToggler,
    UncontrolledDropdown
} from 'reactstrap';
import { logout } from 'libraries/session';
import { MessagesCount } from 'views/messages';


@inject('application')
@observer
class TopBar extends Component {

    state = {
        isOpen: false
    };

    render() {
        return (
            <Navbar
                color="dark"
                expand="md"
                dark>

                <NavbarBrand
                    className="mr-5"
                    tag={Link}
                    to="/">
                    RL Trader
                </NavbarBrand>

                <NavbarToggler onClick={() => this.setState({isOpen: !this.state.isOpen})} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/trading">
                                Trading
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/inventory">
                                Inventory
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/items">
                                Item Database
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/trading/build">
                                New Trade
                            </NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Account
                            </DropdownToggle>

                            <DropdownMenu className="mt-3" right>
                                <DropdownItem
                                    tag={Link}
                                    to="/my_trades">
                                    My Trades
                                </DropdownItem>

                                <DropdownItem
                                    tag={Link}
                                    to="/settings">
                                    Settings
                                </DropdownItem>

                                <DropdownItem
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        logout();
                                    }}>
                                    Log out
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/messages">
                                <MessagesCount />
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default TopBar;
