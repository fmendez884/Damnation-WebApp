// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <WelcomeSnippet>
import * as React from 'react';
import {
  Button,
  Jumbotron
} from 'reactstrap';
import '@fortawesome/fontawesome-free/css/all.css'
import GameSection from "./components/WebPlayer/GameSection";

interface WelcomeProps {
  isAuthenticated: boolean;
  authButtonMethod: any;
  user: any;
}

interface WelcomeState {
  isOpen: boolean;
}

function WelcomeContent(props: WelcomeProps) {
  // If authenticated, greet the user
  if (props.isAuthenticated) {
    return (
      <div>
        <h4>Welcome {props.user.displayName}!</h4>
      </div>
    );
  }

  // Not authenticated, present a sign in button
  return <div/>
}

export default class Welcome extends React.Component<WelcomeProps, WelcomeState> {
  render() {
    return (
        <Jumbotron style={{background:"black"}}>
        
        <WelcomeContent
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user}
                authButtonMethod={this.props.authButtonMethod} />

            <GameSection {...this.props}/>
      </Jumbotron>
    );
  }
}
// </WelcomeSnippet>
