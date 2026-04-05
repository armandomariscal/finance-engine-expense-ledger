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
      message: "Monto inválido",
    })
    .positive("El monto debe ser mayor a 0")
    .transform((val) => Number(val.toFixed(2)))
);