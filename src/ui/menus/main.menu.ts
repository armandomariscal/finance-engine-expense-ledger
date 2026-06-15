import inquirer from "inquirer";
import { MENU_OPTIONS } from "../../constants/menu";
import { t } from "../../i18n/messages";

export async function showMainMenu() {
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

  return option;
}
