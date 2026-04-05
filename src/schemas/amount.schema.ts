import { z } from "zod";

export const amountSchema = z.preprocess(
  (value) => {
    if (typeof value === "string") {
      return Number(value);
    }
    return value;
  },
  z
    .number()
    .refine((val) => !isNaN(val), {
      message: "errors.amount.invalid",
    })
    .positive({
      message: "errors.amount.positive",
    })
    .transform((val) => Number(val.toFixed(2)))
);