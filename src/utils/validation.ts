import { logError } from "../ui/logger";
import { CLI_EXIT } from "../constants/cli";

export function parseAmount(input: string): number {
  const value = Number(input);

  if (isNaN(value)) {
    throw new Error("Monto inválido");
  }

  if (value <= 0) {
    throw new Error("El monto debe ser mayor a 0");
  }

  return Number(value.toFixed(2));
}

export function parsePeriod(input: string): string {
  const value = input.trim();

  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(value)) {
    throw new Error("Formato inválido. Usa YYYY-MM (ej: 2026-01)");
  }

  return value;
}

export function askAmount(prompt: (msg: string) => string, message: string): number {
  while (true) {
    
    const input = prompt(`${message} (o escribe 'exit'): `);

    if (input.trim().toLowerCase() === CLI_EXIT) {
      throw new Error("EXIT");
    }

    try {
      const input = prompt(message);
      return parseAmount(input);
    } catch (error) {
      logError((error as Error).message);
    }
  }
}

export function askPeriod(prompt: (msg: string) => string, message: string): string {
  while (true) {
    
    const input = prompt(`${message} (o escribe 'exit'): `);

    if (input.trim().toLowerCase() === CLI_EXIT) {
      throw new Error("EXIT");
    }

    try {
      const input = prompt(message);
      return parsePeriod(input);
    } catch (error) {
      logError((error as Error).message);
    }
  }
}