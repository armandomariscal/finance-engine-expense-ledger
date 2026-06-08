import "dotenv/config";
import { saveStatement, listStatements } from "./services/file.service";
import { askAmount, askPeriod, promptUntilValid } from "./utils/input";
import { createStatement } from "./domain/statement.factory";
import { logSuccess, logError, logWarning } from "./ui/logger";
import { MENU_OPTIONS } from "./constants/menu";
import { t } from "./i18n/messages";
import inquirer from "inquirer";

async function main() {
  console.log(t("title"));

  const { option } = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: t("menu.choose"),
      choices: [
        {
          name: t("menu.create"),
          value: MENU_OPTIONS.CREATE_STATEMENT,
        },
        {
          name: t("menu.view"),
          value: MENU_OPTIONS.VIEW_STATEMENTS,
        },
        {
          name: t("menu.exit"),
          value: MENU_OPTIONS.EXIT,
        },
      ],
    },
  ]);

  if (option === MENU_OPTIONS.CREATE_STATEMENT) {
    try {
      const id = await promptUntilValid(() => askPeriod(t("statement.period")));

      const totalCharges = await promptUntilValid(() =>
        askAmount(t("statement.totalCharges")),
      );

      const totalPayments = await promptUntilValid(() =>
        askAmount(t("statement.totalPayments")),
      );

      const statement = createStatement(id, totalCharges, totalPayments);

      saveStatement(statement);

      logSuccess(t("statement.saved"));
    } catch (error) {
      if ((error as Error).message === "EXIT") {
        logWarning(t("common.cancel"));
      } else {
        logError(t((error as Error).message));
      }
    }
  }

  if (option === MENU_OPTIONS.VIEW_STATEMENTS) {
    const statements = listStatements();
    if (statements.length === 0) {
      logWarning(t("statement.empty"));
    } else {
      const { selectedStatement } = await inquirer.prompt([
        {
          type: "list",
          name: "selectedStatement",
          message: t("statement.select"),
          choices: statements.map((statement) => ({
            name: `${statement.id} | Charges: ${statement.totals.charges} | Payments: ${statement.totals.payments}`,
            value: statement,
          })),
        },
      ]);
      logSuccess(`Seleccionaste: ${selectedStatement.id}`);
    }
  }

  if (option === MENU_OPTIONS.EXIT) {
    logSuccess(t("common.exit"));
    process.exit(0);
  }
}

main();
