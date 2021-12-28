import { daoGetMetaData } from "@/near/Function";
import { useQuery } from "react-query";

export default function Info() {
  const { isLoading, isError, data, error } = useQuery("meta", daoGetMetaData);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <span>Error:{error.message}</span>;
  }
  return (
    <>
      <div>
        <div className="mb-4 overflow-hidden border-t border-b rounded-none md:rounded-lg md:border">
          <div className="leading-6">
            <div className="text-center border-b">
              <h3 className="mx-2 mb-[2px]">CryptDAO</h3>
              <div className="mb-[12px]">20.0k成员</div>
              <div className="flex justify-center gap-x-2">
                <button className="px-[24px] mb-4">加入</button>
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
      </div>
    </>
  );
}
