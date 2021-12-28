import { wallet } from "@/near/Account";
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
        <button className="px-[24px]">
          <span className="hidden sm:block">连接钱包</span>
        </button>
      )}
      <div className={`${hover ? "block" : "hidden"}`}>test</div>
    </div>
  );
}
