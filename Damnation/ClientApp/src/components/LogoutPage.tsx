import * as React from "react";
import userManager from "../util/userManager";

class LogoutPage extends React.Component {

    onLogoutButtonClick(event: any) {
        event.preventDefault();
        userManager.signoutRedirect();
    }

    render() {
        return (
                <button onClick={this.onLogoutButtonClick} > Logout </button>
           
        );
    }
}

export default LogoutPage;