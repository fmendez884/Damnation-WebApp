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
var userManager_1 = require("../util/userManager");
var LogoutPage = /** @class */ (function (_super) {
    __extends(LogoutPage, _super);
    function LogoutPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogoutPage.prototype.onLogoutButtonClick = function (event) {
        event.preventDefault();
        userManager_1.default.signoutRedirect();
    };
    LogoutPage.prototype.render = function () {
        return (React.createElement("button", { onClick: this.onLogoutButtonClick }, " Log Out "));
    };
    return LogoutPage;
}(React.Component));
exports.default = LogoutPage;
//# sourceMappingURL=LogoutPage.js.map