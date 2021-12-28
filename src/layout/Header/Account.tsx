import { wallet } from "@/near/Account";
import { DAO_CONTRACT_ID } from "@/near/near";
import { useState } from "react";

export default function Account() {
  const accountName = wallet.getAccountId();
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {wallet.isSignedIn() ? (
        accountName
      ) : (
        <button
          className="px-[24px]"
          onClick={() => {
            wallet.requestSignIn(DAO_CONTRACT_ID);
          }}
        >
          <span className="hidden sm:block">连接钱包</span>
        </button>
      )}
      <div
        className={`shell overflow-hidden relative rounded-none md:rounded-lg ${
          wallet.isSignedIn() && hover ? "block" : "hidden"
        }`}
      >
        <button
          className="px-[24px] w-full"
          onClick={() => {
            wallet.signOut();
            window.location.assign("/");
          }}
        >
          退出
        </button>
      </div>
    </div>
  );
}
