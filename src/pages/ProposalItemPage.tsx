import Layout from "@/layout";
import { useParams } from "react-router-dom";

export default function ProposalItemPage() {
  const { slug } = useParams();
  return (
    <>
      <Layout>
        <div className="float-left w-full lg:w-8/12">
          <article className="px-4">
            <h1>111</h1>
          </article>
        </div>

        <div className="w-full">222</div>
      </Layout>
    </>
  );
}
