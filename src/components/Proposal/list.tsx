import Proposal from "@/components/Proposal/item";
import { daoGetProposals } from "@/near/Function";
import { FromIndex } from "@/state";
import { ProposalProps } from "@/types";
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

  let ProposalList;
  if (proposals.data) {
    ProposalList = proposals.data
      .sort((a: ProposalProps, b: ProposalProps) => {
        if (a.id < b.id) {
          return 1;
        } else if (a.id > b.id) {
          return -1;
        } else {
          return 0;
        }
      })
      .map((proposal: ProposalProps) => {
        return (
          <li key={proposal.id}>
            <Proposal {...proposal} />
          </li>
        );
      });
  } else {
    ProposalList = <></>;
  }

  return (
    <>
      <ul>{ProposalList}</ul>
    </>
  );
}
