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
var reactstrap_1 = require("reactstrap");
var ErrorMessage = /** @class */ (function (_super) {
    __extends(ErrorMessage, _super);
    function ErrorMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorMessage.prototype.render = function () {
        var debug = null;
        if (this.props.debug) {
            debug = React.createElement("pre", { className: "alert-pre border bg-light p-2" },
                React.createElement("code", null, this.props.debug));
        }
        return (React.createElement(reactstrap_1.Alert, { color: "danger" },
            React.createElement("p", { className: "mb-3" }, this.props.message),
            debug));
    };
    return ErrorMessage;
}(React.Component));
exports.default = ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map