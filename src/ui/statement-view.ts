import { Statement } from "../domain/statement";
import { logSuccess, logError, logWarning } from "../ui/logger";
import { t } from "../i18n/messages";

export function displayStatement(statement: Statement): void {
  console.log("\n" + t("statement.details"));

  console.log(t("statement.period"));

  console.log(
    `${t("statement.start")}: ${statement.period.start.toLocaleDateString()}`,
  );
  console.log(
    `${t("statement.end")}: ${statement.period.end.toLocaleDateString()}`,
  );

  console.log(`${t("statement.charges")}: ${statement.totals.charges}`);
  console.log(`${t("statement.payments")}: ${statement.totals.payments}`);

  const balance = statement.totals.payments - statement.totals.charges;
  if (balance > 0) {
    logSuccess(`${t("statement.balance")}: ${balance}`);
  } else if (balance < 0) {
    logError(`${t("statement.balance")}: ${balance}`);
  } else {
    logWarning(`${t("statement.balance")}: ${balance}`);
  }
}
