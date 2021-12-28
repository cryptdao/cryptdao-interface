import { daoGetMetaData } from "@/near/Function";
import { useQuery } from "react-query";
import styled from "styled-components";

const InfoWrapper = styled.div`
  position: fixed;
  width: 240px;
`;
export default function Info() {
  const metadata = useQuery("meta", daoGetMetaData);

  if (metadata.isLoading) {
    return <div>Loading...</div>;
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
                <button className="button px-[24px] focus-within:border-skin-link mb-4">
                  加入
                </button>
              </div>
            </div>
          </div>
          <div className="py-3">
            <a className="block px-4 py-2">提案</a>
            <a className="block px-4 py-2">新提案</a>
            <a className="block px-4 py-2">授权</a>
            <a className="block px-4 py-2">关于</a>
          </div>
        </div>
      </InfoWrapper>
    </>
  );
}
