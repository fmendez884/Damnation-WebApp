import * as React from "react";
import { Route } from "react-router-dom";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginPage from "../LoginPage";
import FetchData from '../FetchData';

const PrivateRoute = ({ component: Component, oidc, ...rest }: any) => {
    //console.log("rest: ", ...rest);
    //console.log("oidc", oidc);
    //debugger;
    return (
        
        < Route
            {...rest}
                render = { props => {
                if (!oidc.user) {
                    return <LoginPage />;
                } else {
                    return <Component {...props} />;
                }
            }}
        />
    );
};

PrivateRoute.propTypes = {
    //component: PropTypes.func.isRequired,
    oidc: PropTypes.object.isRequired
};

function mapStateToProps(state: any) {
    //console.log(state);
    //debugger;
    return {
        oidc: state.oidc
    };
}

export default connect(mapStateToProps)(PrivateRoute);

//export default PrivateRoute;