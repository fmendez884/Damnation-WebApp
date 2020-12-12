import * as React from 'react';
import { Component } from 'react';
import userManager from '../util/userManager';

class LoginPage extends Component {
    onLoginButtonClick(event: any) {
        event.preventDefault();
        userManager.signinRedirect();
    }

    render() {
        return (
            <div>
                <h3>Login </h3>
                <button onClick = { this.onLoginButtonClick } > Login </button>
            </div>
         );
    }
}

export default LoginPage;