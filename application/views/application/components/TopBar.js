import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import { logout } from 'libraries/session';


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
                                to="/my_trades">
                                My Trades
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/profile">
                                Profile
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="/settings">
                                Settings
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    logout();
                                }}>
                                Log out
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default TopBar;
