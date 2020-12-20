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
var goblet_fire_gif_1 = require("../images/goblet-fire.gif");
var GobletFire = /** @class */ (function (_super) {
    __extends(GobletFire, _super);
    function GobletFire() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GobletFire.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("img", { className: "gobletFireImage", src: goblet_fire_gif_1.default })));
    };
    return GobletFire;
}(React.Component));
exports.default = GobletFire;
//# sourceMappingURL=GobletFire.js.map