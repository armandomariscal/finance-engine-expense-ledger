import { showMainMenu } from "./ui/menus/main.menu";
import { MENU_OPTIONS } from "./constants/menu";
import { createStatementFlow } from "./ui/flows/create-statement.flow";
import { viewStatementsFlow } from "./ui/flows/view-statements.flow";
import { logSuccess } from "./ui/logger";
import { t } from "./i18n/messages";

export async function runApp() {
  console.log(t("title"));

  const option = await showMainMenu();

  switch (option) {
    case MENU_OPTIONS.CREATE_STATEMENT:
      await createStatementFlow();
      break;

    case MENU_OPTIONS.VIEW_STATEMENTS:
      await viewStatementsFlow();
      break;

    case MENU_OPTIONS.EXIT:
      logSuccess(t("common.exit"));
      process.exit(0);
  }
}
