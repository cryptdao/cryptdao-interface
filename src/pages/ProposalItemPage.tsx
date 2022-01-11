import Layout from "@/layout";
import { daoGetProposal } from "@/near/Function";
import { Skeleton } from "antd";
import { id } from "date-fns/locale";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function ProposalItemPage() {
  const { slug } = useParams();
  const proposal = useQuery(["proposal", id], () => {
    if (slug) {
      const id = Number(slug);
      return daoGetProposal(id);
    } else {
      return null;
    }
  });

  if (proposal.isLoading) {
    return <Skeleton active />;
  }
  if (proposal.isError) {
    return (
      <span>
        Error:{proposal.error instanceof Error ? proposal.error.message : ""}
      </span>
    );
  }

  return (
    <>
      <Layout>
        <div className="float-left w-full lg:w-8/12">
          <article className="px-4">
            <h1>{proposal.data?.title}</h1>
          </article>
        </div>

        <div className="w-full">222</div>
      </Layout>
    </>
  );
}
