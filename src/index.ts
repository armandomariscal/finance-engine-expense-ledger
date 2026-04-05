import "dotenv/config";
import promptSync from "prompt-sync";
import { Statement } from "./domain/statement";
import {
  saveStatement,
  statementExists,
  listStatements,
} from "./services/file.service";
import { askAmount, askPeriod } from "./utils/input";
import { logSuccess, logError, logWarning } from "./ui/logger";
import { MENU_OPTIONS } from "./constants/menu";
import { t } from "./i18n/messages";

const prompt = promptSync();

console.log(t("title"));
console.log(t("menu.create"));
console.log(t("menu.view"));
console.log(t("menu.exit"));

const option = prompt(t("menu.choose"));

if (option === MENU_OPTIONS.CREATE_STATEMENT) {
  try {
    let id: string;

    while (true) {
      id = askPeriod(prompt, t("statement.period"));

      if (statementExists(id)) {
        logError(t("statement.exists"));
      } else {
        break;
      }
    }

    const totalCharges = askAmount(prompt, t("statement.totalCharges"));
    const totalPayments = askAmount(prompt, t("statement.totalPayments"));

    const statement: Statement = {
      id,
      period: {
        start: new Date(`${id}-01`),
        end: new Date(`${id}-28`),
      },
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
      logWarning("Operación cancelada");
    } else {
      logError((error as Error).message);
    }
  }
}

if (option === MENU_OPTIONS.VIEW_STATEMENTS) {
  const statements = listStatements();

  if (statements.length === 0) {
    logWarning(t("statement.empty"));
  } else {
    logSuccess(t("statement.list"));
    statements.forEach(statement => console.log("-", statement));
  }


}

if (option === MENU_OPTIONS.EXIT) {
  logSuccess(t("common.exit"));
  process.exit(0);
}