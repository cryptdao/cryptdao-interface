import { wallet } from "@/near/Account";
import { daoGetCitizen, daoGetMetaData } from "@/near/Function";
import { FromIndex, OwnerState } from "@/state";
import { PAGE_SIZE } from "@/types";
import { Button, Skeleton } from "antd";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
const InfoWrapper = styled.div`
  position: fixed;
  width: 240px;
`;
export default function Info() {
  const metadata = useQuery("meta", daoGetMetaData);

  const [from, setFrom] = useRecoilState(FromIndex);

  const [owner, setOwner] = useRecoilState(OwnerState);

  const citizen = useQuery("owner", async () => {
    const accountName = wallet.getAccountId() as string;
    return daoGetCitizen(accountName);
  });

  useEffect(() => {
    /// set lastIndex state
    const last_proposal = metadata.data?.last_proposal_id || 0;
    let last_index = 0;
    if (last_proposal > PAGE_SIZE) {
      last_index = last_proposal - PAGE_SIZE;
    }
    setFrom(last_index);
  }, [metadata]);

  useEffect(() => {
    if (citizen.isSuccess) {
      setOwner(citizen.data);
    }
  }, [citizen]);

  if (metadata.isLoading || citizen.isLoading) {
    return <Skeleton active />;
  }
  if (metadata.isError) {
    return (
      <span>
        Error:{metadata.error instanceof Error ? metadata.error.message : ""}
      </span>
    );
  }

  return (
    <>
      <section
        id="info"
        className="mb-4 overflow-hidden border-t border-b rounded-none md:rounded-lg md:border"
      >
        <div className="leading-6">
          <div className="text-center border-b">
            <h3 className="mx-2 mb-[2px]">{metadata.data?.name}</h3>
            <div className="mb-[12px]">{metadata.data?.headcount}成员</div>
            <div className="flex justify-center gap-x-2">
              <Button type="text">
                {citizen.data?.account_id ? "已加入" : "加入"}
              </Button>
            </div>
          </div>
        </div>
        <div className="py-3">
          <Link className="block px-4 py-2" to="/proposal">
            提案
          </Link>
          <Link className="block px-4 py-2" to="/proposal/create">
            新提案
          </Link>
          <Link className="block px-4 py-2" to="/proposal">
            授权
          </Link>
          <Link className="block px-4 py-2" to="/proposal">
            关于
          </Link>
        </div>
      </section>
    </>
  );
}
