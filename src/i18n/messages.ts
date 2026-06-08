type Language = "es" | "en";

const messages = {
  es: {
    title: "=== Finance Engine ===",
    menu: {
      create: "1. Crear nuevo estado",
      view: "2. Ver estados existentes",
      exit: "0. Salir",
      choose: "Elige opción: ",
    },
    statement: {
      period: "Periodo (YYYY-MM): ",
      totalCharges: "Total cargos: ",
      totalPayments: "Total abonos: ",
      exists: "Ya existe un estado con ese periodo",
      saved: "Statement guardado correctamente",
      empty: "No hay estados disponibles",
      list: "Estados disponibles:",
      details: "===Detalles del estado ===",
      start: "Inicio",
      end: "Fin",
      charges: "Cargos",
      payments: "Abonos",
      balance: "Saldo",
    },
    common: {
      exit: "Saliendo...",
      cancel: "Operación cancelada",
      typeExit: "(o escribe 'exit')",
    },
    errors: {
      amount: {
        invalid: "Monto inválido",
        positive: "El monto debe ser mayor a 0",
      },
      period: {
        invalidFormat: "Formato inválido. Usa YYYY-MM",
        exists: "El periodo ya existe",
      },
    },
  },
  en: {
    title: "=== Finance Engine ===",
    menu: {
      create: "1. Create new statement",
      view: "2. View existing statements",
      exit: "0. Exit",
      choose: "Choose an option: ",
    },
    statement: {
      period: "Period (YYYY-MM): ",
      totalCharges: "Total charges: ",
      totalPayments: "Total payments: ",
      exists: "Statement already exists",
      saved: "Statement saved successfully",
      empty: "No statements available",
      list: "Available statements:",
      start: "Start",
      end: "End",
      charges: "Charges",
      payments: "Payments",
      balance: "Balance",
    },
    errors: {
      amount: {
        invalid: "Invalid amount",
        positive: "Amount must be greater than 0",
      },
      period: {
        invalidFormat: "Invalid format. Use YYYY-MM",
        exists: "Period already exists",
      },
    },
    common: {
      exit: "Exiting...",
      cancel: "Operation cancelled",
      typeExit: "(or type 'exit')",
    },
  },
};

function getLang(): Language {
  return (process.env.APP_LANG as Language) || "es";
}

export function t(path: string): string {
  const lang = getLang();

  const keys = path.split(".");
  let value: any = messages[lang];

  for (const key of keys) {
    value = value?.[key];
  }

  return value || path;
}
