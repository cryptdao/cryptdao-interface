import { wallet } from "@/near/Account";
import { daoGetCitizen } from "@/near/Function";
import { OwnerState } from "@/state";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
export function useCitizen() {
  const [owner, setOwner] = useRecoilState(OwnerState);

  const accountName = wallet.getAccountId() as string;
  const citizen = useQuery("owner", async () => {
    return daoGetCitizen(accountName);
  });
  if (citizen.isSuccess) {
    setOwner(citizen.data);
  }
  return citizen;
}
