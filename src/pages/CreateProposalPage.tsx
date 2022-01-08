import Layout from "@/layout";
import { daoAddProposal } from "@/near/Function";
import { OwnerState } from "@/state";
import { Kind, KindType, ProposalProps, VoteOption } from "@/types";
import { DeleteOutlined } from "@ant-design/icons";
import { Alert, Button, DatePicker, PageHeader, Select, Space } from "antd";
import { row } from "mathjs";
import { Moment } from "moment";
import { useRef, useState } from "react";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
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
          id={`row-${row}`}
          aria-label="input"
          onChange={(e) => {
            props.onChange(props.id, e.target.value);
          }}
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
  onChange: (id: number, value: string) => void;
}

const nanoSeconds = (date: Moment | null) =>
  date ? date.unix() * 1_000_000_000 : 0;
export default function CreateProposalPage() {
  const [maxid, setMaxid] = useState(0);
  const [rows, setRows] = useState<VoteOption[]>([{ id: maxid, value: "" }]);
  const submit = useMutation((props: ProposalProps) => daoAddProposal(props));
  const owner = useRecoilValue(OwnerState);

  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState("");
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const [proposalStartTime, setProposalStartTime] = useState<Moment | null>(
    null
  );
  const [proposalEndTime, setProposalEndTime] = useState<Moment | null>(null);

  const [kind, setKind] = useState<KindType>(KindType.VoteKind);
  console.log(kind);

  const handleKindChange = (value: KindType) => {
    setKind(value);
  };
  const addRow = () => {
    setRows((rows) => [...rows, { id: maxid + 1, value: "" }]);
    setMaxid((maxid) => maxid + 1);
  };

  const removeRow = (i: number) => {
    setRows((rows: VoteOption[]) => {
      return rows.filter((row) => i != row.id);
    });
  };

  const onChange = (i: number, value: string) => {
    setRows((rows: VoteOption[]) => {
      return rows.map((row) => {
        if (row.id === i) {
          row.value = value;
        }
        return row;
      });
    });
  };

  const rowsElement = rows.map((row, i) => {
    return (
      <li key={row.id}>
        <Row
          id={row.id}
          show_id={i + 1}
          removeRow={removeRow}
          onChange={onChange}
        />
      </li>
    );
  });

  const onProposalStartTimeChange = (
    date: Moment | null,
    dateString: string | null
  ) => {
    setProposalStartTime(date);
  };

  const onProposalEndTimeChange = (
    date: Moment | null,
    dateString: string | null
  ) => {
    setProposalEndTime(date);
  };

  return (
    <>
      <Layout>
        {visible ? (
          <Alert
            message={msg}
            type="error"
            closable
            onClose={() => {
              setVisible(false);
            }}
          />
        ) : null}
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
                ref={titleRef}
              />
              <TextArea
                ref={descRef}
                className="pt-0 input"
                placeholder="您的建议是什么?"
              />
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
                    defaultValue={kind}
                    onChange={handleKindChange}
                  >
                    <Option value={KindType.VoteKind}>投票</Option>
                    <Option value="Transfer">"转账"</Option>
                    <Option value="UpgradeSelf">升级</Option>
                    <Option value="ChangePolicy">政策变更</Option>
                    <Option value="AddMemberToRole">添加成员</Option>
                    <Option value="RemoveMemberFromRole">移除成员</Option>
                    <Option value="FunctionCall">调用函数</Option>
                    <Option value="UpgradeRemote">远程升级</Option>
                  </Select>
                  <DatePicker
                    className="w-full"
                    placeholder="选择开始日期"
                    value={proposalStartTime}
                    onChange={onProposalStartTimeChange}
                  />
                  <DatePicker
                    className="w-full"
                    placeholder="选择结束日期"
                    value={proposalEndTime}
                    onChange={onProposalEndTimeChange}
                  />
                  <Button
                    className="w-full"
                    onClick={() => {
                      if (!titleRef.current || titleRef.current.value === "") {
                        setMsg("请输入标题");
                        setVisible(true);
                        return;
                      }
                      if (!descRef.current || descRef.current.value === "") {
                        setMsg("请输入描述");
                        setVisible(true);
                        return;
                      }
                      if (!proposalStartTime) {
                        setMsg("请选择开始日期");
                        setVisible(true);
                        return;
                      }
                      if (!proposalEndTime) {
                        setMsg("请选择结束日期");
                        setVisible(true);
                        return;
                      }

                      let kindData: Kind = {};
                      if (kind === KindType.VoteKind) {
                        kindData = {
                          type: kind,
                          options: rows,
                        };
                      }
                      const props: ProposalProps = {
                        proposer: owner.account_id,
                        title: titleRef.current.value,
                        description: descRef.current.value,
                        proposal_start_time: nanoSeconds(proposalStartTime),
                        proposal_end_time: nanoSeconds(proposalEndTime),
                        kind: kindData,
                      };
                      console.log(props);
                      submit.mutate(props);
                    }}
                  >
                    发布
                  </Button>
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
