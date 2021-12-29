import { wallet } from "@/near/Account";
import { daoGetCitizen } from "@/near/Function";
import { useQuery } from "react-query";
export function useCitizen() {
  const accountName = wallet.getAccountId() as string;
  const citizen = useQuery("citizen", async () => {
    return daoGetCitizen(accountName);
  });
  return citizen;
}
