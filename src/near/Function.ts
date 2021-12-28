import { wallet } from "./Account";
import { DAO_CONTRACT_ID, NearViewFunctionOptions } from "./near";

export interface Token {
  readonly contract: string;
  readonly owner_id: string;
  readonly spec: string;
  readonly name: string;
  readonly symbol: string;
  readonly decimals: number;
}

export interface TokenBalancesView {
  [tokenId: string]: string;
}

export const ONE_YOCTO_NEAR = "0.000000000000000000000001";
export const ONE_MORE_DEPOSIT_AMOUNT = "0.01";

export const DaoViewFunction = ({
  methodName,
  args,
}: NearViewFunctionOptions) => {
  //console.log(`call ${methodName} with args: ${JSON.stringify(args)}`);
  return wallet.account().viewFunction(DAO_CONTRACT_ID, methodName, args);
};

export interface FTStorageBalance {
  total: string;
  available: string;
}

export const ViewFunction = (
  tokenId: string,
  { methodName, args }: NearViewFunctionOptions
) => {
  return wallet.account().viewFunction(tokenId, methodName, args);
};

export const daoGetMetaData = (): Promise<FTStorageBalance | null> => {
  return DaoViewFunction({ methodName: "metadata", args: {} });
};
