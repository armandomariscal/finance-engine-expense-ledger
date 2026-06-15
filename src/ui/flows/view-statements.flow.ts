import { listStatements } from "../../services/file.service";
import { logWarning, logSuccess } from "../../ui/logger";
import { selectStatement } from "../../ui/menus/select-statement.menu";
import { t } from "../../i18n/messages";

export async function viewStatementsFlow() {
  const statements = listStatements();

  if (statements.length === 0) {
    logWarning(t("statement.empty"));
    return;
  }

  const selectedStatement = await selectStatement(statements);

  logSuccess(`Seleccionaste: ${selectedStatement.id}`);
}
