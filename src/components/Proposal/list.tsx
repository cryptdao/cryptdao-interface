import Proposal from "@/components/Proposal/item";
import { daoGetProposals } from "@/near/Function";
import { FromIndex } from "@/state";
import { Skeleton } from "antd";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";

export default function Proposals() {
  const [fromIndex, setFromIndex] = useRecoilState(FromIndex);
  const proposals = useQuery(["proposals", fromIndex], () => {
    return daoGetProposals(fromIndex);
  });

  if (proposals.isLoading) {
    return <Skeleton active />;
  }
  if (proposals.isError) {
    return (
      <span>
        Error:{proposals.error instanceof Error ? proposals.error.message : ""}
      </span>
    );
  }

  const ProposalList = proposals.data?.map((proposal) => {
    return (
      <li key={proposal.id}>
        <Proposal {...proposal} />
      </li>
    );
  });

  return (
    <>
      <ul>{ProposalList}</ul>
    </>
  );
}
