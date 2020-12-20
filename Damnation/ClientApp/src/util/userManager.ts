import { createUserManager } from "redux-oidc";
import secretsSettings from '../secretSettings';

const secrets = secretsSettings.secrets;

const clientId = secrets.clientId; //GUID Client Application ID
const tenantId = secrets.tenantId; //GUID Azure Tenant ID
const resourceId = secrets.resourceId; //GUID API Application ID
const signingKeys = secrets.signingKeys;

const userManagerConfig = {
    authority: `https://login.microsoftonline.com/common`,
  client_id: clientId,
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : "" }/callback`,
  post_logout_redirect_uri: `${window.location.protocol}//${ window.location.hostname }${window.location.port ? `:${window.location.port}` : ""}`,
  automaticSilentRenew: false,
  filterProtocolClaims: true,
  loadUserInfo: false,
  scope: "openid profile ",
  response_type: "token id_token",
  extraQueryParams: {
    resource: resourceId
  },
    signingKeys: signingKeys
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
