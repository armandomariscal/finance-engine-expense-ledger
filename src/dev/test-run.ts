import { Statement } from "../domain/statement";
import { Transaction } from "../domain/transaction";
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

const transaction: Transaction = {
  id: crypto.randomUUID(),
  operationDate: now,
  postDate: now,
  description: "Test",
  amount: 200,
  type: "charge",
};

const updatedStatement = addTransaction(statement, transaction);

console.log(getTotals(updatedStatement.transactions));
console.log(JSON.stringify(updatedStatement, null, 2));
