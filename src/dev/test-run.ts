import { Statement } from "../domain/statement";
import { addTransaction, getTotals } from "../services/statement.service";

const statement: Statement = {
  id: "test",
  period: {
    start: new Date(),
    end: new Date(),
  },
  totals: {
    charges: 1000,
    payments: 500,
  },
  transactions: [],
};

addTransaction(statement, {
  id: 1,
  operationDate: new Date(),
  postDate: new Date(),
  description: "Test",
  amount: 200,
  type: "charge",
});

console.log(getTotals(statement.transactions));
console.log(JSON.stringify(statement, null, 2));