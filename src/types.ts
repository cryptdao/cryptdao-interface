export interface TokenMetadata {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  icon?: string;
  ref?: number;
  near?: number;
  total?: number;
  amountLabel?: string;
  amount?: number;
}

export interface DaoMetadata {
  name: string;
  headcount: number;
}

export interface Citizen {
  account_id: string;
  role_name: string;
  joined: number;
}
