type Theme = "plain" | "default" | "custom";

function getTheme(): Theme {
  const theme = process.env.CLI_THEME;

  if (theme === "plain") return "plain";
  if (theme === "custom") return "custom";

  return "default";
}

function format(type: "success" | "error" | "warning", msg: string): string {
  const theme = getTheme();

  if (theme === "plain") {
    return msg;
  }

  if (theme === "default") {
    const icons = {
      success: "✔",
      error: "✖",
      warning: "⚠",
    };

    return `${icons[type]} ${msg}`;
  }

  if (theme === "custom") {
    const icons = {
      success: "🟢",
      error: "🔴",
      warning: "🟡",
    };

    return `${icons[type]} ${msg}`;
  }

  return msg;
}

export function logSuccess(msg: string) {
  console.log(format("success", msg));
}

export function logError(msg: string) {
  console.log(format("error", msg));
}

export function logWarning(msg: string) {
  console.log(format("warning", msg));
}