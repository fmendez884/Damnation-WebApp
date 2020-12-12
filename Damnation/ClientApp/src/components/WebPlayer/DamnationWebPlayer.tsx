import * as React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

import GobletFire from "./GobletFire";

export default class DamnationWebPlayer extends React.Component {
  //unityContext: any;
  
  unityContent = new UnityContent(
    "./Build/damnation-web.json",
    "./Build/UnityLoader.js",
    {
      adjustOnWindowResize: false
    
    }
  );
  
  webPlayerWidth = 1000;

    
  
  constructor(props: any) {
    super(props);
    

    // Next up create a new Unity Content object to 
    // initialise and define your WebGL build. The 
    // paths are relative from your index file.

      //this.unityContext = new UnityContent({
      //    loaderUrl: "./Build/UnityLoader.js",
      //    dataUrl: "build/damnation-web.data",
      //    frameworkUrl: "build/damnation-web.wasm.framework.js",
      //    codeUrl: "build/damnation-web.wasm"
      //});


  }

  render() {

    // Finally render the Unity component and pass 
    // the Unity content through the props.

    return (
    
        <div className="WebPlayer" style={{ }}>
            { <Unity unityContent={this.unityContent}/>
            }
        </div> 
      
    );
  }
  
    // render() {
      
    //     return (
            
    //       <div id="unityContainer" style={{width: 960, height: 600}}></div>
          
    //     );
    // }
}