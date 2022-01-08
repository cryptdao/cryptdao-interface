import { Citizen, DaoMetadata, PAGE_SIZE, ProposalProps } from "@/types";
import { FinalExecutionOutcome } from "near-api-js/lib/providers";
import { DAO_CONTRACT_ID, MIN_GAS, wallet } from "./Account";
import { getAmount, getGas } from "./helper";
import { NearFunctionCallOptions, NearViewFunctionOptions } from "./near";
export const ONE_YOCTO_NEAR = "0.000000000000000000000001";
export const ONE_NEAR = "1";
export const ONE_MORE_DEPOSIT_AMOUNT = "0.01";

export const DaoViewFunction = ({
  methodName,
  args,
}: NearViewFunctionOptions) => {
  //console.log(`call ${methodName} with args: ${JSON.stringify(args)}`);
  return wallet.account().viewFunction(DAO_CONTRACT_ID, methodName, args);
};

export const DaoFunctionCall = ({
  methodName,
  args,
  gas,
  amount,
}: NearFunctionCallOptions) => {
  const val = getAmount(amount);
  return wallet.account().functionCall({
    contractId: DAO_CONTRACT_ID,
    methodName: methodName,
    args: args,
    gas: getGas(gas),
    attachedDeposit: getAmount(amount),
  });
};

export const ViewFunction = (
  tokenId: string,
  { methodName, args }: NearViewFunctionOptions
) => {
  return wallet.account().viewFunction(tokenId, methodName, args);
};

export const daoGetMetaData = (): Promise<DaoMetadata> => {
  return DaoViewFunction({ methodName: "metadata", args: {} });
};

export const daoGetCitizen = (account_id: string): Promise<Citizen> => {
  return DaoViewFunction({
    methodName: "get_citizen",
    args: { account_id: account_id },
  });
};

export const daoGetProposals = (
  from_index: number
): Promise<ProposalProps[]> => {
  return DaoViewFunction({
    methodName: "get_proposals",
    args: { from_index: from_index, limit: PAGE_SIZE },
  });
};

export const daoAddProposal = async (
  props: ProposalProps
): Promise<FinalExecutionOutcome> => {
  return DaoFunctionCall({
    methodName: "add_proposal",
    args: { proposal: props },
    gas: MIN_GAS,
    amount: ONE_NEAR,
  });
};
