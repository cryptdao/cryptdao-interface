import ProposalHeader from "@/components/Proposal";
import Proposals from "@/components/Proposal/list";
import Layout from "@/layout";
import Info from "@/layout/Info";

export default function Proposal() {
  return (
    <>
      <Layout>
        <div className="hidden float-left w-1/4 lg:block">
          <Info />
        </div>
        <div className="float-right w-full pl-0 lg:pl-5 lg:w-3/4">
          <ProposalHeader />
          <Proposals />
        </div>
      </Layout>
    </>
  );
}
