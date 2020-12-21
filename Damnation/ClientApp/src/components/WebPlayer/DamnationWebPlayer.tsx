import * as React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

type oidc = {
    isLoadingUser?: any;
    user: any;
}

interface Props {
    oidc: oidc;
}

interface State {
    userDisplayLoaded: boolean;
}

class DamnationWebPlayer extends React.Component< any, { userDisplayLoaded: boolean }> {
  
  unityContent = new UnityContent(
    "./Build/damnation-rpg-webgl-build.json",
    "./Build/UnityLoader.js",
    {
      adjustOnWindowResize: true
    
    }
  );
  
  webPlayerWidth = 1000;

    
  
  constructor(props: any) {
    super(props);
      this.sendUserData = this.sendUserData.bind(this);
      this.handleEvent = this.handleEvent.bind(this);
     
    }

    public state = {
        userDisplayLoaded: false
    };

    public sendUserData() {
        var user = JSON.constructor(this.props.user)
       
        this.unityContent.send(
            "UserNameDisplay",
            "ReceiveUserData",
            JSON.stringify(user)
        );

    }

    public handleEvent(e: any) {
        this.setState({ userDisplayLoaded: true });
    };

    componentDidUpdate(props: any) {
        if (this.props.isAuthenticated === true && this.state.userDisplayLoaded) {
         
            this.sendUserData();
        }


    }

    componentDidMount() {
        window.addEventListener('userDisplayLoaded', this.handleEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('userDisplayLoaded', this.handleEvent);
    }


  render() {

    return (
    
        <div className="WebPlayer" style={{ width: this.webPlayerWidth }}>
            { <Unity unityContent={this.unityContent} />}
        </div> 
      
    );
  }
  
}

function mapStateToProps(state: any) {
    return {
        oidc: state.oidc
    };
};

export default (DamnationWebPlayer);