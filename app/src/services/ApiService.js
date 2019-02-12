import { Api, JsonRpc } from 'eosjs';
import JsSignatureProvider from 'eosjs/dist/eosjs-jssig'

// Main action call to blockchain
async function takeAction(action, dataValue) {
  const privateKey = localStorage.getItem("cardgame_key");
  const rpc = new JsonRpc(process.env.REACT_APP_EOS_HTTP_ENDPOINT);
  const signatureProvider = new JsSignatureProvider([privateKey]);
  const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
  /*
  JsonRpc - The rpc client which connects to the HTTP endpoint of an EOSIO node.
  JsSignatureProvider - Required for signing transactions, which we create using the user’s private key. (__Using the JsSignatureProvider in the browser is not secure and should only be used for development purposes. Use a secure vault outside of the context of the webpage to ensure security when signing transactions in production)
  Api - The client we use to communicate with an EOS blockchain node and we initialize it using the Rpc and SignatureProvider we have created
  To use the general function takeAction() we will pass in
  
  action - the name of the Smart Contract action we want to invoke
  dataValue - parameter of the Smart Contract action
  */



  /*
  To send the transaction, we invoke api.transact() and pass it a JSON parameter. 
  Let’s look at some attributes of interest inside the JSON:
  account - Equivalent to the contract name
  name - Name of the action we want to invoke
  authorization - For signing the transaction
  */
 
  // Main call to blockchain after setting action, account_name and data
  try {
    const resultWithConfig = await api.transact({
      actions: [{
        account: process.env.REACT_APP_EOS_CONTRACT_NAME,
        name: action,
        authorization: [{
          actor: localStorage.getItem("cardgame_account"),
          permission: 'active',
        }],
        data: dataValue,
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });
    return resultWithConfig;
  } 
  catch (err) {
    throw(err)
  }

}
class ApiService {
  //username and key are stored into the browser’s localStorage so 
  //we then can use these later for signing the transaction in the 
  //takeAction function described above.
  //We can now use ApiService.login() to trigger the corresponding “login” action in the smart contract.
  static login({ username, key }) {
    return new Promise((resolve, reject) => {
      localStorage.setItem("cardgame_account", username);
      localStorage.setItem("cardgame_key", key);
      takeAction("login", { username: username })
        .then(() => {
          resolve();
        })
        .catch(err => {
          localStorage.removeItem("cardgame_account");
          localStorage.removeItem("cardgame_key");
          reject(err);
        });
    });
  }  
}

export default ApiService;