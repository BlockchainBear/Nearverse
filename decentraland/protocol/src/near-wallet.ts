import { connect, WalletConnection } from 'near-api-js';

export async function initNearWallet() {
  const near = await connect({ networkId: 'testnet', nodeUrl: 'https://rpc.testnet.near.org' });
  const wallet = new WalletConnection(near, 'my-app');
  return wallet;
}
