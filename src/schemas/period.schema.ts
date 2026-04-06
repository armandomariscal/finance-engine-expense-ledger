import { z } from "zod";
import { statementExists } from "../services/file.service";

export const periodSchema = z
  .string()
  .trim()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, {
    message: "errors.period.invalidFormat",
  })
  .refine((value) => !statementExists(value), {
    message: "errors.period.exists",
  });