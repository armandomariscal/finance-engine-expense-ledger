import "dotenv/config";
import { Statement } from "./domain/statement";
import {
  saveStatement,
  listStatements,
} from "./services/file.service";
import { askAmount, askPeriod } from "./utils/input";
import { logSuccess, logError, logWarning } from "./ui/logger";
import { MENU_OPTIONS } from "./constants/menu";
import { t } from "./i18n/messages";
import inquirer from "inquirer";

function getPeriodDates(id: string) {
  const [year, month] = id.split("-").map(Number);

  return {
    start: new Date(year, month - 1, 1),
    end: new Date(year, month, 0),
  };
}

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
      let id: string;

      while (true) {
        try {
          id = await askPeriod(t("statement.period"));
          break;
        } catch (error) {
          if ((error as Error).message === "EXIT") {
            throw error;
          }
          logError(t((error as Error).message));
        }
      }

      let totalCharges: number;
      while (true) {
        try {
          totalCharges = await askAmount(t("statement.totalCharges"));
          break;
        } catch (error) {
          if ((error as Error).message === "EXIT") {
            throw error;
          }
          logError(t((error as Error).message));
        }
      }

      let totalPayments: number;
      while (true) {
        try {
          totalPayments = await askAmount(t("statement.totalPayments"));
          break;
        } catch (error) {
          if ((error as Error).message === "EXIT") {
            throw error;
          }
          logError(t((error as Error).message));
        }
      }

      const period = getPeriodDates(id);

      const statement: Statement = {
        id,
        period,
        totals: {
          charges: totalCharges,
          payments: totalPayments,
        },
        transactions: [],
      };

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