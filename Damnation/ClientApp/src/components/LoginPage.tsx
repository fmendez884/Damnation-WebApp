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
                <button onClick = { this.onLoginButtonClick } > Login </button>
         
         );
    }
}

export default LoginPage;