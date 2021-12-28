import BN from "bn.js";
import { baseDecode } from "borsh";
import * as nearAPI from "near-api-js";
import { ConnectedWalletAccount, Near } from "near-api-js";
import { Action, createTransaction } from "near-api-js/lib/transaction";
import { PublicKey } from "near-api-js/lib/utils";
import { createContext } from "react";

const { connect, keyStores, WalletConnection } = nearAPI;

const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
  headers: {},
};

export const ACCOUNT_MIN_STORAGE_AMOUNT = "0.003";
export const near = new Near(config);

class SpecialWalletAccount extends ConnectedWalletAccount {
  async sendTransactionWithActions(receiverId: string, actions: Action[]) {
    return this.signAndSendTransaction(receiverId, actions);
  }

  async createTransaction({
    receiverId,
    actions,
    nonceOffset = 1,
  }: {
    receiverId: string;
    actions: Action[];
    nonceOffset?: number;
  }) {
    const localKey = await this.connection.signer.getPublicKey(
      this.accountId,
      this.connection.networkId
    );
    const accessKey = await this.accessKeyForTransaction(
      receiverId,
      actions,
      localKey
    );
    if (!accessKey) {
      throw new Error(
        `Cannot find matching key for transaction sent to ${receiverId}`
      );
    }

    const block = await this.connection.provider.block({ finality: "final" });
    const blockHash = baseDecode(block.header.hash);

    const publicKey = PublicKey.from(accessKey.public_key);
    const nonce = accessKey.access_key.nonce + nonceOffset;

    return createTransaction(
      this.accountId,
      publicKey,
      receiverId,
      nonce,
      actions,
      blockHash
    );
  }
}

export const wallet = new WalletConnection(near, null);

export interface AccountStorageView {
  total: string;
  available: string;
}

type StateType = [
  nearAPI.WalletConnection | null,
  (wallet: nearAPI.WalletConnection) => void
];

export const NearWalletContext = createContext<StateType>({} as StateType);

export const getGas = (gas?: string) =>
  gas ? new BN(gas) : new BN("100000000000000");
