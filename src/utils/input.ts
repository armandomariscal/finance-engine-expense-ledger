import inquirer from "inquirer";
import { CLI_EXIT } from "../constants/cli";
import { periodSchema } from "../schemas/period.schema";
import { amountSchema } from "../schemas/amount.schema";
import { logError } from "../ui/logger";
import { t } from "../i18n/messages";

export async function askPeriod(message: string): Promise<string> {
  const { value } = await inquirer.prompt([
    {
      type: "input",
      name: "value",
      message: `${message} ${t("common.typeExit")}`,
    },
  ]);

  if (value.trim().toLowerCase() === CLI_EXIT) {
    throw new Error("EXIT");
  }

  const result = periodSchema.safeParse(value);

  if (!result.success) {
    throw new Error(result.error.issues[0].message);
  }

  return result.data;
}

export async function askAmount(message: string): Promise<number> {
  const { value } = await inquirer.prompt([
    {
      type: "input",
      name: "value",
      message: `${message} ${t("common.typeExit")}`,
    },
  ]);

  if (value.trim().toLowerCase() === CLI_EXIT) {
    throw new Error("EXIT");
  }

  const result = amountSchema.safeParse(value);

  if (!result.success) {
    throw new Error(result.error.issues[0].message);
  }

  return result.data;
}

export async function promptUntilValid<T>(fn: () => Promise<T>): Promise<T> {
  while (true) {
    try {
      return await fn();
    } catch (error) {
      if ((error as Error).message === "EXIT") {
        throw error;
      }

      logError(t((error as Error).message));
    }
  }
}
