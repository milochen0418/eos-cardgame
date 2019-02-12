import { Api, JsonRpc } from 'eosjs';
import JsSignatureProvider from 'eosjs/dist/eosjs-jssig'

// Main action call to blockchain
async function takeAction(action, dataValue) {
  const privateKey = localStorage.getItem("cardgame_key");
  const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
  const signatureProvider = new JsSignatureProvider([privateKey]);
  const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
}
class ApiService {
}

export default ApiService;