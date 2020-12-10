"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_oidc_1 = require("redux-oidc");
var clientId = ""; //GUID Client Application ID
var tenantId = ""; //GUID Azure Tenant ID
var resourceId = ""; //GUID API Application ID
var userManagerConfig = {
    authority: "https://login.microsoftonline.com/" + tenantId + "/.well-known/openid-configuration",
    client_id: clientId,
    redirect_uri: window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "") + "/callback",
    post_logout_redirect_uri: window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""),
    automaticSilentRenew: false,
    filterProtocolClaims: true,
    loadUserInfo: false,
    scope: "openid profile ",
    response_type: "token id_token",
    extraQueryParams: {
        resource: resourceId
    },
    signingKeys: []
};
var userManager = redux_oidc_1.createUserManager(userManagerConfig);
exports.default = userManager;
//# sourceMappingURL=userManager.js.map