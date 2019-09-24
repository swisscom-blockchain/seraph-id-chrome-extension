import { DIDNetwork, SeraphIDWallet, SeraphIDIssuer } from '@sbc/seraph-id-sdk';
import env from '../environments/environment';
import { v4 as uuid } from 'uuid';

const { GOVERNMENT_SCRIPT_HASH, NEO_RPC_URL, NEOSCAN_URL } = env;

/**
 * Create a new wallet
 * @param wallet
 * @return {SeraphIDWallet}
 */
export const createWallet = wallet => new SeraphIDWallet(wallet);

/**
 * Decrypt the wallet
 * @param accountFromStore
 * @param password
 * @return {Promise<SeraphIDWallet>}
 */
export const decrypt = async (accountFromStore, password) => {
  try {
    const wallet = createWallet(JSON.parse(accountFromStore));
    await wallet.accounts[0].decrypt(password);
    return wallet;
  } catch (e) {
    // TODO handle error
    console.warn(e)
  }
};

/**
 * Generate new DID for private network
 * @param wallet
 */
export const createDid = wallet => wallet.createDID(DIDNetwork.PrivateNet);

/**
 * Get DID
 * @param wallet
 * @return {string}
 */
export const getDid = wallet => `did:neoid:priv:${wallet.accounts[0].label}`;

/**
 * Create new issuer
 * @return {SeraphIDIssuer}
 */
export const createIssuer = () =>
  new SeraphIDIssuer(GOVERNMENT_SCRIPT_HASH, NEO_RPC_URL, NEOSCAN_URL);

/**
 * Create a claim
 * @param schemaName
 * @param data
 * @param wallet
 * @return {IClaim}
 */
export const createClaim = (schemaName, data, wallet) => {
  const issuer = createIssuer();
  issuer.registerNewSchema(schemaName, Object.keys(data), true);
  return issuer.createClaim(uuid(), schemaName, data, getDid(wallet))
};