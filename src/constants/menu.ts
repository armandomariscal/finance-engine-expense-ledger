export const MENU_OPTIONS = {
  CREATE_STATEMENT: "1",
  VIEW_STATEMENTS: "2",
  EXIT: "0",
} as const;

export type MenuOption = typeof MENU_OPTIONS[keyof typeof MENU_OPTIONS];