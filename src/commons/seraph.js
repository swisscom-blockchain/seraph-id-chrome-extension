import { DIDNetwork, SeraphIDWallet, SeraphIDIssuer } from '@sbc/seraph-id-sdk';

const NEO_RPC_URL = 'https://demo.seraphid.io/rpc';
const NEOSCAN_URL = 'https://demo.seraphid.io/api';
const GOVERNMENT_SCRIPT_HASH = '3c6baf1e51732bea4b3bf897b588568dfbd606e2';


export function createWallet(wallet) {
  let newWallet = new SeraphIDWallet(wallet);
  return newWallet;
}

export function createDid(wallet) {
  wallet.createDID(DIDNetwork.PrivateNet);
  const issuer = new SeraphIDIssuer(GOVERNMENT_SCRIPT_HASH, NEO_RPC_URL, NEOSCAN_URL);
  issuer.registerNewSchema('schemaName', ['firstName', 'lastName', 'age'], true);
  var claim = issuer.createClaim(2, 'schemaName', { 'firstName': 'John', 'lastName': 'Doe', 'age': 26 }, 'did:neo:priv:'.concat(wallet.accounts[0].label));
  issuer.registerNewSchema('schemaName2', ['firstName', 'lastName', 'age'], true);
  var claim2 = issuer.createClaim(3, 'schemaName2', { 'firstName': 'John', 'lastName': 'Doe', 'age': 26 }, 'did:neo:priv:'.concat(wallet.accounts[0].label));
  wallet.addClaim(claim);
  wallet.addClaim(claim2);
  return wallet

}
