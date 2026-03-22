import { Statement } from "../domain/statement";
import { Transaction } from "../domain/transaction";

export function getTotals(transactions: Transaction[]) {
  return transactions.reduce(
    (acc, tx) => {
      if (tx.type === "charge") acc.charges += tx.amount;
      if (tx.type === "payment") acc.payments += tx.amount;
      return acc;
    },
    { charges: 0, payments: 0 }
  );
}

export function addTransaction(statement: Statement, tx: Transaction) {
  const totals = getTotals(statement.transactions);

  if (tx.type === "charge") {
    if (totals.charges + tx.amount > statement.totals.charges) {
      throw new Error("Excede el total de cargos del estado de cuenta");
    }
  }

  if (tx.type === "payment") {
    if (totals.payments + tx.amount > statement.totals.payments) {
      throw new Error("Excede el total de abonos del estado de cuenta");
    }
  }

  statement.transactions.push(tx);
}