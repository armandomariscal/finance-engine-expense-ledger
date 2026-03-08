import promptSync from "prompt-sync";
const prompt = promptSync();

type Currency = "USD" | "MXN";

const exchangeRates: Record<Currency, Record<Currency, number>> = {
  USD: { MXN: 17.5, USD: 1 },
  MXN: { USD: 0.057, MXN: 1 },
};

function convert(amount: number, from: Currency, to: Currency): number {
  const rate = exchangeRates[from][to];
  return amount * rate;
}

console.log("=== Conversor de Divisas (USD ↔ MXN) ===");

const amount = parseFloat(prompt("Ingresa la cantidad: "));
const from = prompt("Moneda origen (USD/MXN): ") as Currency;
const to = prompt("Moneda destino (USD/MXN): ") as Currency;

if (!exchangeRates[from] || !exchangeRates[to]) {
  console.log("❌ Moneda no soportada.");
} else {
  const result = convert(amount, from, to);
  console.log(`${amount} ${from} → ${to} = ${result.toFixed(2)}`);
}