import ProposalHeader from "@/components/Proposal";
import Layout from "@/layout";
import Info from "@/layout/Info";
import { useParams } from "react-router-dom";

export default function ProposalItemPage() {
  const { slug } = useParams();
  console.log(slug);
  return (
    <>
      <Layout>
        <div className="hidden float-left w-1/4 lg:block">
          <Info />
        </div>
        <div className="float-right w-full pl-0 lg:pl-5 lg:w-3/4">
          <ProposalHeader />
        </div>
      </Layout>
    </>
  );
}
