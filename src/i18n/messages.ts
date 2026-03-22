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
        },
        common: {
            exit: "Saliendo...",
        }
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
        },
        common: {
            exit: "Exiting...",
        }
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