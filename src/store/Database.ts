import { TokenMetadata } from "@/types";
import Dexie from "dexie";

class Database extends Dexie {
  public tokens: Dexie.Table<TokenMetadata>;
  public constructor() {
    super("vite-dex");
    this.version(1).stores({
      tokens:
        "id, name, symbol, decimals, icon, ref, near, total, amountLabel, amount",
    });
    this.tokens = this.table("tokens");
  }

  public allTokens() {
    return this.tokens;
  }
}

const db = new Database();
export default db;
