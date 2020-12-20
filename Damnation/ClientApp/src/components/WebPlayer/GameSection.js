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
var GobletFire_1 = require("./GobletFire");
var GameContainer_1 = require("./GameContainer");
var GameSection = /** @class */ (function (_super) {
    __extends(GameSection, _super);
    function GameSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameSection.prototype.render = function () {
        return (React.createElement("div", { className: "GameSection" },
            React.createElement(GobletFire_1.default, null),
            React.createElement(GameContainer_1.default, null),
            React.createElement(GobletFire_1.default, null)));
    };
    return GameSection;
}(React.Component));
exports.default = GameSection;
//# sourceMappingURL=GameSection.js.map