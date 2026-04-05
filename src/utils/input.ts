import { logError } from "../ui/logger";
import { CLI_EXIT } from "../constants/cli";
import { periodSchema } from "../schemas/period.schema";


import { amountSchema } from "../schemas/amount.schema";

export function askAmount(prompt: (msg: string) => string, message: string): number {
  while (true) {
    const input = prompt(`${message} (o escribe 'exit'): `);

    if (input.trim().toLowerCase() === CLI_EXIT) {
      throw new Error("EXIT");
    }

    const result = amountSchema.safeParse(input);

    if (!result.success) {
      logError(result.error.issues[0].message);
      continue;
    }

    return result.data;
  }
}

export function askPeriod(prompt: (msg: string) => string, message: string): string {
  while (true) {
    const input = prompt(`\n${message} (o escribe 'exit'): `);

    if (input.trim().toLowerCase() === CLI_EXIT) {
      throw new Error("EXIT");
    }

    const result = periodSchema.safeParse(input);

    if (!result.success) {
      logError(`\n${result.error.issues[0].message}\n`);
      continue;
    }

    return result.data;
  }
}