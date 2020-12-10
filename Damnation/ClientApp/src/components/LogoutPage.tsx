import * as React from "react";
import userManager from "../util/userManager";

class LogoutPage extends React.Component {
    componentDidMount() {
        userManager.signoutRedirect();
    }

    render() {
        return (
            <div>
                <h3>Log out</h3>
            </div>
        );
    }
}

export default LogoutPage;