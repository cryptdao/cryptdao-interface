import Layout from "@/layout";
import { DeleteOutlined } from "@ant-design/icons";
import { DatePicker, PageHeader, Select, Space } from "antd";
import { useState } from "react";
import styled from "styled-components";
const { RangePicker } = DatePicker;
const { Option } = Select;
const TextArea = styled.textarea`
  resize: none;
  height: 70px;
  overflow: hidden;
  font-size: 18px;
`;

function Row(props: RowProps) {
  return (
    <>
      <div className="border border-skin-border transition-colors bg-transparent text-skin-link rounded-3xl outline-none leading-[46px] text-left w-full mb-2 flex px-3">
        <div className="mr-2 text-color whitespace-nowrap">
          <span className="text-skin-link">{props.show_id}</span>
        </div>
        <input
          className="flex-auto w-full text-center input"
          type="text"
          aria-label="input"
        />
        <span className="cursor-pointer">
          <DeleteOutlined
            onClick={() => {
              props.removeRow(props.id);
            }}
          />
        </span>
      </div>
    </>
  );
}

interface RowProps {
  id: number;
  show_id: number;
  removeRow: (id: number) => void;
}

export default function CreateProposalPage() {
  const [maxid, setMaxid] = useState(0);
  const [rows, setRows] = useState([maxid]);

  const addRow = () => {
    setRows((rows) => [...rows, maxid + 1]);
    setMaxid((maxid) => maxid + 1);
  };

  const removeRow = (i: number) => {
    setRows((rows: Array<number>) => {
      return rows.filter((row) => i != row);
    });
  };

  const rowsElement = rows.map((row, i) => {
    return (
      <li key={row}>
        <Row id={row} show_id={i + 1} removeRow={removeRow} />
      </li>
    );
  });

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
        <div className="float-left w-full lg:w-4/12">
          <div className="mb-4 border-t border-b rounded-none md:border md:rounded-lg bg-skin-block-bg">
            <h4 className="block px-4 pt-3 border-b rounded-t-none bg-skin-header-bg md:rounded-t-lg">
              行动
            </h4>
            <div className="p-4 leading-6">
              <div className="mb-2">
                <Space direction="vertical" size={12}>
                  <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    className="w-full"
                    defaultValue="a"
                  >
                    <Option value="a">单选投票</Option>
                    <Option value="b">批准表决</Option>
                    <Option value="c">二次投票</Option>
                    <Option value="d">选择排序投票</Option>
                  </Select>
                  <DatePicker className="w-full" placeholder="选择开始日期" />
                  <DatePicker className="w-full" placeholder="选择结束日期" />,
                </Space>
                ,
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
