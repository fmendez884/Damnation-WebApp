import * as React from 'react';
import { connect } from 'react-redux';

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

class UserGreeting extends React.Component<{ oidc: oidc }, {}>{

    constructor(props: any) {
        super(props);
    }

    render() {
        console.log(this.props.oidc.user);
        return (
            <div >
            {
                this.props.oidc.user != null ? (
                        <div className="nes-container from-left is-dark is-rounded is-small user-greeting box">
                            Signed in as:{" "}
                            <a href="#login">
                                {this.props.oidc.user ? this.props.oidc.user.profile.unique_name : ""}
                            </a>
                        </div>
                ) : null
                    
            }
            </div>
        )
    };
}


function mapStateToProps(state: any) {
    return {
        oidc: state.oidc
    };
};

export default connect(mapStateToProps)(UserGreeting);