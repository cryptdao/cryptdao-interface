import { useCitizen } from "@/hooks/dao";
import { daoGetMetaData } from "@/near/Function";
import { Button, Skeleton } from "antd";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InfoWrapper = styled.div`
  position: fixed;
  width: 240px;
`;
export default function Info() {
  const metadata = useQuery("meta", daoGetMetaData);
  const citizen = useCitizen();

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
      <InfoWrapper>
        <div className="mb-4 overflow-hidden border-t border-b rounded-none md:rounded-lg md:border">
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
            <Link className="block px-4 py-2" to="/create">
              新提案
            </Link>
            <Link className="block px-4 py-2" to="/proposal">
              授权
            </Link>
            <Link className="block px-4 py-2" to="/proposal">
              关于
            </Link>
          </div>
        </div>
      </InfoWrapper>
    </>
  );
}
