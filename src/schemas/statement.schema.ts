import { z } from "zod";

export const transactionSchema = z.object({
  type: z.enum(["charge", "payment"]),
  amount: z.number(),
});

export const statementSchema = z.object({
  id: z.string(),

  period: z.object({
    start: z.coerce.date(),
    end: z.coerce.date(),
  }),

  totals: z.object({
    charges: z.number(),
    payments: z.number(),
  }),

  transactions: z.array(transactionSchema),
});

export type StatementSchema = z.infer<typeof statementSchema>;