import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import { Component } from 'react';
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';

type oidc = {
    isLoadingUser?: any;
    user: any;
}

type State = {
    isOpen: boolean;
}

interface Props {
    oidc: oidc;
}

class NavMenu extends React.Component<{oidc: oidc}, { isOpen: boolean }>{
   
    constructor(props: any) {
        super(props);
    }

    public state = {
        isOpen: false
    };

    public render() {
        return (
            <header>
                    <Navbar className="navbar-dark bg-dark navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3 nes-container is-dark is-rounded" light>
                        <Container>
                            <NavbarBrand tag={Link} to="/" style={{ color: "white" }}>-Damnation-</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} className="mr-2"/>

                            {this.props.oidc.user ? (
                                <Collapse className="justify-content-center">
                                    <div>
                                        Signed in as:{" "}
                                        <a href="#login">
                                            {this.props.oidc.user ? this.props.oidc.user.profile.unique_name : ""}
                                        </a>
                                    </div>
                                </Collapse>
                            ) : null}

                            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                                <ul className="navbar-nav flex-grow">
                                    <NavItem>
                                        <NavLink tag={Link} className="text-light" to="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-light" to="/counter">Counter</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-light" to="/fetch-data">Fetch Data</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-light" to="/items">Items</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-light" to="/create">Create</NavLink>
                                    </NavItem>
                                    {!this.props.oidc.user ? (<LoginPage></LoginPage> ) : (<LogoutPage></LogoutPage>)}
                                </ul>
                            </Collapse>
                        </Container>
                    </Navbar>
            </header>
        );
    }


    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    
 }


function mapStateToProps(state: any) {
    return {
        oidc: state.oidc
    };
};

export default connect(mapStateToProps)(NavMenu);

