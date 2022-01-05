export interface NearViewFunctionOptions {
  methodName: string;
  args: object;
}

export interface NearFunctionCallOptions extends NearViewFunctionOptions {
  gas: string;
  amount: string;
}

export interface Transaction {
  receiverId: string;
  functionCalls: NearFunctionCallOptions[];
}
