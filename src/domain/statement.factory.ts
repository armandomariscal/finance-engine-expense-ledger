import { Statement } from "./statement";
import { getPeriodDates } from "./period";

export function createStatement(
  id: string,
  charges: number,
  payments: number,
): Statement {
  return {
    id,
    period: getPeriodDates(id),
    totals: {
      charges,
      payments,
    },
    transactions: [],
  };
}
