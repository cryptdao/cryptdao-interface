import ProposalHeader from "@/components/Proposal";
import Proposals from "@/components/Proposal/list";
import Layout from "@/layout";

export default function Proposal() {
  return (
    <>
      <Layout>
        <ProposalHeader />
        <Proposals />
      </Layout>
    </>
  );
}
