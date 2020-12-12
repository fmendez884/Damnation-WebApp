import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import './NavMenu.css';
import { Component } from 'react';

type oidc = {
    isLoadingUser?: any;
    user: any;
}

//type user = {
//    email: any;
//    profile: any;
//}

type State = {
    isOpen: boolean;
}

interface Props {
    oidc: oidc;
}

class NavMenu extends React.Component<{oidc: oidc}, { isOpen: boolean }>{
   
    constructor(props: any) {
        super(props);
        //debugger;
    }

    public state = {
        isOpen: false
    };

    //Navigation = (props: any) => {
    //    const { oidc } = props;
    //    const userLoggedIn = oidc.user;
    //};

    //oidc = this.props;
    //userLoggedIn = this.props.oidc.user;

     //oidc  = this.props;
     //   const userLoggedIn = this.oidc.oidc.user;

    public render() {
        console.log(this.props.oidc);
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">Damnation</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />

                        {this.props.oidc.user ? (
                            <Collapse className="justify-content-end">
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
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/items">Items</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/create">Create</NavLink>
                                </NavItem>
                                {!this.props.oidc.user ? (
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/login">Log In</NavLink>
                                    </NavItem>
                                 ) : (
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/logout">Log Out</NavLink>
                                    </NavItem>
                                 )}
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
//export default NavMenu;

