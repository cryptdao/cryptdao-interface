import Layout from "@/layout";
import { PageHeader } from "antd";
import styled from "styled-components";
const TextArea = styled.textarea`
  resize: none;
  height: 70px;
  overflow: hidden;
  font-size: 18px;
`;

export default function CreateProposalPage() {
  return (
    <>
      <Layout>
        <div className="float-left w-full pr-0 lg:w-8/12 lg:pr-5">
          <div className="px-4 overflow-hidden md:px-0">
            <PageHeader
              className="site-page-header"
              onBack={() => window.history.back()}
              title="CrytoDAO"
              subTitle="Code is Law"
            />
          </div>
          <div className="px-4 md:px-0">
            <div className="flex flex-col mb-6">
              <input
                className="mb-2 text-xl font-bold input"
                placeholder="问题"
              />
              <TextArea className="pt-0 input" placeholder="您的建议是什么?" />
            </div>
          </div>
          <div className="mb-4 border-t border-b rounded-none md:border md:rounded-lg bg-skin-block-bg">
            <h4 className="block px-4 pt-3 border-b rounded-t-none bg-skin-header-bg md:rounded-t-lg">
              选择
            </h4>
            <div className="p-4 leading-6">
              <div className="mb-2 overflow-hidden">
                <div>
                  <div className="border border-skin-border transition-colors bg-transparent text-skin-link rounded-3xl outline-none leading-[46px] text-left w-full mb-2 flex px-3">
                    <div className="mr-2 text-color whitespace-nowrap">
                      <span className="text-skin-link">1</span>
                    </div>
                    <input
                      className="flex-auto w-full text-center input"
                      type="text"
                      aria-label="input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
