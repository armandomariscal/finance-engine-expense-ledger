import { askAmount, askPeriod, promptUntilValid } from "../../utils/input";
import { createStatement } from "../../domain/statement.factory";
import { saveStatement } from "../../services/file.service";
import { logError, logSuccess, logWarning } from "../../ui/logger";
import { t } from "../../i18n/messages";

export async function createStatementFlow() {
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
