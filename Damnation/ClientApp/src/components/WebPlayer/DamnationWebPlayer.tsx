import * as React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import axios from 'axios';

type oidc = {
    isLoadingUser?: any;
    user: any;
}

interface Props {
    oidc: oidc;
}

interface State {
    userDisplayLoaded: boolean;
    postedToLeaderBoard: boolean;
}

class DamnationWebPlayer extends React.Component< any, State> {
  
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
      this.postToLeaderBoard = this.postToLeaderBoard.bind(this);
     
    }

    public state = {
        userDisplayLoaded: false,
        postedToLeaderBoard: false
    };

    public sendUserData() {
        var user = JSON.constructor(this.props.user)
       
        this.unityContent.send(
            "UserNameDisplay",
            "ReceiveUserData",
            JSON.stringify(user)
        );

    }

    public postToLeaderBoard(e: any) {


        var parsedString = JSON.parse(e.detail.dataString);
        var scoreData = parsedString.scoreData;
        var userData = JSON.parse(parsedString.userData);


        var data = {
            name: userData.displayName,
            email: userData.email,
            timeElapsed: scoreData.timeElapsed,
            remainingHealth: scoreData.remainingHealth,
            score: scoreData.finalScore
        }


        axios.post("api/LeaderBoards/create", data).then(res => {
        })

        this.setState({ ...this.state, postedToLeaderBoard: true });
    }

    public handleEvent(e: any) {
        this.setState({ userDisplayLoaded: true });
       
    };

    componentDidUpdate(props: any) {
        if (this.props.isAuthenticated === true && this.state.userDisplayLoaded) {
         
            this.sendUserData();
        }


    }

    //componentDidMount() {
    //    window.addEventListener('userDisplayLoaded', this.handleEvent);
    //    window.addEventListener('postToLeaderBoard', this.postToLeaderBoard);
    //}

    //componentWillUnmount() {
    //    window.removeEventListener('userDisplayLoaded', this.handleEvent);
    //    window.removeEventListener('postToLeaderBoard', this.postToLeaderBoard);
    //}


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