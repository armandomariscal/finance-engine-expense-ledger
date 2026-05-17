import { z } from "zod";

export const transactionSchema = z.object({
  id: z.string().uuid(),

  operationDate: z.coerce.date(),

  postDate: z.coerce.date(),

  description: z.string().min(1),

  amount: z.number().positive(),

  type: z.enum(["charge", "payment"]),

  category: z
    .enum([
      "food",
      "transport",
      "shopping",
      "health",
      "services",
      "salary",
      "other",
    ])
    .optional(),

  paymentMethod: z
    .enum(["cash", "credit_card", "debit_card", "transfer"])
    .optional(),
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
