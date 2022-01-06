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
  last_proposal_id: number;
}

export interface Citizen {
  account_id: string;
  role_name: string;
  joined: number;
}

export interface Kind {}

export interface VoteOption {
  name: string;
  content: string;
}

export interface Kind {}
export interface VoteKind extends Kind {
  options: VoteOption[];
  votes: Map<string, VoteOption[]>;
  option_counts: Map<string, number>;
}
export interface ProposalProps {
  id?: number;
  proposer: string;
  title: string;
  description: string;
  submission_time: number;
  proposal_start_time: number;
  proposal_end_time: number;
  status: string;
  kind: Kind;
}

export const PAGE_SIZE = 10;
