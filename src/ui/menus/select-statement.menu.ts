import inquirer from "inquirer";
import { Statement } from "../../domain/statement";
import { t } from "../../i18n/messages";

export async function selectStatement(statements: Statement[]) {
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

  return selectedStatement;
}
