import { Transaction } from "./transaction";

export interface Statement {
  id: string;

  period: {
    start: Date;
    end: Date;
  };

  totals: {
    charges: number;
    payments: number;
  };

  transactions: Transaction[];
}
