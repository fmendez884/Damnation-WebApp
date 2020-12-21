import * as React from "react";
//import { connect } from "react-redux";
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
      //console.log(this);
    }

    public state = {
        userDisplayLoaded: false
    };

    public sendUserData(e: any) {
        //debugger;
        //var oidc = JSON.constructor(this.props.oidc)
        var user = JSON.constructor(this.props.user)
        //oidc.user = user
        var profile = JSON.constructor(this.props.user.profile)
        user.profile = profile

        this.unityContent.send(
            "UserNameDisplay",
            "ReceiveUserData",
            JSON.stringify(this.props.user)
        );

    }

    componentDidUpdate(props: any) {
        if (this.props.isAuthenticated === true) {
            //debugger;
            console.log(this.props);
            console.log(JSON.stringify(this.props.user))
        }
    }

    componentDidMount() {
        window.addEventListener('userDisplayLoaded', this.sendUserData);
    }

    componentWillUnmount() {
        window.removeEventListener('userDisplayLoaded', this.sendUserData);
    }


  render() {

    // Finally render the Unity component and pass 
    // the Unity content through the props.
      //debugger;
      this.sendUserData(this.props); 

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

//export default connect(mapStateToProps)(DamnationWebPlayer);
export default (DamnationWebPlayer);