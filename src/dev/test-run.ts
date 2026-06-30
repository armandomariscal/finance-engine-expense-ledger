import { Statement } from "../domain/statement";
import { addTransaction, getTotals } from "../services/statement.service";

const now = new Date();
const statement: Statement = {
  id: "test",
  period: {
    start: now,
    end: now,
  },
  totals: {
    charges: 1000,
    payments: 500,
  },
  transactions: [],
};

const transaction = {
  id: crypto.randomUUID(),
  operationDate: now,
  postDate: now,
  description: "Test",
  amount: 200,
  type: "charge",
};

addTransaction(statement, transaction);

console.log(getTotals(statement.transactions));
console.log(JSON.stringify(statement, null, 2));
