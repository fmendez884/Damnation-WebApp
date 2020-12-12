"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_unity_webgl_1 = require("react-unity-webgl");
var DamnationWebPlayer = /** @class */ (function (_super) {
    __extends(DamnationWebPlayer, _super);
    function DamnationWebPlayer(props) {
        var _this = _super.call(this, props) || this;
        //unityContext: any;
        _this.unityContent = new react_unity_webgl_1.UnityContent("./Build/damnation-web.json", "./Build/UnityLoader.js", {
            adjustOnWindowResize: false
        });
        _this.webPlayerWidth = 1000;
        return _this;
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
    DamnationWebPlayer.prototype.render = function () {
        // Finally render the Unity component and pass 
        // the Unity content through the props.
        return (React.createElement("div", { className: "WebPlayer", style: {} }, React.createElement(react_unity_webgl_1.default, { unityContent: this.unityContent })));
    };
    return DamnationWebPlayer;
}(React.Component));
exports.default = DamnationWebPlayer;
//# sourceMappingURL=DamnationWebPlayer.js.map