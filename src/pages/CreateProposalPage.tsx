import Layout from "@/layout";
import { DeleteOutlined } from "@ant-design/icons";
import { PageHeader } from "antd";
import { useState } from "react";
import styled from "styled-components";
const TextArea = styled.textarea`
  resize: none;
  height: 70px;
  overflow: hidden;
  font-size: 18px;
`;

function Row(props) {
  return (
    <>
      <div className="border border-skin-border transition-colors bg-transparent text-skin-link rounded-3xl outline-none leading-[46px] text-left w-full mb-2 flex px-3">
        <div className="mr-2 text-color whitespace-nowrap">
          <span className="text-skin-link">{props.id}</span>
        </div>
        <input
          className="flex-auto w-full text-center input"
          type="text"
          aria-label="input"
        />
        <span className="cursor-pointer">
          <DeleteOutlined />
        </span>
      </div>
    </>
  );
}

interface RowOption {
  id: number;
  text: string;
}
export default function CreateProposalPage() {
  const [rows, setRows] = useState([{ id: 1, text: "" }]);

  const rowsElement = rows.map((row) => {
    return (
      <li>
        <Row id={row["id"]} />
      </li>
    );
  });

  const addRow = () => {
    setRows((rows) => [...rows, { id: rows.length + 1, text: "" }]);
  };

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
                className="mb-2 text-2xl font-bold input"
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
                <ul>{rowsElement}</ul>
              </div>
              <button
                className="border border-skin-border transition-colors bg-transparent text-skin-link rounded-3xl outline-none leading-[46px]  w-full mb-2  px-3 text-center"
                onClick={addRow}
              >
                添加选项
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
